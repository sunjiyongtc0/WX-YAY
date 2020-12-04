import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
const utils = require('../../js/utils.js');
//云数据库初始化
const db = wx.cloud.database({});
const Log = db.collection('sign_log');
var can;
var stars = [];
/**定义星星 */
var starObj = function () {
  this.x;
  this.y;
  this.picNo;
  this.timer;
}
/**初始化数据 */
starObj.prototype.init = function () {
  this.x = Math.random() * 400;
  this.y = Math.random() * 600;
  this.picNo = 0;
  this.timer = 0;
}
/**生成星星 */
starObj.prototype.draw = function () {
  can.drawImage('/images/star.png', this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);

}
/**动起来 */
starObj.prototype.undate = function () {
  this.picNo += 1;
  if(this.picNo >= 7){
    this.picNo = 0;
  }
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    num:60, //生成星星数量
    stars:[],  // 星星数组
    avatarUrl: '../index/user-unlogin.png',
    userInfo: {
      // nickName:'游客'
    },
    userMsg:"未登录",
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexData();
    can = wx.createCanvasContext('canvas');
    /* 批量生成星星 并且初始化 */
    for (var i = 0; i < this.data.num; i++) {
      var obj = new starObj();
      stars.push(obj);
      stars[i].init();
    }

    this.gameloop(); //进行
    can.draw();
   
  },
  /**进行*/
  gameloop(){
    setTimeout(this.gameloop, 300);
    this.drawStars();
  },
  /**生成动起来 **/
  drawStars(){
    for (var i = 0; i < this.data.num; i++) {     
      stars[i].undate();
      stars[i].draw();
    }
    can.draw();
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
  getIndexData: function(){
    var that=this;
    wx.getUserInfo({
      success: res => {
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          userInfo: res.userInfo
        })
      }
    })
    // // 查看是否授权
    // wx.getSetting({
    //   success (res){
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //           wx.getUserInfo({
    //             success: res => {
    //               // console.log(res)
    //               this.setData({
    //                 avatarUrl: res.userInfo.avatarUrl,
    //                 userInfo: res.userInfo
    //               })
    //             }
    //           })
    //     }else{
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success () {
    //           // 用户已经同意小程序获取用户信息供能，后续调用接口不会弹窗询问
    //           wx.getUserInfo();
    //         }
    //       })
    //     }
    //   }
    // })
 },
 btnAuth: function(){
   var info = this.data.userInfo;
   if(info.nickName==null){
    wx.navigateTo({
      url: '../home/home'
    })
  //   Notify({ type: 'warning', message: '请先授权登录' });
  //     wx.authorize({
  //       scope: 'scope.userInfo',
  //       success () {
  //         // 用户已经同意小程序获取用户信息供能，后续调用接口不会弹窗询问
  //         wx.getUserInfo();
  //       }
  //     })
    }else {
      var data0={
        date:utils.getNowFormatDate(),
        userInfo:info
      }
      Log.add({
        data:data0
      }).then(res => {
        console.log(res)
        wx.navigateTo({
          url: '../home/home'
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }

})