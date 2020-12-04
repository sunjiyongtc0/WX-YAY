// miniprogram/pages/yiy/accompany/index.js
// const maturityList = require('../../../js/maturity.js');
const pageImg="../../../images/yay/page.jpg";
const url = require('../../../js/apiUrl.js');
const myaudio =wx.createInnerAudioContext({});
myaudio.loop=true; 
const shapeNum=[29,45,22];
Page({
  data:{
      imgArr:[],
      imgArr0:[],
      flag:true,
      i:0,
      iold:0,
      path:url.img+"yay/greatTime/",
      page:0,
      loading:true
  },
  onLoad:function(options){
    var srcurl=url.music+"/bgm/梦中的婚礼.mp3";
    myaudio.src=srcurl;
    myaudio.play();
    this.runThis();
  },
  runThis(){
    var path=this.data.path;
    var page=this.data.page;
    var shapenumber=shapeNum[page];
    let arr = [];
    let arr0 = [];
    // 获取列表图片信息
    for(var i=1;i<=shapenumber;i++){
      let obj = {};let obj1 = {};
      obj.isturn = false; obj1.isturn = false;
      if(page==0){
        obj.src = path+i+".JPG";
        obj1.src = path+i+".JPG";
      }else{
        obj.src = path+page+""+(i<10?"0"+i:i)+".JPG";
        obj1.src = path+page+""+(i<10?"0"+i:i)+".JPG";
      }
      if(i>2){
        obj1.src = pageImg;
      }

      if(!i){
        obj.zIndex = 4;
        obj1.zIndex = 4;
         // 在数据初始化的时候就把第二张图片的层级提升
      }else if(i==1){
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
    i:shapenumber
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
// if(this.data.loading){
      let imgsTrue = this.data.imgArr;
      let imgs = this.data.imgArr0;
      let imgsNum =imgs.length;
      let  i=this.data.i;
      let m="";
      if(this.data.flag){
          this.data.flag = true;
          let iold=this.data.iold;
          let index=e.currentTarget.dataset.index;
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
          loading: false
      })
    // }    
  },
  // transition动画结束
  finish(){
      this.data.flag=true;
  },
  getOne(){
    this.setData({
      page:0
    })
    this.runThis();
  },
  getTwo(){
    this.setData({
      page:1
    })
    this.runThis();
  },
  getThree(){
    this.setData({
      page:2
    })
    this.runThis();
  },
  loadImg(){
    // this.setData({
    //   loading: true
    // })
  }
})