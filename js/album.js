const tabela = document.querySelector(".resultado-api");
import puxarDados from "../service/conexao-api.js";

async function mostraDadosApi() {
  let controle = 0;
  let conteudo = '';
  try {
    const dadostratados = await puxarDados(`https://jsonplaceholder.typicode.com/albums`)

    dadostratados.forEach(element => {
      if (element.userId === controle) {
        conteudo += `<tr>
                     <td>${element.title}</td>
                  </tr>`
      } else {
        controle == 0 ? conteudo + '' : conteudo += ' </table> </div>'
        conteudo += `<div class="card"> <table>
        <tr>
          <th>Album ${element.userId}</th>
        </tr>
        <tr>
          <td>${element.title}</td>
        </tr>
      `
        controle++;
      }
    })
    conteudo += '</table> </div>'
    tabela.innerHTML = conteudo;
  } catch (erro) {
    console.log(erro);
    window.location.href = '../telas/error.html'
  }
}

mostraDadosApi();