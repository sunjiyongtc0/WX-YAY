const maturityList = require('../../js/maturity.js');
const url = require('../../js/apiUrl.js');
const pageImg="../../../images/maturity/page.jpg";
const myaudio =wx.createInnerAudioContext({});
myaudio.loop=true; 
Page({
  data:{
      imgArr:[],
      imgArr0:[],
      flag:true,
      msg:"",
      i:0,
      iold:0,
      path:url.img+"maturity/"
  },
  onLoad:function(options){
    var srcurl=url.music+"/bgm/fhm.mp3";
    myaudio.src=srcurl;
    myaudio.play();
    var path=this.data.path;
      // 获取列表图片信息
     var ml= maturityList.getPlayData();
     let arr = [];let arr0 = [];
     var m="";
     for(var index=0;index<ml.length;index++){
        let obj = {}; let obj1 = {};
        obj.isturn = false;                       obj1.isturn = false;
        obj.msg= ml[index].cardInfo.cardTitle;    obj1.msg= ml[index].cardInfo.cardTitle;
        obj.src = path+ ml[index].id+".jpg";
        if(index>2){
          obj1.src = pageImg;// path+ ml[0].id+".jpg";
        }else{
          obj1.src = path+ ml[index].id+".jpg";
        }
        obj.msg= ml[index].cardInfo.cardTitle;
        if(index==0){
          m=ml[index].cardInfo.cardTitle;
        }
        if(!index){
            obj.zIndex = 4;
            obj1.zIndex = 4;
             // 在数据初始化的时候就把第二张图片的层级提升
        }else if(index==1){
              obj.zIndex = 3;
              obj1.zIndex = 3;
        }else{
            obj.zIndex = 1;
            obj1.zIndex = 1;
        }
        arr.push(obj);
        arr0.push(obj1);
     }
     this.setData({
      imgArr:arr,
      imgArr0:arr0,
      msg:m,
      i:ml.length
     })
  },
    /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    myaudio.pause();
  },
  // 点击图片切换类名来控制翻页效果
  change(e){
    let imgsTrue = this.data.imgArr;
    let imgs = this.data.imgArr0;
      let  i=this.data.i;
      let m="";
      if(this.data.flag){
          this.data.flag = true;
          let iold=this.data.iold;
          let index=e.currentTarget.dataset.index;
          if(iold<index||iold==0){
            if(i>index){
              m=imgs[index+1].msg;
            }
          }else{
            if(index>0){
              m=imgs[index].msg;
            }
          }
          imgs.map((ele,i)=>{
              if(index==i){
                imgs[i].isturn = !imgs[i].isturn;
                imgs[i].zIndex = 4;
              }else{
                  imgs[i].zIndex = 1;
              }
          })
          if(index-1>=0){
            imgs[index-1].zIndex = 3;
        }
        if(index+1<imgs.length){
            imgs[index+1].zIndex = 3;
            imgs[index+1].src=imgsTrue[index+1].src;
        }
        if(index-2>=0){
            imgs[index - 2].zIndex = 2;
        }
        if(index+2<imgs.length){
            imgs[index + 2].zIndex = 2;
        }
        this.setData({
          iold:index
        })
      }
      this.setData({
          imgArr0:imgs,
          msg:m
      })
  },
  // transition动画结束
  finish(){
      this.data.flag=true;
  }
})


// var app = getApp();
// Page({
//   data: {
//     num:0,
//     animationlist: [],
//     isAnimation: false,
//     zindex: [],
//     animationlistyet: [],
//     cardInfoList: []
//   },
//   //数据初始化
//   onLoad: function () {
//     var that = this;
//     var dataList=maturityList.getPlayData();
//     var zindex=[];
//     for(var i=0;i<dataList.length;i++){
//       zindex.push(dataList[i].id);
//     }
//     that.setData({
//       cardInfoList:dataList,
//       zindex:zindex,
//       num:dataList.length
//     })
//   },
//     //点击跳转详情
//     buythis: function (e) {
//       console.log(e);
//       app.buyDetail = this.data.cardInfoList[e.target.id];
//       wx.navigateTo({url: '../detail/detail'});
//     },
//   //事件处理函数
//   slidethis: function (e) {
//     var self = this;

//     if (this.data.isAnimation) {
//       return false;
//     }
//     this.setData({isAnimation: true});
//     var animation1 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
//     this.animation1 = animation1;
//     this
//       .animation1
//       .translateY(28)
//       .translateX(51)
//       .rotate(0)
//       .scale(1)
//       .step();
//     var animation2 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
//     this.animation2 = animation2;
//     this
//       .animation2
//       .translateY(62)
//       .translateX(25)
//       .rotate(0)
//       .step();
//     var animation3 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
//     this.animation3 = animation3;
//     this
//       .animation3
//       .translateY(44)
//       .translateX(41)
//       .rotate(0)
//       .step();
//     if (this.data.animationlistyet.length <= 0) {
//       this.data.animationlistyet = [
//         this
//           .animation1
//           .export(),
//         this
//           .animation2
//           .export(),
//         this
//           .animation3
//           .export()
//       ];
//     }
//     this.setData({animationlist: this.data.animationlistyet});
//     var animationlistyet = self.data.animationlistyet;
//     var animation = self
//       .data
//       .animationlistyet
//       .pop();
//     self
//       .data
//       .animationlistyet
//       .unshift(animation);
//     self.setData({
//       animationlist: [], animationlistyet: self.data.animationlistyet // 用来寄存下一次动画的排序
//     });
//     setTimeout(function () {
//       var zindex = self.data.zindex;
//       var slidethis = self
//         .data
//         .zindex
//         .shift();
//       self
//         .data
//         .zindex
//         .push(slidethis);
//       self.setData({isAnimation: false, zindex: self.data.zindex});
//     }, 100);
//     var d=this.data.cardInfoList;
//     var cardInfoList=d.slice(1).concat(d.slice(0,1));
//     var zindex=[];
//     for(var i=0;i<cardInfoList.length;i++){
//       zindex.push(cardInfoList[i].id);
//     }
//     self.setData({ cardInfoList:cardInfoList,zindex:zindex});
//   },

// });


