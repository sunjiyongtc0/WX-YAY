// miniprogram/pages/jay/film/index.js
const jayAlbum = require('../../../../js/jayAlbum.js');
const url = require('../../../../js/apiUrl.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURL:"https://img.yzcdn.cn/vant/ipad.jpeg" ,
    filmInfo:[],
    path:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setData({
  path:url.img+"jay/"
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      filmInfo:jayAlbum.getFilmData()
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})