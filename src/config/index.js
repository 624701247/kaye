let env = process.env.NODE_ENV
// node环境变量： development 、 production（在浏览器控制直接输入查看不了的）
// console.log('process env: ', process.env)
export default Object.assign(
  {},
  require('./base'),
  require(`./${env}.js`)
)
