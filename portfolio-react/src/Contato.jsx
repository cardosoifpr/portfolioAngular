
import { useState } from 'react';

function Contato() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [aviso, setAviso] = useState('');

    function enviar(e){
        e.preventDefault();
        setAviso('Obrigado', + nome + '! Seu email registrado é ' + email + '. Sua mensagem possui ' +mensagem.length + 'caracteres, pronta para envio.');
        setNome('');
        setMensagem('');
        setEmail('');
    }

    return (
        <section className="contato">
            <h2>Contato</h2>
            <form onSubmit={enviar}>
                <label>
                Seu nome
                <input
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </label>

            <label>
                Seu Email
                <textarea
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label>
                Sua mensagem
                <textarea
                    name="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
        <p>Olá, {nome}! Seu email registrado é "{email}" e sua mensagem tem {mensagem.length} caracteres.</p>
        <p className="aviso">{aviso}</p>
        </section>
            
    );
}

export default Contato;
