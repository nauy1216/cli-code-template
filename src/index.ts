import commander from 'commander'
import createProject from './command/create'
import build from './command/build'
import dev from './command/dev'

export default function start() {
  commander
    .command('create <app-name>')
    .description('根据项目模版创建新的项目')
    .action((name, cmd) => {
      createProject(name, {})
    })

  commander
    .command('dev <frame>')
    .description('启动开发服务，<frame>框架类型[react|vue]')
    .action((frame, cmd) => {
      dev(frame)
    })

  commander
    .command('build <entry>')
    .description('build ')
    .action((entry, cmd) => {
      build(entry)
    })

  commander
    .command('init:eslint')
    .description('init:eslint ')
    .action((entry, cmd) => {
      build(entry)
    })

  commander.parse(process.argv)
}
