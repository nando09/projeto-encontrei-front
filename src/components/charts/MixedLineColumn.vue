<template>
  <div id="MixedLineColumn">
    <apexchart type=line height=350 :options="chartOptions" :series="series" />
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'MixedLineColumn',
        props: [],
        components: {
            apexchart: VueApexCharts,
        },
        data: function() {
            return {
                series: [{
                    name: 'Website Blog',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }, {
                    name: 'Social Media',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }],
                chartOptions: {
                    stroke: {
                        width: [0, 4]
                    },
                    title: {
                        text: 'Traffic Sources'
                    },
                    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001',
                        '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'
                    ],
                    xaxis: {
                        type: 'datetime'
                    },
                    yaxis: [{
                        title: {
                            text: 'Website Blog',
                        },

                    }, {
                        opposite: true,
                        title: {
                            text: 'Social Media'
                        }
                    }]

            }
       }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
