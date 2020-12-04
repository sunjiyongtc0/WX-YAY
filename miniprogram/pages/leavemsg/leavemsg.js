// miniprogram/pages/leavemsg/leavemsg.js
const utils = require('../../js/utils.js');
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
//云数据库初始化
const db = wx.cloud.database({});
const leavemsg = db.collection('leavemsg');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[],
    insert:'',
    title:" 点击这段文字授权登录，留下你的足迹，欢迎留言 ",
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo:res.userInfo,
          title: res.userInfo.nickName+"您好，留下你的足迹，欢迎留言"
        })
      }
    })


    this.getMsgList();
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
  msgBlur:function(e){
    var msgName=e.detail;
    if(msgName.length>50){
      Notify({ type: 'warning', message: '留言内容过长！' });
    }else{
      this.data.insert=msgName;
      this.setData(this.data);
    }
   
  },
  saveMsg:function(){
    var that = this;
    var msg=that.data.insert;
    /**
     * 获取用户信息
    */
    var userInfo=that.data.userInfo;
    var re=that.saveStats();
    if(re){
      var avatarUrl = userInfo.avatarUrl;
      var nickName = userInfo.nickName;
      var  data0={
            avatarUrl:avatarUrl,
            nickName:nickName,
            msg:msg,
            date:utils.getNowFormatDate()
          }
      leavemsg.add({
        data:data0
      }).then(res => {
        console.log(res)
        that.saveSuccess()
      }).catch(err => {
        console.log(err)
      })
    }
 
    // wx.getUserInfo({
    //   success: function (res) {
    //     var avatarUrl = res.userInfo.avatarUrl;
    //     var nickName = res.userInfo.nickName;
    //     var  data0={
    //       avatarUrl:avatarUrl,
    //       nickName:nickName,
    //       msg:msg,
    //       date:utils.getNowFormatDate()
    //     }
    //     leavemsg.add({
    //       data:data0
    //     }).then(res => {
    //       console.log(res)
    //       that.saveSuccess()
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }
    // })

  },
  saveSuccess:function(){
    var that=this;
    Notify({ type: 'success', message: '添加成功' });
    that.setData({
      insert:''
    });
    that.getMsgList();
  },
  saveStats:function(){
    var re=false;
    var userInfo=this.data.userInfo;
    var insert=this.data.insert;
    if(userInfo.nickName==null){
      Notify({ type: 'warning', message: '授权登录后可以提交留言！' });
    }else if(insert.length>50){
      Notify({ type: 'warning', message: '留言内容过长！' });
    }else{
      re=true;
    }
    return re;
  },
  getMsgList:function(){
    var that=this;
    leavemsg.orderBy("date","desc").get({
      success(res){
        that.setData({
          message:res.data
        })
      }
    });
  },
  getUser(e) { 
    console.log(e)
    wx.getUserInfo({
      success: (res) => {
          this.setData({
            userInfo:res.userInfo,
            title: res.userInfo.nickName+"您好，留下你的足迹，欢迎留言"
          });
      }
  })
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: res => {
                  this.setData({
                    userInfo:res.userInfo,
                    title: res.userInfo.nickName+"您好，留下你的足迹，欢迎留言"
                  })
                }
              })
        }else{
          wx.authorize({
            scope: 'scope.userInfo',
            success () {
              // 用户已经同意小程序获取用户信息供能，后续调用接口不会弹窗询问
              wx.getUserInfo();
            }
          })
        }
      }
    })

}

})