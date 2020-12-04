// miniprogram/pages/yiy/yiy.js
Page({
  data: {
    
  },
  onReady() {
  },
  fm: function(){
    wx.navigateTo({
      url: './fillmemory/index'
    })
  },
  gt: function(){
    wx.navigateTo({
      url: './accompany/index'
    })
  },
});