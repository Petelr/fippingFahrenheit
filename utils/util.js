const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function unitConversion (source, num) {
  var temp_c = document.getElementById("input_Celsius");
  var result = (5/9)*(num.detail.value-32);
  result = result.toFixed(1);
  temp_c.value = result;
  console.log("Hi!");
}