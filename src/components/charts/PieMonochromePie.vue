<template>
  <div id="PieMonochromePie">
    <apexchart type=pie height="350px" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'PieMonochromePie',
        props: [],
        data: function () {
            return {
                series: [25, 15, 44, 55, 41, 17],
                chartOptions: {
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    theme: {
                        monochrome: {
                            enabled: true
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
