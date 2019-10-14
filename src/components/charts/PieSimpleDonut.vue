<template>
  <div id="PieSimpleDonut">
    <apexchart type=donut height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'PieSimpleDonut',
        props: [],
        data: function () {
            return {
                series: [26, 64, 10],
                chartOptions: {
                    responsive: [{
                        breakpoint: 480,
                        dataLabels: {
                            enabled: false
                        },
                        options: {
                            chart: {
                                width: 200
                            }
                        }

                    }]
                }
            }
        },
        components: {
            apexchart: VueApexCharts
        },
    }
</script>
<style scoped>
</style>
