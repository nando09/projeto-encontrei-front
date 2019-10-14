<template>
  <div id="LineBasic">
    <apexchart type=bar :width="width" :height="height" :options="chartOptions" :series="series" />
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
                    name: '',
                    data: [44, 55, 41, 87, 22, 43, 22, 34, 12]
                }],
                chartOptions: {
                    grid:{
                        show: false
                    },
                    chart: {
                        stacked: true,
                        toolbar: {
                            show: false
                        },
                        zoom: {
                            enabled: false
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                        },
                    },

                    xaxis: {
                        type: 'datetime',
                        categories: ['01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                            '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT'
                        ],
                    },
                    legend: {
                    },
                    fill: {
                        opacity: 1
                    }
                }

            }
        },


    //     chartOptions: {
    //         chart: {
    //             id: 'vuechart-example',
    //         },
    //         xaxis: {
    //             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    //         },
    //     },
    //     series: [{
    //         name: 'series-1',
    //         data: [30, 40, 45, 50, 49, 60, 70, 81]
    //     }]
    // }




        props: ['height', 'width'],
        components: {
            apexchart: VueApexCharts
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
