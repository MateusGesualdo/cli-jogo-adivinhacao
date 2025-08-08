import { number } from "@inquirer/prompts"
import chalk from "chalk"

export async function jogar() {
    try { 
        // chamada de api
        // solicitar inputs 
        // 
        const numeroAleatorio = Math.floor(Math.random() * 101)
        let numeroTentativas = 7
        let numerosJaTentados = []

        while (numeroTentativas > 0) {

            let palpite = await number({ message: chalk.yellow("Digite um número de 0 a 100") })  

            // Verifica se o número já foi tentado
            if (numerosJaTentados.includes(palpite)) {
                console.log(chalk.red("⚠️  Você já tentou esse número! Tente outro."))
                console.log(chalk.gray(`Números já tentados: ${numerosJaTentados.join(', ')}`))
                continue // Volta para o início do loop sem reduzir tentativas
            }

            // Adiciona o número à lista de tentativas
            numerosJaTentados.push(palpite)

            if (palpite === numeroAleatorio) {
                console.log(chalk.green("Parabéns, voce acertou!"))
                break
            } else if (palpite > numeroAleatorio) {

                console.log(chalk.blue("Muito alto,") + chalk.rgb(170, 32, 197)("tente um número") + chalk.rgb(0, 185, 231) ("menor"))
            } else if (palpite < numeroAleatorio) {
                console.log(chalk.blue("Muito baixo,") + chalk.rgb(170, 32, 197)("tente um número") + chalk.rgb(0, 185, 231) ("maior"))
            } else {
                numeroTentativas++
                console.log("Entrada não é um número válido")

            }

            numeroTentativas = numeroTentativas - 1
        }

        if (numeroTentativas === 0) {
            console.log(chalk.red(`Tentativas acabaram, o número era ${numeroAleatorio}`))
        }

    } catch {
        console.log('Programa encerrado pelo usuário ))')
    }

}