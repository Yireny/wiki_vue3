//çæéæºID
function createID(){
  return Math.random().toFixed(6).slice(-6)
}

module.exports = createID