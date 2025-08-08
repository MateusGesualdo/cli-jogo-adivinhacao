import {jogar} from './jogar.js'

// jogar()

await jogar()

// let comecar = await number("Deseja começar (1 = sim / 2 = não)?  ")

// if (comecar == 1){
// }
while (true){

    let continuar = await number("Deseja continuar jogando (1 = sim / 2 = não)?")
    if (continuar == 1){
        console.log("Continuando...")
        await jogar()
    
    }else{
        console.log("Parando...")
        break
    }
}