// miniprogram/pages/home/home.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
// "use strict";
Page({
  data:{
    show: false,
    value:"",
    currentIndex:0,
    oldIndex:0,
    view:[{in:"",out:""},{in:"",out:""}]
  },
  // touchStart:function(t){
  //   this.setData({startX:t.changedTouches[0].clientX})
  // },
  // touchEnd:function(t){
  //   var e=this,n=this.data.view;
  //   this.setData({endX:t.changedTouches[0].clientX});
  //   var a=t.changedTouches[0].clientX-this.data.startX;
  //   if(a<-100){
  //     if(this.data.currentIndex>=1)return;
  //     this.setData({
  //       oldIndex:e.data.currentIndex,
  //       currentIndex:++e.data.currentIndex
  //     }),
  //     n[this.data.oldIndex].out="animated fadeOutLeft",
  //     n[this.data.oldIndex].in="",
  //     n[this.data.currentIndex].in="animated fadeInRight",
  //     n[this.data.currentIndex].out="",
  //     this.setData({view:n}),
  //     this.cleanAnimated(),
  //     this.showAnimated()
  //   }else if(a>100){
  //     if(this.data.currentIndex<=0)return;
  //     this.setData({
  //       oldIndex:e.data.currentIndex,
  //       currentIndex:--e.data.currentIndex}
  //       ),
  //       n[this.data.oldIndex].out="animated fadeOutRight",
  //       n[this.data.oldIndex].in="",
  //       n[this.data.currentIndex].in="animated fadeInLeft",
  //       n[this.data.currentIndex].out="",
  //       this.setData({view:n}),
  //       this.cleanAnimated(),
  //       this.showAnimated()}
  // },
  showAnimated:function(){
    var t=this;
    0===this.data.currentIndex?(
      setTimeout(function(){t.setData({one_one:"animated fadeIn",one_two:"animated bounceIn"})},500),
      setTimeout(function(){t.setData({one_three:"animated bounceIn"}) },1000),
      setTimeout(function(){ t.setData({one_four:"animated bounceIn"})},1300),
      setTimeout(function(){t.setData({one_five:"animated lightSpeedIn"})},1900)):1===this.data.currentIndex&&(setTimeout(function(){t.setData({two_one:"animated fadeInDown",two_two:"animated fadeInUp"})},500),
      setTimeout(function(){t.setData({two_three:"animated zoomIn",two_four:"animated zoomIn"})},1000),
      setTimeout(function(){t.setData({two_three:"two-music-one",two_four:"two-music-two"})},1200))
    },
    cleanAnimated:function(){
      0===this.data.oldIndex?this.setData({one_one:"animated fadeOut",one_two:"animated fadeOut",one_three:"animated fadeOut",one_four:"animated fadeOut",one_five:"animated fadeOut"}):1===this.data.oldIndex&&this.setData({two_one:"animated fadeOut",two_two:"animated fadeOut",two_three:"animated fadeOut",two_four:"animated fadeOut",two_five:"animated fadeOut"})
    },
      onLoad:function(){
      },
      onReady:function(){
      },
      onShow:function(){
        this.showAnimated();
        var t=this;
        setTimeout(function(){t.setData({bottom:"animated slideInUp"})},1000),
        setTimeout(function(){t.setData({bottom_one:"animated slideInUp"})},1100),
        setTimeout(function(){t.setData({bottom_two:"animated slideInUp"})},1200),
        setTimeout(function(){t.setData({bottom_three:"animated slideInUp"})},1300),
        setTimeout(function(){t.setData({bottom_four:"animated slideInUp"})},1400),
        setTimeout(function(){t.setData({bottom_one:"bottom-4s-move"})},2100),
        setTimeout(function(){t.setData({bottom_two:"bottom-3s-move"})},2200),
        setTimeout(function(){t.setData({bottom_three:"bottom-2s-move"})},2300),
        setTimeout(function(){t.setData({bottom_four:"bottom-1s-move"})},2400)},
      onHide:function(){
        this.cleanAnimated(),
        this.setData({bottom:"",bottom_one:"",bottom_two:"",bottom_three:"",bottom_four:""})
      },
      onUnload:function(){
      },
      onPullDownRefresh:function(){
      },
      //   //时代
  Times: function(){
    wx.navigateTo({
      url: '../times/times'
    })
  },
  //追忆
  Recollection: function(){
    wx.navigateTo({
      url: '../recollection/recollection'
    })
  },
  //流年
  Maturity:function(){
    wx.navigateTo({
      url: '../maturity/index'
    })
  },
  //留言
  Leavemsg: function(){
    wx.navigateTo({
      url: '../leavemsg/leavemsg'
    })
  },
  //美雅
  yay: function(){
    this.setData({ show: true });
  },
  expInput:function(e){
    this.setData({ value: e.detail })
  },
  onClickHide() {
    this.setData({ show: false });
  },
  Submit:function(){
    var pass=this.data.value;
    if(pass.toLowerCase()=='sjy'){
      this.setData({ show: false });
      wx.navigateTo({
        url: '../yiy/yiy'
      })
    }else{
      Toast.fail('口令失败！！');
    }
  },
  noop() {},
    });


// import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
// // import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     show: false,
//     value:"",
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },
//   //时代
//   Times: function(){
//     wx.navigateTo({
//       url: '../times/times'
//     })
//   },
//   //追忆
//   Recollection: function(){
//     wx.navigateTo({
//       url: '../recollection/recollection'
//     })
//   },
//   //流年
//   Maturity:function(){
//     wx.navigateTo({
//       url: '../maturity/index'
//     })
//   },
//   //留言
//   Leavemsg: function(){
//     wx.navigateTo({
//       url: '../leavemsg/leavemsg'
//     })
//   },
//   //美雅
//   yay: function(){
//     this.setData({ show: true });
//   },
//   expInput:function(e){
//     this.setData({ value: e.detail.value })
//   },
//   onClickHide() {
//     this.setData({ show: false });
//   },
//   Submit:function(){
//     var pass=this.data.value;
//     if(pass.toLowerCase()=='sjy'){
//       wx.navigateTo({
//         url: '../greatTime/index'
//       })
//     }else{
//       Toast.fail('口令失败！！');
//     }

//   },
//   noop() {},
// })