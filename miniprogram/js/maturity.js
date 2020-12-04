var api = require('./apiUrl.js');

module.exports = { //必须在这里暴露接口，以便被外界访问，不然就不能访问
  getPlayData: getPlayData,
};

function getPlayData(){
  var data=[{
    id:1,
    cardUrl: api.img+'maturity/1.jpg',
    cardInfo: {
      cardTitle: "出生的时代",
      cardInfoMes: ['美好温馨的年代','流连忘返的日子']
    }
  },{
    id:2,
    cardUrl: api.img+'maturity/2.jpg',
    cardInfo: {
      cardTitle: "童年的小玩具",
      cardInfoMes: ['弹玻璃球', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
    }
  },{
    id:3,
    cardUrl: api.img+'maturity/3.jpg',
    cardInfo: {
      cardTitle: "小浣熊的陪伴",
      cardInfoMes: ['午饭时间', '小卖店的门口', '开奖时刻']
    }
  },{
    id:4,
    cardUrl: api.img+'maturity/4.jpg',
    cardInfo: {
      cardTitle: "家长召唤机",
      cardInfoMes: ['午休时间', '锻炼时间', '想方设法的不上间操']
    }
  },{
    id:5,
    1: api.img+'maturity/5.jpg',
    cardInfo: {
      cardTitle: "销量最好的书",
      cardInfoMes: ['午休时间', '锻炼时间', '想方设法的不上间操']
    }
  },{
    id:6,
    1: api.img+'maturity/6.jpg',
    cardInfo: {
      cardTitle: "学生时代最爱看",
      cardInfoMes: ['午休时间', '锻炼时间', '想方设法的不上间操']
    }
  }];

  return data;
}