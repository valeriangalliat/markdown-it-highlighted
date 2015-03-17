import { equal } from 'assert'
import md from 'markdown-it'
import highlighted from './'

const env = {}
const parser = md().use(highlighted)

parser.render('```js\nconsole.log(42)\n```', env)
equal(env.highlighted, false)

parser.set({ highlight: () => 'highlighted code' })
parser.render('```js\nconsole.log(42)\n```', env)
equal(env.highlighted, true)

parser.render('# Hello, world!', env)
equal(env.highlighted, false)
