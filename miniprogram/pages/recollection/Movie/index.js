// miniprogram/pages/Movie/index.js

const gemeList = require('../../../js/gemeList.js');
const url = require('../../../js/apiUrl.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    textShow:false,
    Movie:[],
    MovieInfo:{},
    index:0,
    msg:"点击查看",
    path:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index=this.data.index;
    let Movie=gemeList.getMovieData();
    this.setData({
      Movie:Movie,
      MovieInfo:Movie[index],
      path:url.img+'movie/'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  Next: function(){
    let show=this.data.show;
    this.setData({
      textShow:true,
      show:!show,
      msg:"播放下个"
    })
  },
  getNow:function(){
    let show=this.data.show;
    let index=this.data.index;
    let Movie=this.data.Movie;
    this.setData({
      MovieInfo:Movie[index],
    })
  },
  getNext:function(){
    let index=this.data.index;
    let show=this.data.show;
    let Movie=this.data.Movie;
    let size=Movie.length;
    index=index+1;
    if(size==index){
      index=0;
    }
    this.setData({
      show:!show,
      index:index
    })
   
    
  }
})