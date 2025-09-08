/*
  ARQUIVO: script.js
  ATIVIDADE: "Portal de Notícias do IBGE"
  DESCRIÇÃO: Roteiro para implementar a busca e exibição de notícias da API do IBGE.
*/

// --- PASSO 1: SELEÇÃO DOS ELEMENTOS DO DOM ---
const containerNoticias = document.querySelector('#container-noticias')


function buscarNoticias() {
 
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10';

  fetch(url)
   
    .then(resposta => resposta.json())
    .then(dados => {
     
      const noticias = dados.items; 

      containerNoticias.innerHTML = ''; 

      noticias.forEach(noticia => { 
        const imagemInfo = JSON.parse(noticia.imagens); 
        const urlImagem = `https://agenciadenoticias.ibge.gov.br/${imagemInfo.image_intro}`; 

       
        const cardHTML = `
          <article class="card-noticia">
            <img src="${urlImagem}" alt="Imagem da notícia" class="imagem-noticia">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.introducao}</p>
            <a href="${noticia.link}" target="_blank" rel="noopener noreferrer">Leia mais</a>
          </article>
        `;

        containerNoticias.innerHTML += cardHTML;
      });
    })
    
    .catch(erro => {
      
        
        
      console.error('Erro ao buscar notícias:', erro);
    });
}


document.addEventListener('DOMContentLoaded', () => {
  buscarNoticias();
});