<template>
  <div id="RadialBarMultiple">
    <apexchart type=radialBar height=350 :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'RadialBarMultiple',
        props: [],
        data: function() {
            return {
                series: [55, 67, 83],
                chartOptions: {
                    plotOptions: {
                        radialBar: {
                            dataLabels: {
                                name: {
                                    fontSize: '22px',
                                },
                                value: {
                                    fontSize: '16px',
                                },
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: function (w) {
                                        return 249
                                    }
                                }
                            }
                        }
                    },
                    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
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
