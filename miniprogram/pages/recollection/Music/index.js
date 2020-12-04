// miniprogram/pages/Music/index.js
// const innerAudioContext = wx.createInnerAudioContext();
const url = require('../../../js/apiUrl.js');
const musicData = require('../../../js/gemeList.js');
const myaudio =wx.createInnerAudioContext({});
// myaudio.loop=true; 
myaudio.controls=true;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '1',
    musicList:[],
    musicList0:[],
    checked:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      musicList:musicData.getMusicData(),
      musicList0:musicData.getMusicData()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('Audio');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setKeepScreenOn({
      keepScreenOn: false,
    })
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
  Play:function(){
    var num=this.data.activeName;
    var name=this.data.musicList[num].name;
    // var srcurl="http://mp3.9ku.com/mp3/13/12378.mp3";
    var srcurl=url.music+name+".mp3";
    // console.log(srcurl)
    myaudio.src=srcurl;
    myaudio.loop=true; 
    myaudio.play();
    // innerAudioContext.autoplay = true
    // innerAudioContext.src = srcurl
    // innerAudioContext.onPlay(() => {
    //  console.log('开始播放')
    // })

  },
Pause:function(){
  console.log("Pause")
  myaudio.pause();
  // innerAudioContext.onPause(()=>{
  //   console.log('停止播放')
  // })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  switchstatus(event){
    console.log(event.detail)
    this.setData({
      checked: event.detail,
    });
    if(event.detail){
      myaudio.loop=false;
      myaudio.onEnded((res) => {
        console.log("onEnded")
        this.RandomPlay()
      });
      this.RandomPlay();
    }else{
      myaudio.onEnded((res)=>{})
      myaudio.offEnded((res) => {
        console.log("offEnded");
      });
      this.Pause();
      
     
    }
  },
  RandomPlay(){
    var musicList=this.data.musicList0;
    var num=musicList.length-1;
    console.log(num)
    if(num==0){
      var name=musicList[0].name;
      var srcurl=url.music+name+".mp3";
      musicList=this.data.musicList;
      this.setData({
        musicList0:musicList
      })
      myaudio.src=srcurl;
      // myaudio.loop=false; 
      // myaudio.onEnded((res) => {
      //   console.log("onEnded")
      //   this.RandomPlay()
      // })
      myaudio.play();
    }else{
      var i=Math.floor(Math.random() * (num - 0));
      console.log(i);
      var name=musicList[i].name;
      var srcurl=url.music+name+".mp3";
      musicList.splice(i, 1);
      this.setData({
        musicList0:musicList
      })
      myaudio.src=srcurl;
      myaudio.play();
    }
   
  }
  
})