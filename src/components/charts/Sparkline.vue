<template>
  <div id="app">
    <div class="row">
      <div class="col-md-4">
        <div id="spark1">
          <apexchart type=area height=160 :options="chartOptionsTopSpark1" :series="seriesTopSpark1" />
        </div>
      </div>
      <div class="col-md-4">
        <div id="spark2">
          <apexchart type=area height=160 :options="chartOptionsTopSpark2" :series="seriesTopSpark2" />
        </div>
      </div>
      <div class="col-md-4">
        <div id="spark3">
          <apexchart type=area height=160 :options="chartOptionsTopSpark3" :series="seriesTopSpark3" />
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-centered mb-0">
            <thead class="thead-light">
            <th>Valor total</th>
            <th>Porcentagem do portfólio</th>
            <th>Últimos 10 dias</th>
            <th>Volume</th>
            </thead>
            <tbody>
            <tr>
              <td>R$ 32.554</td>
              <td>15%</td>
              <td>
                <div id="chart1">
                  <apexchart type=line height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark1" />
                </div>
              </td>
              <td>
                <div id="chart5">
                  <apexchart type=bar height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark1" />
                </div>
              </td>
            </tr>
            <tr>
              <td>R$ 23.533</td>
              <td>7%</td>
              <td>
                <div id="chart2">
                <apexchart type=line height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark2" />
                </div>
              </td>
              <td>
                <div id="chart6">
                  <apexchart type=bar height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark2" />
                </div>
              </td>
            </tr>
            <tr>
              <td>R$ 54.276</td>
              <td>9%</td>
              <td>
                <div id="chart3">
                  <apexchart type=line height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark3" />
                </div>
              </td>
              <td>
                <div id="chart7">
                  <apexchart type=bar height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark3" />
                </div>
              </td>
            </tr>
            <tr>
              <td>R$ 11.533</td>
              <td>2%</td>
              <td>
                <div id="chart4">
                  <apexchart type=line height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark4" />
                </div>
              </td>
              <td>
                <div id="chart8">
                  <apexchart type=bar height=35 width="100" :options="chartOptionsSparkLine" :series="seriesSpark4" />
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- end card body-->

  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    window.Apex = {
        stroke: {
            width: 3
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
            }
        }
    };

    var randomizeArray = function (arg) {
        var array = arg.slice();
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // data for the sparklines that appear below header area
    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];


    export default {
        name: 'Sparkline',
        props: [],
        data: function() {
            return {
                seriesTopSpark1: [{
                    data: randomizeArray(sparklineData)
                }],
                seriesTopSpark2: [{
                    data: randomizeArray(sparklineData)
                }],
                seriesTopSpark3: [{
                    data: randomizeArray(sparklineData)
                }],
                seriesSpark1: [{
                    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
                }],
                seriesSpark2: [{
                    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
                }],
                seriesSpark3: [{
                    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
                }],
                seriesSpark4: [{
                    data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
                }],
                chartOptionsTopSpark1: {
                    chart: {
                        sparkline: {
                            enabled: true
                        },
                    },
                    colors: ['#DCE6EC'],
                    stroke: {
                        curve: 'straight'
                    },
                    fill: {
                        opacity: 0.3
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        },
                    },
                    yaxis: {
                        min: 0
                    },
                    title: {
                        text: '$135,965',
                        offsetX: 0,
                        style: {
                            fontSize: '24px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    },
                    subtitle: {
                        text: 'Profits',
                        offsetX: 0,
                        style: {
                            fontSize: '14px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    }
                },
                chartOptionsTopSpark2: {
                    chart: {
                        sparkline: {
                            enabled: true
                        },
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    fill: {
                        opacity: 0.3
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        },
                    },
                    yaxis: {
                        min: 0
                    },
                    title: {
                        text: '$235,312',
                        offsetX: 0,
                        style: {
                            fontSize: '24px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    },
                    subtitle: {
                        text: 'Expenses',
                        offsetX: 0,
                        style: {
                            fontSize: '14px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    }
                },
                chartOptionsTopSpark3: {
                    chart: {
                        sparkline: {
                            enabled: true
                        },
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    fill: {
                        opacity: 0.3
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        },
                    },
                    yaxis: {
                        min: 0
                    },
                    title: {
                        text: '$424,652',
                        offsetX: 0,
                        style: {
                            fontSize: '24px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    },
                    subtitle: {
                        text: 'Sales',
                        offsetX: 0,
                        style: {
                            fontSize: '14px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    }
                },
                chartOptionsSparkLine: {
                    chart: {
                        height: 35,
                        sparkline: {
                            enabled: true
                        }
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '80%'
                        }
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        },
                    },
                    tooltip: {
                        fixed: {
                            enabled: false
                        },
                        x: {
                            show: false
                        },
                        y: {
                            title: {
                                formatter: function (seriesName) {
                                    return ''
                                }
                            }
                        },
                        marker: {
                            show: false
                        }
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
