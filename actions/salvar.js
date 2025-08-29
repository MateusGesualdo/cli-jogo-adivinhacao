import { confirm } from "@inquirer/prompts"
import chalk from "chalk"

export async function salvarSeForRecorde(nome, tentativas) {
    let historico = []

    try {
        const conteudo = await fetch('https://express-http-server.onrender.com/')
        historico = await conteudo.json()
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.log(chalk.red(`Erro ao ler o histórico: ${err.message}`))
            return
        }
        // Se o arquivo não existir, seguimos com lista vazia
    }

    const recordeAtual = historico.find(j => j.nome === nome)

    if (!recordeAtual) {
        const confirmar = await confirm({
            message: chalk.yellow(`Esse nome ainda não tem nenhum registro. Deseja criar um novo registro para "${nome}"?`)
        })

        if (!confirmar) {
            console.log(chalk.gray("Registro cancelado."))
            return
        }
    }

    if (!recordeAtual || tentativas < recordeAtual.tentativas) {
        const novoRegistro = {
            nome,
            data: new Date().toISOString(),
            tentativas
        }

        const novoHistorico = historico.filter(j => j.nome !== nome)
        novoHistorico.push(novoRegistro)

        await fetch(
            'https://express-http-server.onrender.com/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json " },
                body: JSON.stringify({ player: nome, score: tentativas })
            }
        )
        // await fs.writeFile(caminho, JSON.stringify(novoHistorico, null, 2))
        console.log(chalk.bold.greenBright("✨ Novo recorde registrado!"))
    } else {
        console.log(chalk.italic.yellowBright("Você acertou, mas não bateu seu recorde."))
    }
}
