// miniprogram/pages/recollection/jay/jay.js
Page({
  data: {
    
  },
  onReady() {
  },
  Tree: function(){
    wx.navigateTo({
      url: './tree/index'
    })
  },
  Sunburst: function(){
    wx.navigateTo({
      url: './sunburst/index'
    })
  },
  Film: function(){
    wx.navigateTo({
      url: './film/index'
    })
  },
});
