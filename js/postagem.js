import puxarDados from "../service/conexao-api.js";
const tabela = document.querySelector(".resultado-api");

async function mostrarDadosApi() {
  const dadosPostagem = await puxarDados(`https://jsonplaceholder.typicode.com/posts`)
   dadosPostagem.forEach(element =>
    tabela.appendChild(criarNovaLinha(element.id, element.title, element.body)))
}

const criarNovaLinha = (id, title, body) => {
  const linhaPostagem = document.createElement('tr');
  const conteudo = `
  <td class="td-postagem" id=${id}>${title}</td>
  <td class="td-postagem" >${body}</td>
  <td>  
  </td>`
  linhaPostagem.innerHTML = conteudo;
  return linhaPostagem;
}

mostrarDadosApi();

