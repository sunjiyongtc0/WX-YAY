var url = require('./apiUrl.js');

module.exports = { //必须在这里暴露接口，以便被外界访问，不然就不能访问
  geQuseData: geQuseData,
};

function geQuseData(){
var data=[
  {
    title:"下图这个叫什么名字",
    option:["嘎拉哈","骨头","piaji","口袋"],
    isimg:true,
    url:url.img+"/quse/1.jpg",
    answer:1
  },{
  title:"下图电视出现这个花屏说明是什么时间段",
  option:["周一下午","周二下午","周三下午","周四下午"],
  isimg:true,
  url:url.img+"/quse/2.jpg",
  answer:2
},{
  title:"下图这个生物是哪个游戏的",
  option:["魔兽世界","龙之谷","传奇","完美世界"],
  isimg:true,
  url:url.img+"/quse/3.jpg",
  answer:3
},{
  title:"下图工具是用来做什么的",
  option:["充电","测量长度","插座","量角器"],
  isimg:true,
  url:url.img+"/quse/4.jpg",
  answer:1
},{
  title:"根据选项猜猜小人怕什么",
  option:["枪","大人","老虎","老师"],
  isimg:false,
  url:"https://img.yzcdn.cn/vant/cat.jpeg",
  answer:3
},{
  title:"下图是哪个教材的插图",
  option:["背影","父亲","背山工","挑山工"],
  isimg:true,
  url:url.img+"/quse/6.jpg",
  answer:4
}]

return data;
}