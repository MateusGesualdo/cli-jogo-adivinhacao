import { jogar } from './jogar.js'
import { confirm } from '@inquirer/prompts'
import chalk from 'chalk'

// Primeira rodada
await jogar()

// Loop de continuação
while (true) {
  const continuar = await confirm({
    message: chalk.yellow('Deseja continuar jogando?')
  })

  if (!continuar) {
    console.log(chalk.gray('Jogador decidiu parar.'))
    break
  }

  await jogar()
}
