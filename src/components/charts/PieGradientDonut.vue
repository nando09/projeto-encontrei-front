<template>
  <div id="PieGradientDonut">
    <apexchart type=donut height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'PieGradientDonut',
        props: [],
        data: function () {
            return {
                series: [44, 55, 41, 17, 15],
                chartOptions: {
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: 'gradient',
                    },
                    legend: {
                        formatter: function (val, opts) {
                            return val + " - " + opts.w.globals.series[opts.seriesIndex]
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        },
        components: {
            apexchart: VueApexCharts,
        },
    }
</script>
<style scoped>
</style>
