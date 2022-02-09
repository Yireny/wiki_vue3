//生成随机ID
function createID(){
  return Math.random().toFixed(6).slice(-6)
}

module.exports = createID