
import { useState, useEffect } from 'react';
import API from './api.js';

function Catalogo() {
  const [tecnologias, setTecnologias] = useState([]);

  async function buscarTecnologias() {
    try {
      const resposta = await fetch(API + '/api/tecnologias');

      if (!resposta.ok) {
        throw new Error('A API respondeu ' + resposta.status);
      }

      const dados = await resposta.json();
      setTecnologias(dados);

    } catch (erro) {
      console.error('Erro ao carregar tecnologias:', erro);
    }
  }

  useEffect(() => {
    buscarTecnologias();
  }, []);

  return (
    <section className="catalogo">
      <h2>Catálogo de tecnologias</h2>

      <ul>
        {tecnologias.map((t) => (
          <li key={t.id}>
            {t.nome} - {t.categoria}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Catalogo;
