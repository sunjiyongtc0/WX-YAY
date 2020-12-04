// miniprogram/pages/times/times.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
const timesdata = require('../../js/timesData.js');
const url = require('../../js/apiUrl.js');
Page({
  data: {
    activeKey: 0,
    year:[],
    msg:"",
    summary:"",
    yearNum:"1990",
    path:''
  },
  onLoad: function (options) {
    this.setData({
      year:timesdata.getYearData(),
      msg:timesdata.getYearData()[this.data.activeKey].text,
      summary:timesdata.getYearData()[this.data.activeKey].summary,
      yearNum:timesdata.getYearData()[this.data.activeKey].lable,
      path:url.img+"times/"
    })
  },
  onChange(event) {

    var m=this.data.year[event.detail]
    console.log(m.lable)
    this.setData({
      msg:m.text,
      summary:m.summary,
      yearNum:m.lable
    })
    // Notify({ type: 'primary', message: event.detail });
  },
});