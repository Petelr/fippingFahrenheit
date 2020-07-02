//index.js
//获取应用实例
var util = require('../../utils/util.js')
const app = getApp()
var values = ['temp_f', 'temp_c'];

Page({
  data: {
    focus: false,
    temp_f: '',
    temp_c: '',
    lang: ''
  },

  onLoad: function () {
    wx.getSystemInfo({
      success: function(res) {
        //console.log(res.language)
      }
    })
  },

  tempConversion: function (input) {
    var id = input.target.id;         // getting input id
    var val = input.detail.value;
    var pos = input.detail.cursor;
    var result = '';
    if (pos){                         // avoid shouing Nah
      if (id === "input_Fahrenheit") {
        result = f2c(val);
        this.setData({
          temp_c: result,
          temp_f: val
        })
      }
      else if (id === "input_Celsius") {
        result = c2f(val);
        this.setData({
          temp_c: val,
          temp_f: result
        })
      }
    }
    else {
      this.setData({
        temp_f: '',
        temp_c: ''
      })
    }
  },

  flipSign: function (input) {
    var id = input.target.id;         // getting input id 
    if (id === 'btn_Fahrenheit'){
      var temp = this.data.temp_f * -1.0;
      this.setData({
        temp_f: temp,
        temp_c: f2c(temp)
      })
    }
    else if (id === 'btn_Celsius'){
      var temp = this.data.temp_c * -1.0;
      this.setData({
        temp_c: temp,
        temp_f: c2f(temp)
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

function f2c(f) {
  var result = (5/9)*(f-32);
  return autoRound(result);
}

function c2f(c) {
  var result = (9/5)*c+32;
  return autoRound(result)
}