<template>
  <div id="AreaSplineArea">
    <apexchart type=area height=350 :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'AreaSplineArea',
        props: [],
        data: function() {
            return {
                series: [{
                    name: 'Marcas e produtos',
                    data: [31, 40, 28, 51, 42, 109, 100, 20, 61, 16, 97, 35, 49, 45, 10, 80, 46]
                }],
                chartOptions: {
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                 },
                xaxis: {
                    type: 'datetime',
                    categories: ["sprint 1", "sprint 2", "sprint 3", "sprint 4", "sprint 5", "sprint 6"
                    ],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },

                }
            }
        },
        components: {
            apexchart: VueApexCharts
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
