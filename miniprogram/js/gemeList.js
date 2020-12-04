module.exports = { //必须在这里暴露接口，以便被外界访问，不然就不能访问
  getOnlineData: getOnlineData,
  getComicData:getComicData,
  getMovieData:getMovieData,
  getMusicData:getMusicData,
};

function getOnlineData(){
  var data=[{
    name:"热血传奇",
    ace:"《热血传奇》作为一款经典老游在经历长达13年的运营过程中，不仅见证了一代游戏玩家的游戏历程，也见证网络游戏的一个时代的变迁，其经典玩法以及模式在现今很多游戏中开枝散叶并得到延续。",
    imgurl:""
  },{
    name:"魔兽世界",
    ace:"2012年美国在线游戏开发者大会评委会称赞：《魔兽世界》不仅极大推动了网游产业的发展，同时在运营近八年的时间内依然广受欢迎，至今仍有来自全球各地的用户在积极加入。即将推出的新资料片有望创造游戏的新纪录，使得这一品牌越发显著的成为当代流行文化的一个重要标志。",
    imgurl:""
  },{
    name:"泡泡堂",
    ace:"简单的操作模式。丰富的地图设置，背景音乐一响起，就有种夏天来临的感觉",
    imgurl:""
  },{
    name:"梦幻西游",
    ace:"配乐很赞，Q版画面融入很多国风色彩，完美的社交系统，完善的经济系统，完美的圆了中国人心中的武侠梦，那种仗剑走天涯，有三五好友一起闯江湖的感觉！",
    imgurl:""
  },{
    name:"冒险岛Online",
    ace:"游戏画面充满童话风味，清新有趣；游戏操作简便，没有视角的变化。游戏保持了网游绚丽的魔法系统，同时保证了魔法的绚丽与清新的背景相协调。",
    imgurl:""
  },{
    name:"地下城与勇士",
    ace:"当年的800万勇士有一些已经成家早已远离游戏，有一些因为厌倦了这款游戏离开了，有一些正要奋发图强不得不放弃这款游戏，但是还有一些老玩家还在这个变化很大的阿拉德大陆上面为之奋斗。这款游戏的魅力就是他陪过太多人的儿时的时光，还有他的格斗的感觉让玩家为之热血",
    imgurl:""
  },{
    name:"跑跑卡丁车",
    ace:"《跑跑卡丁车》与其它竞速游戏不同，首次在游戏中添加了漂移键。游戏以“全民漂移”为宣传词，而角色则使用了泡泡堂中的人物，角色可以驾驶卡丁车在城镇、森林、沙漠、冰河、墓地、矿山等多种主题的赛道上进行游戏。",
    imgurl:""
  },{
    name:"Dota",
    ace:"被认为影响了一代人对游戏的依赖和崇拜，并且改变着国内游戏市场部分新游作品的发展方向。但是市面上推出的不少新游戏虽然都有《Dota》的影子，却被认为在玩法、操作上的无法超越以及形象上毫无归属感从而销声匿迹。不管是80后玩家对《DOTA》情有独钟的游戏情结，还是国内网游商家对《DOTA》影响力的追逐。国内游戏市场可以说有很大一部分玩家都是寻找《DOTA》时代的回忆，他们认为《Dota》是无法超越的经典",
    imgurl:""
  },{
    name:"英雄联盟",
    ace:"从好玩的角度来说，LOL绝对算是一款好游戏、一款成功的游戏。它成功的普及了moba游戏。它的赛事影响力也很高。从休闲的角度来说也很好。，每天一个首胜。节奏速度快。匹配机制对新手比较友好。而且可以说是电子竞技发展道路上的里程碑。通过英雄联盟的直播和电子竞技比赛使得更多的人了解电子竞技，促进了我国电子竞技的发展。",
    imgurl:""
  },{
    name:"三国杀",
    ace:"有很多网友认为，三国杀作为一款以三国为题材的桌面游戏，得三国题材游戏之灵韵，集历史、文学、美术之大成。在注重玩家体验的同时，集合了娱乐性、竞技性、健康性。是一款注重文化内涵、老少皆宜的游戏。",
    imgurl:""
  }]

return data;
}

