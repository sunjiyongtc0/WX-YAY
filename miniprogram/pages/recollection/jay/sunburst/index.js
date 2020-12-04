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
var data=jayAlbum.getSunData();

  var option = {
    series: {
      radius: [0, '90%'],
      type: 'sunburst',
      sort: null,
      highlightPolicy: 'ancestor',
      data: data,
      label: {
        rotate: 'radial'
      },
      levels: [{}, {
        r0: '15%',
        r: '30%',
        itemStyle: {
            borderWidth: 2
        },
        label: {
            rotate: 'tangential'
        }
    }, {
        r0: '30%',
        r: '60%',
        label: {
            align: 'right'
        }
    }, {
        r0: '60%',
        r: '75%',
        label: {
            // position: 'outside',
            padding: 3,
            silent: false
        },
        itemStyle: {
            borderWidth: 3
        }
    },{
      r0: '75%',
      r: '90%',
      label: {
          // position: 'outside',
          padding: 3,
          silent: false
      },
      itemStyle: {
          borderWidth: 3
      }
  }]
    }
  };


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
