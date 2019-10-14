<template>
  <div id="PieSimplePie">
    <apexchart type=pie height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'PieSimplePie',
        props: [],
        data: function () {
            return {
                series: [44, 55, 13, 43, 22],
                chartOptions: {
                    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