function getComicData(){
var data=[{
  name:"足球小将",
  ace:"《足球小将》是日本一部以足球为题材的动画片，内容讲述足球技术高超的少年大空翼（昵称：小翼）从小学六年级开始到进入职业足坛之间所发生的故事。它的影响力不仅带动着日本足球的发展，还使许多人因其而喜欢上足球。深深地影响80、90后的大部分人。",
  imgurl:""
},{
  name:"棒球英豪",
  ace:"电视动画《棒球英豪》改编自日本漫画家安达充创作的同名漫画作品，由东宝株式会社制作，杉井仪三郎导演。于1985年03月24日至1987年3月22日在富士电视台首播，全101话。故事以上杉达也、上杉和也 、浅仓南三人为中心展开，讲述一段关于爱、成长、青春、梦想的故事。",
  imgurl:""
},{
  name:"四驱兄弟",
  ace:"《四驱兄弟》是日本漫画家越田哲弘在日本著名杂志《快乐龙》上连载(台湾于漫画杂志《王牌小子》上连载,香港于《co-co!》上连载)的经典漫画，并以此为架构制作而成的超人气动画，是以玩具（迷你四驱车）、动画、电影、游戏、CD、收集卡、贴纸等各种媒介热销的动漫作品。",
  imgurl:""
},{
  name:"樱桃小丸子",
  ace:"《樱桃小丸子》是全球知名度最高及最具影响力的动漫作品之一。其动画连续二十余年高居日本动画收视率前三位，到2013年时已超过1000集，仍于每周日黄金时段下午六点在日本富士电视台上进行连载热播，是日本男女老少心中的国民动画。本作品是以作者的童年生活为蓝本，故事围绕着小丸子以及其家人和同学展开，有关于亲情、友谊，或是一些生活小事，其中有笑有泪，令人回想起童年的稚气。",
  imgurl:""
},{
  name:"黄金圣斗士",
  ace:"黄金圣斗士，是日本漫画家车田正美代表作《圣斗士星矢》漫画中女神雅典娜的最高级别圣斗士，立于八十八星座的顶点，他们身穿黄金圣衣，守护着通往雅典娜所在神殿的黄道圣域十二宫。",
  imgurl:""
},{
  name:"哆啦A梦",
  ace:"漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和身边的小伙伴们发生的轻松幽默搞笑感人的故事。",
  imgurl:""
},{
  name:"灌篮高手",
  ace:"《灌篮高手》是日本漫画家井上雄彦以高中篮球为题材的少年漫画，在《周刊少年JUMP》1990年42号至1996年27号上连载，单行本在17个国家和地区发行。与《足球小将》和《棒球英豪》合称为日本运动漫画三大巅峰之作。1995年，《灌篮高手》获日本第40届小学馆漫画奖；2006年，日本文化厅媒体艺术祭10周年纪念企划“日本的媒体艺术100选”，《灌篮高手》获得漫画部门第1位；2009年入选由中国图书商报和中国出版科研所联合评出的“新中国60年中国最具影响力的600本书”",
  imgurl:""
},{
  name:"数码宝贝",
  ace:"根据日本万代旗下同名电子游戏系列改编电视动画连续剧，由东映公司旗下动画工作室制作。本片的剧情接续于1999年3月上映的电影《数码宝贝》，讲述了八神太一、石田大和、武之内素娜等八位孩子因意外进入网络世界，在同伴数码宝贝的陪伴下，一同展开的奇幻冒险故事。",
  imgurl:""
},{
  name:"宠物小精灵",
  ace:"新手训练家小智从大木博士那里获得的是一只勉强又喜怒无常又不喜欢进入精灵球的皮卡丘，小智离开了家乡真新镇，在关都地区展开他的旅程。在赢得皮卡丘的信任后，小智认真地开展他的旅程来挑战各地的道馆，参加宝可梦联盟。在旅途中加入小智的是两位良师益友——小刚和小霞。",
  imgurl:""
},{
  name:"名侦探柯南",
  ace:"高中生侦探工藤新一和青梅竹马的同学毛利兰一同去游乐园玩的时候，目击了黑衣男子的可疑交易现场。只顾偷看交易的工藤新一，却忽略了从背后接近的另一名同伙。他被那名男子灌下了毒药，当他醒来时，身体居然缩小了！如果让那些家伙知道工藤新一还活着的话，不仅性命难保，还会危及身边的人。在阿笠博士的建议下他决定隐瞒身份，在被小兰问及名字时，化名江户川柯南，为了搜集那些家伙的情报，寄住在父亲以侦探为业的小兰家中。电视动画片《名侦探柯南》改编自青山刚昌创作的同名漫画，于1996年1月8日首播。",
  imgurl:""
},{
  name:"火影忍者",
  ace:"《火影忍者》是日本漫画家岸本齐史的代表作，作品于1999年开始在《周刊少年JUMP》上连载，于2014年11月10日发售的JUMP第50号完结；后日谈性质的外传漫画《火影忍者外传：第七代火影与绯色花月》则于同杂志2015年第22、23合并号开始短期连载，至同年第32号完结.故事成功地将原本隐藏在黑暗中，用世界上最强大的毅力和最艰辛的努力去做最密不可宣和隐讳残酷的事情的忍者，描绘成了太阳下最值得骄傲最光明无限的职业。在岸本齐史笔下的忍者世界中，每一位年轻的忍者都在开拓着属于自己的忍道。",
  imgurl:""
},{
  name:"死神",
  ace:"《BLEACH》（原意“漂白”，片假名：ブリーチ）是久保带人创作，2001年开始连载于集英社旗下《周刊少年JUMP》上的漫画。亦改编有同名动画及轻小说。至日文单行本第71卷发售时，累计发行量突破8600万册。2016年8月22日发行的《周刊少年JUMP》38号中完结。男主角黑崎一护是个看似暴力、单薄，实质上善良、勇敢、爱护家庭的少年，并且拥有能看见灵的体质。过着其他普通人并无大异的普通生活，直到女死神朽木露琪亚被他一脚踢到墙角并满脸惊疑地望着他问“你能看见我？”时漫画的序幕才这样被正式地揭开。 从此黑崎一护身边所有的事物都产生了翻天覆地的变化。",
  imgurl:""
},{
  name:"海贼王",
  ace:"《航海王》是日本漫画家尾田荣一郎作画的少年漫画作品，于1997年7月22日在集英社《周刊少年Jump》开始连载。改编的电视动画《航海王》于1999年10月20日起在富士电视台首播。拥有财富、名声、权力，这世界上的一切的男人 “海贼王”哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临 。",
  imgurl:""
}]

return data;
}

