// miniprogram/pages/yiy/fillmemory/index.js
const url = require('../../../js/apiUrl.js');
const myaudio =wx.createInnerAudioContext({});
myaudio.loop=true; 
var ctx=null;
var ctx1=null;
var timer1 = null;
var timer2 = null;
var factor={
              speed:.02,  // 运动速度，值越小越慢
              t:0    //  贝塞尔函数系数
            };
var factor1={
              speed:.02,  // 运动速度，值越小越慢
              t:0    //  贝塞尔函数系数
            };
var colors = ['lightskyblue',  'lawngreen',   'greenyellow',   'orangered',    'turquoise',   'pink',   'plum']
var points=[];
let wmax=0;
let hmax=0; 
let wprop=0;
let hprop=0; 
let timers;
let gridh=0;
let gridw=0; 
let  imgArr0=[];//[url.img+"yay/fm/0.jpg" ];['../../../images/times/1990.jpg','../../../images/times/1999.jpg','../../../images/times/2000.jpg'];
let  imgPath=[];
Page({
  data:{
    num:0,
    n:0,
    url:"",
  },
  onLoad:function(options){
    var srcurl=url.music+"/bgm/淡水海边.mp3";
    myaudio.src=srcurl;
    myaudio.play();

    for( var i=0;i<22;i++){
        imgArr0.push(url.img+"yay/fm/"+i+".JPG");
    }
    wx.getSystemInfo({success: function (res) {
      wmax=res.windowWidth;
      hmax=res.windowHeight;
      gridh=hmax/100;
      gridw=wmax/100;
      wprop=wmax/250;
      hprop=hmax/150;
      points=[{x:2*wprop,y:4*hprop},{x:20*wprop,y:10*hprop},{x:30*wprop,y:40*hprop},{x:30*wprop,y:50*hprop},{x:50*wprop,y:70*hprop}];    
    }}); 
    var that = this
    ctx = wx.createCanvasContext('canvas_ct')
    ctx1 = wx.createCanvasContext('canvas_ct1');
    points.splice(0,points.length);
    that.setData({
      num:imgArr0.length,
      url:imgArr0[that.data.n]
    });
    that.runThis();
    // timers= setInterval(function(){
    //   that.runThis();
    // },4000);
   
  },
  runThis:function(){
    var that = this;
    // var n=that.data.n;
    // var num=that.data.num;
    // if(n>=num){
    //   n=0;
    //   that.setData({
    //     n:n,
    //     // url:imgArr0[n]
    //   });
    // }else{
    //   that.setData({
    //     // url:imgArr0[n]
    //   });
    // }
    factor1.t = 0;
    timer1 = setInterval(function(){
    that.render([[{x:130*wprop,y:110*hprop},{x:10*wprop,y:52*hprop},{x:50*wprop,y:1*hprop},{x:130*wprop,y:40*hprop}]])
    },30);
    // that.setData({
    //   n:n+1
    // });
  },
  render:function(data){
    var that = this
    var p10= data[0][0];   // 三阶贝塞尔曲线起点坐标值
    var p11= data[0][1];   // 三阶贝塞尔曲线第一个控制点坐标值
    var p12= data[0][2];   // 三阶贝塞尔曲线第二个控制点坐标值
    var p13= data[0][3];   // 三阶贝塞尔曲线终点坐标值
    ctx.beginPath();
     points.splice(0,points.length)
    ctx.setLineWidth(1);
    ctx.setFillStyle(colors[Math.floor(Math.random()*5)])
     var t = factor.t;
     ctx.setLineJoin('round')
    /*计算多项式系数 （下同）*/    
    var cx1 = 4.5*(p11.x-p10.x);
    var bx1 = 4.5*(p12.x-p11.x)-cx1;
    var ax1 = p13.x-p10.x-cx1-bx1;

    var cy1 = 3*(p11.y-p10.y);
    var by1 = 3*(p12.y-p11.y)-cy1;
    var ay1 = p13.y-p10.y-cy1-by1;

    var xt1 = ax1*(t*t*t)+bx1*(t*t)+cx1*t+p10.x;
    var yt1 = ay1*(t*t*t)+by1*(t*t)+cy1*t+p10.y;
    points.push({x:xt1,y:yt1})
     factor.t +=factor.speed;
     for(var i=0;i<points.length;i++){
        ctx.arc(points[i].x, points[i].y,2*hprop,0,2*Math.PI)
     }
    ctx.fill();
    if(yt1<110*hprop){
        ctx.draw(true)
    }else{
        ctx.draw()
    }
    if( factor.t >1){
        factor.t = 0
         timer2 = setInterval(function(){
            that.render2([[{x:130*wprop,y:40*hprop},{x:210*wprop,y:1*hprop},{x:250*wprop,y:52*hprop},{x:130*wprop,y:110*hprop}]])
        },30)
        clearInterval(timer1)
     }
  },
  render2:function(data){
    var that = this
    var p20= data[0][0];
    var p21= data[0][1];
    var p22= data[0][2];
    var p23= data[0][3];
     points.splice(0,points.length)
 ctx.beginPath();
    ctx.setLineWidth(1);
    ctx.setLineJoin('red')
    ctx.setFillStyle(colors[Math.floor(Math.random()*5)])
    var t = factor1.t;
    var cx2 = 4.5*(p21.x-p20.x);
    var bx2 = 4.5*(p22.x-p21.x)-cx2;
    var ax2 = p23.x-p20.x-cx2-bx2;
    var cy2 = 3*(p21.y-p20.y);
    var by2 = 3*(p22.y-p21.y)-cy2;
    var ay2 = p23.y-p20.y-cy2-by2;
    var xt2 = ax2*(t*t*t)+bx2*(t*t)+cx2*t+p20.x;
    var yt2 = ay2*(t*t*t)+by2*(t*t)+cy2*t+p20.y;
    points.push({x:xt2,y:yt2})
     factor1.t +=factor1.speed;
     for(var i=0;i<points.length;i++){
        ctx.arc(points[i].x, points[i].y,2*hprop,0,2*Math.PI)
     }
     if(points[points.length-1].y>=110*hprop){
          clearInterval(timer2);
          return ;
     }
    ctx.fill();
    ctx.draw(true)
    if( factor1.t >1){
     }
  },

  renderText:function( url){
    console.log(url)
    ctx1.drawImage(url, 17*gridw, 20*gridh, 66*gridw, 66*gridw);
    ctx1.draw(true);
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    myaudio.pause();
    factor1.t = 0;
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timers);
    // 页面关闭
  },
  loadImg:function(){
    var that=this;
    var n=that.data.n;
    var num=that.data.num;
    if(n+1>=num){
      n=0;
    }else{
      n=n+1;
    }
    setTimeout(function () {
      that.setData({
        n:n,
        url:imgArr0[n]
      });
      that.runThis();
     }, 3500) //延迟时间 这里是3.5秒
  }
})