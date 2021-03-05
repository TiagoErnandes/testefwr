const tabela = document.querySelector(".resultado-api");
import puxarDados from "../service/conexao-api.js";

async function mostraDadosApi() {
  let controle = 0;
  let conteudo = '';
  let tipoClasse = '';
  let tipoCompleto = '';
  
  try {
  const dadostratados = await puxarDados(`https://jsonplaceholder.typicode.com/todos`)
  dadostratados.forEach(element => {

    if (element.userId === controle) {
      element.completed ? [tipoClasse = 'completo', tipoCompleto = "Completo"] : [tipoClasse = 'incompleto', tipoCompleto = "Incompleto"];
      conteudo += `<tr>
                     <td>${element.title}</td>
                     <td class=${tipoClasse}>${tipoCompleto}</td>
                  </tr>`
    } else {
      element.completed ? [tipoClasse = 'completo', tipoCompleto = 'Ok'] : [tipoClasse = 'incompleto', tipoCompleto = 'pendente'];
      controle == 0 ? conteudo + '' : conteudo += ' </table> </div>'
      conteudo += `<div class="card"> <table>
        <tr>
          <th>Album ${element.userId}</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>${element.title}</td>
          <td class=${tipoClasse}>${tipoCompleto}</td>
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