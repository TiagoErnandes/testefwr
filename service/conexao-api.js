

export default async function puxarDados(url) {
       const dadosResponse = await fetch(url);
        const dadosJson = await dadosResponse.json();
        return dadosJson  
}

