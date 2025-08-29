let dados = await fetch('https://guessthenumber-yvsk.onrender.com/') 
dados = await dados.json() 
console.log (dados) 

let dados_2 = await fetch(
    'https://guessthenumber-yvsk.onrender.com/', 
    {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({player:"teste", score:3})   
    }
)
dados = await dados.json() 
console.log(dados) 