function getMovieData(){
var data=[{
  name:"春光灿烂猪八戒",
  ace:"该剧于2000年1月正式播出的古装神话情感喜剧，由梦继、叶崇铭执导，天空创作编剧，徐峥、陶虹、陈红、孙兴、李立群、翁虹等领衔主演。该剧描述了一段感人肺腑的爱情故事，跌宕起伏的精彩故事，徐峥活泼精湛的演技让人捧腹大笑，故事的结局也让许多人不禁留流下了泪水，更值得一提的是剧中的两位主演，徐峥与陶虹也因此邂逅了一段真挚的感情，并且结为夫妻，传为演艺圈的一段佳话。北京大学艺术学院教授彭吉象先生在其经典教材《艺术学概论》中把《春光灿烂猪八戒》列入后现代电视剧艺术代表作之一。后现代艺术在艺术创作中所表现的突破一切禁忌和界限，追求自由的精神是其基本思想。"
},{
  name:"少年包青天",
  ace:"据古典著作《三侠五义》改编的古装连续剧，由胡明凯执导，周杰、任泉、释小龙、李冰冰、刘怡君、郑佩佩领衔主演，陈道明特别出演，王绘春、贾致罡主演.剧集主要讲述了少年时期的包拯的破案事迹及爱情故事，于2000年首播.扑朔迷离的案情配上紧张刺激的音乐，使情节发展更加扣人心弦。推理断案是该剧的重要线索。前几集中的狼女小艾被杀一事，就留下许多伏笔，这样等得真相大白时，既不会让人觉得早已猜到又不会显得莫名其妙、特别突兀。故事的整体布局还算紧凑，案件一个接着一个，层层引人深入。",
  imgurl:""
},{
  name:"十八岁的天空",
  ace:"本剧讲述的是在高考前，性格迥异、各有心事的高三学生们在古越涛老师以及其他老师的用心沟通之下，打开自己的一片天空。听着那首《红色石头》。你的心就像一颗红色石头，有着热情的血液和石头的冰冷 ，顽固的把风抛在背后，知道你不会在回头，"
},{
  name:"仙剑奇侠传",
  ace:"《仙剑奇侠传》是根据大宇资讯同名单机游戏改编，由上海唐人电影制作有限公司、云南电视台、上海影视有限公司等联合出品，李国立执导，胡歌、刘亦菲、安以轩、刘品言、彭于晏等联袂主演的古装仙侠玄幻电视剧。该剧讲述了渔村的店小二李逍遥与女娲后人赵灵儿以及林家堡大小姐林月如等人之间的恩爱情仇，并联手消灭拜月教拯救苍生的故事。电视剧中的仙剑传承了游戏的两大特色：唯美的画面和感人的故事情节。剧中人物的心理、形象及背景的改动却是恰到好处，是游戏的升华和再次创作，对原作有比较大的突破.",
  imgurl:""
},{
  name:"还珠格格",
  ace:"《还珠格格》是一部改编自琼瑶同名小说的古装清宫喜剧，由孙树培导演，琼瑶亲自担任编剧，赵薇、林心如、苏有朋、周杰、陈志朋、张铁林、范冰冰等联合主演，该剧与《苍天有泪》同为“两个天堂”系列。该剧讲述了乾隆之女紫薇到北京城与失散多年的父亲相认。在走投无路之际遇上女飞贼小燕子，并结为姐妹。小燕子为她想办法混入宫，但在阴差阳错中与紫薇互换了身份，成为清宫中的“还珠格格”并深受乾隆宠爱的故事。《还珠格格》是琼瑶从事电视剧以来，最长的一部连续剧，也是反应最强烈的一部连续剧同时也是中国电视剧的一部传奇，该剧剧轰动亚洲，风靡全球各国华人圈并打破中国电视剧收视纪录，收视率创造中国第一，亚洲第一，重播率最高的合资剧，收视最高点突破65%"
},{
  name:"神话",
  ace:"由上影英皇文化发展有限公司出品的穿越剧，成龙担任总监制，唐季礼任艺术总监，蒋家骏执导，胡歌、白冰、张世、张萌、陈紫函、金莎、任泉等主演。 该剧改编自电影版《神话》，全剧剧情采用古今交错的形式发展，讲述了80后青年易小川在一次偶然的际遇下穿越回到秦朝，经过一次次的奇遇和历险，逐渐蜕变成为仁心济世的一代大将，谱写了一段感人至深的神话。《神话》的魅力在于在不真实中呈现了真实，在不存在中看到了存在，在梦幻中感悟了情理。采用了中国电视剧极其罕见的非现实主义的荒诞派的叙事艺术，做了一次大胆的艺术创新的尝试"
},{
  name:"铁齿铜牙纪晓岚",
  ace:"《铁齿铜牙纪晓岚》是由刘家成，张国立，罗长安执导的系列古装戏说历史题材轻喜剧，一共四部，张铁林、张国立、王刚、袁立等参加演出。该剧主要讲述了乾隆当朝的纪晓岚与和珅明争暗斗、参与破案的智斗故事。纪晓岚与和珅的性格塑造张扬和饱满"
},{
  name:"琅琊榜",
  ace:"《琅琊榜》是由山东影视传媒集团、山东影视制作有限公司、北京儒意欣欣影业、北京和颂天地影视文化有限公司、北京圣基影业有限公司、东阳正午阳光影视有限公司联合出品，由孔笙、李雪执导，胡歌、刘涛、王凯、黄维德、陈龙、吴磊、高鑫等主演的古装剧.该剧根据海宴同名网络小说改编，以平反冤案、扶持明君、振兴山河为主线，讲述了“麒麟才子”梅长苏才冠绝伦、以病弱之躯拨开重重迷雾、智博奸佞，为昭雪多年冤案、扶持新君所进行的一系列斗争。",
  imgurl:""
},{
  name:"请回答1988",
  ace:"《请回答1988》是由申源浩执导，李有静编剧，李惠利、朴宝剑、柳俊烈、高庚杓等主演的青春怀旧剧，2015年11月6日起在韩国tvN电视台金土档播出，以1988年汉城（今首尔）奥运会为背景，讲述在首尔市道峰区双门洞居住的五户人家之间温暖的亲情和邻里情的故事",
  imgurl:""
}];
return data;
}

