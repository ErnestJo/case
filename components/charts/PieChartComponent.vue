<template>
  <apexchart
    :height="height"
    width="90%"
    :options="options"
    :series="data.series"
  ></apexchart>
</template>
<script lang="js">
export default {
  props:{
    height: {
      type: Number,
      default: 350
    },
    data:{
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      options:{
         chart: {
          height: 350,
          width: '100%',
          type: 'pie',
          background: 'transparent',
          toolbar: {
            show: true,
          },
          animation:{
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
              },
            dynamicAnimation: {
            enabled: true,
            speed: 350
        }
          },
        },
        stroke:{
          width: 0
        },
        labels: this.data.chartOptions.labels,
        dataLabels:{
          enabled: true,
          dropShadow: {
                blur: 0,
                opacity: 0.0
              }
        },
        fill:{
          colors: ["#20B2AA",
            "#7FFF00",
            "#32CD32",
            "#00FF00",
            "#228B22",
            "#008000",
            "#006400",
            "#ADFF2F",
            "#9ACD32",
            "#00FF7F",
            "#00FA9A"],
          type: 'solid'
        },
        plotOptions:{
          pie:{
            customScale: 0.8,
             startAngle: -45,
            donut:{
              labels:{
                show:true,
                total:{
                  showAlways: true,
                  show: false
                }
              }
            }
          }
        },