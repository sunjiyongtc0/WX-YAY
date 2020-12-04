// miniprogram/pages/OnlineGames/index.js
const gameList = require('../../../js/gemeList.js');
const url = require('../../../js/apiUrl.js');
const myaudio =wx.createInnerAudioContext({});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '0',
    gameList:[],
    checked:true,
    gameName:"",
    path:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setData({
  path:url.img+"game/"
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
this.setData({
  gameList:gameList.getOnlineData()
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
    this.Pause();
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
  onChange(event) {
    var  num= event.detail;
    var list=this.data.gameList;
    var name=list[num].name;
    this.setData({
      activeName:  event.detail,
      gameName:name
    });
    if(this.data.checked){
      this.play(name);
    }
  },
  switchstatus(event){
    this.setData({
      checked: event.detail,
    });
    if(!event.detail){
      this.Pause();
    }else{
      this.play(this.data.gameName)
    }
  },
  play(name){
    var srcurl=url.music+"game/"+name+".mp3";
    myaudio.src=srcurl;
    myaudio.play();
  },
  Pause:function(){
    myaudio.pause();
    },

})