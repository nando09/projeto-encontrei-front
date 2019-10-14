<template>
  <div id="PieDonutPattern">
    <apexchart type=pie height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'PieDonutPattern',
        props: [],
        data: function () {
            return {
                series: [44, 55, 41, 17, 15],
                chartOptions: {
                    chart: {
                        dropShadow: {
                            enabled: true,
                            color: '#111',
                            top: -1,
                            left: 3,
                            blur: 3,
                            opacity: 0.2
                        }
                    },
                    stroke: {
                        width: 0,
                    },
                    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                    dataLabels: {
                        dropShadow: {
                            blur: 3,
                            opacity: 0.8
                        }
                    },
                    fill: {
                        type: 'pattern',
                        opacity: 1,
                        pattern: {
                            enabled: true,
                            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                        },
                    },
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    theme: {
                        palette: 'palette2'
                    },
                    title: {
                        text: "Favourite Movie Type"
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
