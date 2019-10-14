<template>
  <div id="LineBasic">
    <apexchart type=line height=250 :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'LineBasic',
        props: [],
        data: function() {
            return {
                series: [{
                    name: "Vendas",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight',
                        colors:['#ccc']
                    },
                    title: {
                        text: 'R$ 424.652 vendas',
                        align: 'left'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    }
                }
            }
        },
        props: [],
        components: {
            apexchart: VueApexCharts
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
