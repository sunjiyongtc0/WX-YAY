import * as echarts from '../../../../ec-canvas/echarts';
const jayAlbum = require('../../../../js/jayAlbum.js');
const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var data1 =jayAlbum.getAlbumData() ;

  var option = {
    backgroundColor: '#f4c8c8',
    series: [{
      type: 'tree',
      initialTreeDepth: -1,
      name: 'tree1',
      data: [data1],
      top: '1%',
      left: '7%',
      bottom: '1%',
      right: '20%',
      symbol: 'emptyCircle',
      // orient: 'vertical',//竖向展示
      // layout: 'radial',//是否为环形
      symbolSize: 20,
      label: {
        // backgroundColor: '#fff',
        color:'#445D7C',
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 9
    },
    leaves: {
        label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
        }
    },
      // label: {
      //   normal: {
      //     position: 'left',
      //     verticalAlign: 'middle',
      //     align: 'right',
      //     color: 'black'
      //   }
      // }
    }]
  };
  echarts.util.each(data1.children, function (datum, index) {
    index % 2 === 0 && (datum.collapsed = true);
});
  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
