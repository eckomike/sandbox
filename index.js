var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  color: ["#404F5C"],
  backgroundColor: ["rgba(219, 228, 237, 1"],
  shadowBlur: ["15"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {},
  xAxis: [{
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    type: "value"
  }],
  series: [{
    name: "Bento days",
    type: "bar",
    barWidth: "80%",
    data: [10, 52, 200, 334, 390, 330, 220],
    itemStyle: {
      borderRadius: [16, 4, 0, 0]
    }
  }]
}

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);