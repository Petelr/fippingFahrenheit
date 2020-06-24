//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    focus: false,
    temp_f: '',
    temp_c: ''
  },
  tempConversionF2C: function (input) {
    //onsole.log("Current Input Length: " + input.detail.value.length);
    var temp_val = (5/9)*(input.detail.value-32);
    var pos = input.detail.cursor;
    temp_val = autoRound(temp_val);
    if (pos){
      this.setData({
        temp_f: temp_val
      })
    } else{
      this.setData({
        temp_f: ''
      })
    }
  },
  tempConversionC2F: function (input) {
    //console.log("Current Input: " + input.detail.value);
    var temp_val = (9/5)*input.detail.value+32;
    var pos = input.detail.cursor;
    temp_val = autoRound(temp_val);
    if (pos){
      this.setData({
        temp_c: temp_val
      })
    } else{
      this.setData({
        temp_c: ''
      })
    }
  }
})

function autoRound(val) {
  if (Number.isInteger(val))
    val = Math.round(val);
  else
    val = val.toFixed(1);
  return val;
}