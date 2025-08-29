let dados = await fetch('https://express-http-server.onrender.com/')
dados = await dados.json()
console.log(dados)

let dadoss = await fetch(
    'https://express-http-server.onrender.com/',
    {
        method:"POST",
        headers:{"Content-Type":"application/json "},
        body:JSON.stringify({player:"teste", score:3})
    }
)
dados = await dados.json()
console.log(dados)