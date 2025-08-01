import { number } from "@inquirer/prompts"
async function jogar() {
    try {
        // chamada de api
        // solicitar inputs
        //
        const numeroAleatorio = Math.floor(Math.random() * 101)
        let numeroTentativas = 7

        while (numeroTentativas > 0) {

            let palpite = await number({ message: "Digite um número de 0 a 100" })

            if (palpite === numeroAleatorio) {
                console.log("Parabéns, voce acertou!")
                break
            } else if (palpite > numeroAleatorio) {
                console.log("Muito alto, tente um número menor")
            } else if (palpite < numeroAleatorio) {
                console.log("Muito baixo, tente um número maior")
            } else {
                numeroTentativas++
                console.log("Entrada não é um número válido")
            }

            numeroTentativas = numeroTentativas - 1
        }

        if (numeroTentativas === 0) {
            console.log(`Tentativas acabaram, o número era ${numeroAleatorio}`)
        }

    } catch {
        console.log('Programa encerrado pelo usuário (vosse )')
    }

}

