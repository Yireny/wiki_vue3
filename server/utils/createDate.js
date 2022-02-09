//当前时间
function createDate(){
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth()+1
  var day = date.getDate()
  var hh = date.getHours()
  var mm = date.getMinutes()
  var ss = date.getSeconds()
  return year+'-'+month+'-'+day+' '+' '+hh+':'+mm+':'+ss
}

module.exports = createDate