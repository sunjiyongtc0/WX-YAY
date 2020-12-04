// miniprogram/pages/recollection/Rl/index.js
const questionList = require('../../../js/questionData.js');
const { img } = require('../../../js/apiUrl.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    radio: '0',
    questionNum:0,
    question:[],
    questionIndex:{},
    answer:[],
    answerRadio:[],
    showPopup: false,
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.taskData(0);
    var  question=this.data.question;
    var answerRadio=[];
    var answer=[];
    for(var i in question){
      answer.push(0);
      answerRadio.push('0');
    }
    this.setData({
      answer:answer,
      answerRadio:answerRadio
    });
    console.log(answer)
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
  taskData(index){
    this.setData({
      question:questionList.geQuseData(),
      questionIndex:questionList.geQuseData()[index]
    })

  },
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    console.log(name);
    var answer=this.data.answer;
    var  answerRadio=  this.data.answerRadio;
    answerRadio[this.data.questionNum]=name;
    if( this.data.questionIndex.answer==name){
      answer[this.data.questionNum]=1;
    }else{
      answer[this.data.questionNum]=0;
    }
      this.setData({
      radio: name,
      answer:answer,
      answerRadio:answerRadio
    });
  },
  beforePage:function(event ){
    var value = event;
    var questionNum=this.data.questionNum-1;
    var answerRadio=this.data.answerRadio;
    var radio=answerRadio[questionNum];
    this.setData({
      radio: radio,
      questionNum:questionNum
    });
    this.taskData(questionNum);
  },
  afterPage:function(event ){
    var value = event;
    var questionNum=this.data.questionNum+1;
    var radio=this.data.answerRadio[questionNum];
    this.setData({
      radio: radio,
      questionNum:questionNum
    });
    this.taskData(questionNum);
  },
  checkSubmit:function(){
    var as=this.data.answer;
    var count=0;
    var num=as.length;
    for(var i in as ){
      count+=as[i];
    }
    var msg="恭喜你答对"+count+"题";
    if(count==num){
      msg="太厉害了！全部答对，生活中你一定是个细致的人！";
    }else if(count==0){
      msg="好吧，年轻人，下回我再做个00后的测试题让你答";
    }
    this.setData({
      showPopup:true,
      count:msg
    })
  },
  beginCheck:function(){
    this.setData({
      show:false
    })
  },
  onClose() {
    this.setData({ showPopup: false });
  },
})