function getMusicData(){
  var data=[{
    name:"布拉格广场"
  },{
    name:"不能说的秘密"
  },{
    name:"面具"
  },{
    name:"逆流成河"
  },{
    name:"娃娃脸"
  },{
    name:"西厢"
  },{
    name:"如果我变成回忆"
  },{
    name:"有一种爱叫做放手"
  },{
    name:"秋天不回来"
  },{
    name:"我们的无奈"
  },{
    name:"SuperStar"
  },{
    name:"你不知道的事"
  },{
    name:"不得不爱"
  },{
    name:"假如爱有天意"
  },{
    name:"认真的雪"
  },{
    name:"年少有为"
  },{
    name:"讲真的"
  },{
    name:"分手假期"
  },{
    name:"青春纪念册"
  },{
    name:"爱情转移"
  },{
    name:"千年之恋"
  },{
    name:"三国恋"
  },{
    name:"樱花草"
  },{
    name:"离歌"
  },{
    name:"那么爱你为什么"
  },{
    name:"过火"
  },{
    name:"有没有人告诉你"
  },{
    name:"孤单北半球"
  },{
    name:"星月神话"
  },{
    name:"当你"
  },{
    name:"当你孤单你会想起谁"
  },{
    name:"老人与海"
  },{
    name:"偏爱"
  },{
    name:"逍遥叹"
  },{
    name:"该死的温柔"
  },{
    name:"素颜"
  }];

  return data;
}