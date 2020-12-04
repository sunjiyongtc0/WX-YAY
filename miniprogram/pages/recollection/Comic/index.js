// miniprogram/pages/Comic/index.js
const gameList = require('../../../js/gemeList.js');
const url = require('../../../js/apiUrl.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textShow:false,
    show:false,
    comic:[],
    comicInfo:{},
    index:0,
    msg:"点击查看",
    steps:[],
    path:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var steps=new Array();
    let index=this.data.index;
    let Comic=gameList.getComicData();
    for(var i=0;i<Comic.length;i++){
      var a={};
      a.text=Comic[i].name;
      steps.push(a);
    }
    this.setData({
      comic:Comic,
      comicInfo:Comic[index],
      steps:steps,
      path:url.img+'comic/'
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
    let comic=this.data.comic;
    this.setData({
      comicInfo:comic[index],
    })
  },
  getNext:function(){
    let index=this.data.index;
    let show=this.data.show;
    let comic=this.data.comic;
    let size=comic.length;
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