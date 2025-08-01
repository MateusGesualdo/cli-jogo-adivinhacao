import { number } from "@inquirer/prompts"
import chalk from "chalk"
export async function jogar() {
    try {
        // chamada de api
        // solicitar inputs
        //
        const numeroAleatorio = Math.floor(Math.random() * 101)
        let numeroTentativas = 7

        while (numeroTentativas > 0) {

            let palpite = await number({ message: chalk.yellow("Digite um número de 0 a 100") })  

            if (palpite === numeroAleatorio) {
                console.log(chalk.green("Parabéns, voce acertou!"))
                break
            } else if (palpite > numeroAleatorio) {
                console.log(chalk.blue("Muito alto,") + chalk.rgba(170, 32, 197, 1)("tente um número") + chalk.rgba(0, 185, 231, 1) ("menor"))
            } else if (palpite < numeroAleatorio) {
                console.logchalk.blue("Muito alto,") + chalk.rgba(170, 32, 197, 1)("tente um número") + chalk.rgba(0, 185, 231, 1) ("menor"))
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

