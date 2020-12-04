// miniprogram/pages/greatTime/index.js
const shape = require('../../../js/greatTime.js');
const ctx = wx.createCanvasContext('myCanvas');
const url = require('../../../js/apiUrl.js');
// const ctx2 = wx.createCanvasContext('myCanvas2');
// 大的canvas 是 小的canvas 的 multiple 倍
const multiple = 3;
// 一个格子的宽度，也就是 小的canvas的宽度/9
const grid = 11;
let gridw = 0;
let gridh = 0;
// 小canvas的宽度
const maxWidth = 100;
let maxWidthw = 0;
let maxWidthh = 0;
let timers;
// 初始时拼图形状的颜色
const heartColor = '#FF9CC2';
// 在小canvas上画的线的颜色
const lineColor = '#93E0FE';
const shapeNum=[29,45,22];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 拼图形状的数组
    heart: [],
    // 默认所选的拼图形状是第一个
    defaultShapeIndex: 0,
    // 用户选的是第几个拼图形状
    shapeIndex: "",
    // 保存用户选择的图片的路径
    chooseImgUrl: {},
    imgArrPath:[[],[],[]],
    imgArr0:['../../../images/times/1990.jpg','../../../images/times/1999.jpg','../../../images/times/2000.jpg'],
    imgArr1: ['../../../images/times/1997.jpg'],
    // 保存 imgArr0 和 imgArr1 的元素
    imgArr2: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initImg();
      wx.getSystemInfo({success: function (res) {
        maxWidthw=res.windowWidth;
        maxWidthh=res.windowHeight;
        gridw=(maxWidthw/100)*11;
        gridh=(maxWidthh/100)*11;
      }}); 
    let that = this;
    let defaultShapeIndex = that.data.defaultShapeIndex;
    that.setData({
      heart: JSON.parse(JSON.stringify(shape.shapeData[defaultShapeIndex])),
    })
    that.setData({
      imgArr2: [...that.data.imgArr0, ...that.data.imgArr1]
    })
    wx.setStorage({
      key: 'shapeIndex',
      data: defaultShapeIndex,
    })
    wx.setStorage({
      key: 'shapeData',
      data: shape.shapeData,
    });

  },
  initImg:function(){
    var that=this;
    var imgArrPath=[];
  for(var j=0;j<3;j++){
    let defaultShapeIndex = j;
    var n=shapeNum[defaultShapeIndex];
        var imgArr=[];
        for(var i=1;i<=n;i++){
          if(defaultShapeIndex==0){
            imgArr.push(url.img+"yay/greatTime/"+i+".JPG");
          }else{
            
            imgArr.push(url.img+"yay/greatTime/"+defaultShapeIndex+""+(i<10?"0"+i:i)+".JPG");
          }
        }
        var imgArr0=[];
        for( var i=0;i<imgArr.length;i++){
          console.log(imgArr[i])
          wx.getImageInfo({
            src: imgArr[i],
            success (res) {
              console.log(res)
              imgArr0.push(res.path);
            }
          })
        }
        imgArrPath[j]=imgArr0;
    }
    console.log(imgArrPath)
    that.setData({
      imgArrPath:imgArrPath,
    })
  },
  runThis:function(){
    var that=this;
    that.reset();
    let defaultShapeIndex = that.data.defaultShapeIndex;
    
    that.replenishImg();

    that.setData({
      defaultShapeIndex:defaultShapeIndex+1==3?0:defaultShapeIndex+1,
      heart: JSON.parse(JSON.stringify(shape.shapeData[(defaultShapeIndex+1==3?0:defaultShapeIndex+1)])),
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    that.runThis();
    timers=setInterval(() => {
      that.runThis();
   }, 3000);
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 获取用户选择的拼图形状
    this.getShapeIndex();
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
    clearInterval(timers);
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
   // drawImg方法用来在canvas上画出选择的图片
  // fileUrl 是图片路径
  // res 是图片信息
  // x 表示 x轴第几个格子
  // y 表示 y轴第几个格子
  drawImg: function (fileUrl, res, x, y) {
    let width = res.width;
    let height = res.height;

    //  如果图片不是正方形，只画中间的部分
    let sWidth = width > height ? height : width;
    let sx = 0;
    let sy = 0;
    if (width > height) {
      sx = (width - height) / 2;
    }
    if (width < height) {
      sy = (height - width) / 2;
    }

    ctx.drawImage(fileUrl, sx, sy, sWidth, sWidth, x * gridw, y * gridh, gridw, gridh);
    ctx.draw(true);
   
  },
  // 获取用户选择的拼图形状
  getShapeIndex: function () {
    let that = this;
    // 设置默认拼图形状
    that.setDefaultShapeData();
  },
   // 获取存储的拼图形状数据
   getShapeData: function (shapeIndex) {
    let that = this;
    wx.getStorage({
      key: 'shapeData',
      success: function (res) {
        let shapeData = res.data;
        if (shapeData[shapeIndex]) {
          let data = JSON.parse(JSON.stringify(shapeData[shapeIndex]));
          that.setData({
            heart: data
          })
        }
        // 调用重置方法，重置拼图形状
        that.reset();
      },
    })
  },
    // 设置默认拼图形状
    setDefaultShapeData: function () {
      let defaultShapeIndex = this.data.defaultShapeIndex;
      let data = JSON.parse(JSON.stringify(shape.shapeData[defaultShapeIndex]));
      this.setData({
        heart: data,
      })
      wx.setStorage({
        key: 'shapeIndex',
        data: defaultShapeIndex,
      })
      wx.setStorage({
        key: 'shapeData',
        data: shape.shapeData,
      })
      // 调用重置方法，重置拼图形状
      this.reset();
    },
      // 重置
  reset: function () {
    let heart = this.data.heart;
    // 给两个canvas先填充上颜色，避免最后保存时，产生黑色背景
    // ctx.setFillStyle('#A68AC7');
    // ctx.fillRect(0, 0, maxWidth, maxWidth);
    ctx.draw();
    this.setData({
      chooseImgUrl: {},
    })
    // 重置，画出拼图形状
    for (let i = 0; i < heart.length; i++) {
      for (let j = 0; j < heart[i].length; j++) {
        if (heart[i][j] != 0) {
          ctx.rect(j * gridw, i * gridh, gridw, gridh);
          ctx.setFillStyle(heartColor);
          ctx.fill();
          heart[i][j] = 1;
        }
      }
    }
    ctx.draw(true);
    // 画九宫格的线
    this.drawLine();
  },
   // 画九宫格的线
   drawLine: function () {
    ctx.setStrokeStyle(lineColor);
    for (let i = 1; i < 3; i++) {
      ctx.moveTo(i * gridw * 3, 0);
      ctx.lineTo(i * gridw * 3, maxWidthh);
      ctx.stroke();

      ctx.moveTo(0, i * gridh * 3);
      ctx.lineTo(maxWidthw, i * gridh * 3);
      ctx.stroke();
    }
    ctx.draw(true);
  },
   // 补充图片
   replenishImg: function () {
    let that = this;
    let heart = that.data.heart;

    // 获取补充图片类型
    selType(0);
    // 判断补充图片类型
    function selType(imgType) {
      // 补充已选图片
      if (imgType == 3) {
        addSelImg();
      } else {
        // 获取补充图片路径的数组
        // let tmp_images = that.data['imgArr' + imgType];
        let defaultShapeIndex = that.data.defaultShapeIndex;
        let tmp_images = that.data.imgArrPath[defaultShapeIndex];
        // // 补充除已选图片外的其他类型
        draw(tmp_images);
      }
    }

    // 补充已选图片
    function addSelImg() {
      let chooseImgUrl = that.data.chooseImgUrl;
      let tmp_images = [];

      if (Object.keys(chooseImgUrl).length == 0) {
        wx.showToast({
          title: '请先选择图片哦',
          icon: 'none',
          duration: 2000
        })
        return;
      }
      wx.showLoading({
        title: '加载中',
      })

      for (let k in chooseImgUrl) {
        tmp_images.push(chooseImgUrl[k]);
      }

      let len = tmp_images.length - 1;
      for (let i = 0; i < heart.length; i++) {
        for (let j = 0; j < heart[i].length; j++) {
          if (heart[i][j] == 1) {
            // 随机选取一张用户选择的图片
            let fileUrl = tmp_images[randomNum(0, len)];
            // 获取图片信息
            wx.getImageInfo({
              src: fileUrl,
              success: function (res) {
                // 调用 drawImg 方法，用临时路径画出图片
                that.drawImg(fileUrl, res, j, i);
              }
            })
          }
        }
      }
      wx.hideLoading();
    }

    // 补充除已选图片外的其他类型
    function draw(tmp_images) {
      if (tmp_images.length == 0) {
        return;
      }
      wx.showLoading({
        title: '加载中',
      })
      let len = tmp_images.length - 1;
      for (let i = 0; i < heart.length; i++) {
        for (let j = 0; j < heart[i].length; j++) {
          if (heart[i][j] == 1) {
            // 随机获取一张图片的路径
            let url = tmp_images[randomNum(0, len)];
            console.log(url)
            // wx.getImageInfo({
            //   src: url,
            //   success (res) {
            //     console.log(res)
            //     ctx.drawImage(res.path, 17*gridw, 20*gridh, 66*gridw, 66*gridw);
            //   }
            // })

            // 在canvas上画出补充的图片
            ctx.drawImage(url, j * gridw, i * gridh, gridw, gridh);
            ctx.draw(true);
          }
        }
      }
      // 画九宫格的线
      that.drawLine();
      wx.hideLoading();
    }
    // 获取 from 到 to 的随机数
    function randomNum(from, to) {
      let Range = to - from;
      let num = from + Math.round(Math.random() * Range);
      return num;
    }
  },
})