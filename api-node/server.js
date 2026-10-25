const express = require('express');
const cors = require ('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('./db');

const app = express();
const PORTA = 3000;

const SEGREDO = 'rafaela-cardoso-linda';

app.use(cors());
app.use(express.json());


function autenticar(req, res, next) {
    const cabecalho = req.headers.authorization ?? '';
    const token = cabecalho.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ erro: 'Acesso não autorizado. Token de autenticação nao informado. '});        
    }
    try {
        req.usuario = jwt.verify(token, SEGREDO);
        next();
    } catch (erro) {
        return res.status(401).json({ erro: 'Token invalido ou expirado. Acesso nao autorizado '});
    }
}


app.get('/api/projetos', async (req, res) => {
    try {
    const sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE status = 'publicado' ORDER BY ano DESC, id";
    const [projetos] = await pool.query(sql);
    res.json(projetos);
    } catch (erro) {
        res.status(500).json({erro: 'Falha no servidor: ' + erro.message});  
    }
});

app.get('/api/projetos/todos', autenticar, async (req, res) => {
    try {
    const sql = "SELECT id, nome, descricao, tecnologias, link_github, status, ano FROM projetos ORDER BY ano DESC, id";
    const [projetos] = await pool.query(sql);
    res.json(projetos);
    } catch (erro) {
        res.status(500).json({erro: 'Falha no servidor: ' + erro.message});  
    }
});


app.get('/api/projetos/:id', async (req, res) => {
    try {
        const sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE id = ? AND status = 'publicado'";
        const [linhas] = await pool.execute(sql, [req.params.id]);
        if (linhas.length === 0) {
            return res.status(404).json({erro: 'Projeto nao encontrado'});
    }
    res.json(linhas[0]);
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor ' + erro.message });
    }
});

app.post('/api/projetos', autenticar, async (req, res) => {
    try {
        const dados = req.body;
        console.log(dados);
        if (!dados ||  !dados.nome) {
            return res.status(400).json({ erro: 'Informe pelo menos o nome do projeto.'});
        }
        const sql = 'INSERT INTO projetos (nome, descricao, tecnologias, link_github, ano, status) VALUES (?, ?, ?, ?, ?, ?)';
        const [resultado] = await pool.execute(sql , [
            dados.nome, dados.descricao ?? '', dados.tecnologias ?? '',
            dados.link_github ?? '', dados.ano ?? new Date().getFullYear(), 'publicado'
        ]);
        res.status(201).json({ id: resultado.insertId });
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message });
    }
});

app.put('/api/projetos/:id', autenticar, async (req, res) => {
    try {
        const dados = req.body;
        if (!dados || !dados.nome) {
            return res.status(400).json({ erro: 'Informe pelo menos o nome do projeto.'});
        }
        const sql = 'UPDATE projetos SET nome = ?, descricao = ?, tecnologias = ?, link_github = ?, ano = ? WHERE id = ?';
        const [resultado] = await pool.execute(sql, [
            dados.nome, dados.descricao ?? '', dados.tecnologias ?? '', dados.link_github ?? '', dados.ano ?? new Date().getFullYear(), req.params.id
        ]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: 'Projeto nao encontrado'});
        }
        res.json({ mensagem: 'Projeto atualizado' });
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor ' + erro.message });
    }
});

app.delete('/api/projetos/:id', autenticar, async (req, res) => {
    try {
        const [resultado] = await pool.execute('DELETE FROM projetos WHERE id = ?', [req.params.id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: 'Projeto nao encontrado' });
        }
        res.status(204).end();
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message });
    }
});

app.get('/api/tecnologias', async (req, res) => {
    try {
        const sql = "SELECT id, nome, categoria, descricao, ano_criacao FROM tecnologias WHERE status = 'ativo' ORDER BY categoria, nome";
        const [tecnologias] = await pool.execute(sql);
        res.json(tecnologias);       
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor ' + erro.message });
    }
});

app.get('/api/tecnologias/:id', async (req, res) => {
    try {
        const sql = "SELECT id, nome, categoria, descricao, ano_criacao FROM tecnologias WHERE id = ? AND status = 'ativo'";
        const [linhas] = await pool.execute(sql, [req.params.id]);
        if (linhas.length === 0) {
            return res.status(404).json({erro: 'Tecnologia nao encontrada'});
    }
    res.json(linhas[0]);
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor ' + erro.message });
    }
});

app.post('/api/tecnologias', autenticar, async (req, res) => {
    try {
        const dados = req.body;
        console.log(dados);
        if (!dados ||  !dados.nome) {
            return res.status(400).json({ erro: 'Informe pelo menos o nome da tecnologia.'});
        }
        const sql = 'INSERT INTO tecnologias (nome, categoria, descricao, ano_criacao, status, criado_em) VALUES (?, ?, ?, ?, ?, ?)';
        const [resultado] = await pool.execute(sql , [
            dados.nome, dados.categoria ?? '', dados.descricao ?? '',
            dados.ano_criacao ?? new Date().getFullYear(), dados.status ?? 'ativo', dados.criado_em ?? new Date()
        ]);
        res.status(201).json({ id: resultado.insertId });
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message });
    }
});

app.put('/api/tecnologias/:id', autenticar, async (req, res) => {
    try {
        const dados = req.body;
        if (!dados || !dados.nome) {
            return res.status(400).json({ erro: 'Informe pelo menos o nome da tecnologia.'});
        }
        const sql = 'UPDATE tecnologias SET nome = ?, categoria = ?, descricao = ?, ano_criacao = ?, status = ?, criado_em = ? WHERE id = ?';
        const [resultado] = await pool.execute(sql, [
            dados.nome, dados.categoria, dados.descricao ?? '', dados.ano_criacao ?? new Date().getFullYear(), dados.status ?? 'ativo', dados.criado_em ?? new Date(), req.params.id
        ]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: 'Tecnologia nao encontrada'});
        }
        res.json({ mensagem: 'Tecnologia atualizada' });
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor ' + erro.message });
    }
});

app.delete('/api/tecnologias/:id', autenticar, async (req, res) => {
    try {
        const [resultado] = await pool.execute('DELETE FROM tecnologias WHERE id = ?', [req.params.id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: 'Tecnologia nao encontrada'});
        }
        res.status(204).end();
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message });
    }
});


app.post('/api/login', async (req, res) => {
    try {
        const dados = req.body;
        if (!dados || !dados.email || !dados.senha) {
            return res.status(400).json({ erro: 'Informe email e senha' });    
        }
        const [linhas] = await pool.execute('SELECT id, email, senha_hash FROM usuarios WHERE email = ?', [dados.email]);
        const usuario = linhas[0];
        if (!usuario) {
            return res.status(401).json({ erro: 'Email ou senha inválidos. Confira suas credenciais' });            
        }
        const confere = await bcrypt.compare(dados.senha, usuario.senha_hash);
        if (!confere) {
            return res.status(401).json({ erro: 'Email ou senha inválidos. Confira suas credenciais' });            
        }
        const token = jwt.sign({ id: usuario.id, email: usuario.email }, SEGREDO, { expiresIn: '3h' });
        res.json({ token });
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message });
    }
});


app.listen(PORTA, () => {
   console.log('API no ar em http://localhost:' + PORTA)
});