<template>
    <div class="transaction__container">
        <div class="transaction__head">
            <h1 class="transaction__title">Transactions</h1>
            <v-icon color="#10DC87" style="transform: rotate(120deg)" large>sync</v-icon>
        </div>

        <!-- <div class="transaction__content">
        </div> -->
        <!-- <v-tabs
         v-model="Graph"
         color="white"
         dark
         slider-color="#08BA4D"
         :ripple= false
        >
         <v-tab v-for="tabName in graphTabName" :key="tabName">
             <p class="black--text">{{tabName}}</p>
         </v-tab>    
        </v-tabs> -->

        <div class="graph-container mb-1">
            <div class="graph-tabs">
                <p class="graph-tab-name font-weight-bold"  @click="monthTransactions()">Monthly Transactions</p>
                <p class="graph-tab-name font-weight-bold"  @click="weekTransactions()">Weekly Transactions</p>
            </div>

            <div class="graphs">
                <line-chart :chartData="datacollection" :options="chartOptions" style="width: 900px; height: 400px"/>
            </div>
        </div>

        <v-layout row wrap justify-space-between align-center class="mb-3" style="width: 100%;border: 1px solid red;">
            <v-flex xs12 sm6 md6 lg6 style="border: 1px solid red;">
                <v-btn depressed flat class="text-capitalize"><v-icon small></v-icon>Previous Week</v-btn>
                <v-btn depressed flat class="text-capitalize"><v-icon small></v-icon>Next Week</v-btn>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 style="border: 1px solid red;">
                <p class="font-weight-bold">YEAR 2019</p>
            </v-flex>
        </v-layout>

        <!-- <v-tabs-items v-model="Graph">
            <v-tab-item>
               <LineChart :chart-data="monthDatacollection"></LineChart>
            </v-tab-item>
            <v-tab-item>
               weekly transactions graph
            </v-tab-item>
         </v-tabs-items> -->

        <div class="transaction__final">
            <div class="export">
                <p class="export__title">Export</p>
                <p class="export__text">How would you like to export the transaction statistics.</p>

                <div class="export__buttons">
                    <button class="export__btn">
                        <v-icon color="white" light style="font-size: 15px; margin-right: 8px;">insert_drive_file</v-icon>
                        PDF
                    </button>

                    <button class="export__btn">
                        <v-icon color="white" light style="font-size: 15px; margin-right: 8px;">collections</v-icon>
                        .csv
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LineChart from '@/components/dashboard/chart.vue'
    export default {
        name: "Transactions",

        components: {
          LineChart
        },

        data(){
            return{

              Graph: null,
            //   graphTabName: [{name: 'Monthly Transactions', fnt: this.monthTransactions()}, {name: 'Weekly Transactions', fnt: this.weekTransactions()}],
              datacollection: null,
              chartOptions: {

                scales: {
                  yAxes: [{
                      ticks: {
                        //   beginAtZero: true
                      },
                      gridLines: {
                          display: false
                      }
                  }],
  
                  xAxes: [ {
                      gridLines: {
                          display: true
                      }
                  }]
                },

                elements: {
                   line: {
                       borderWidth: 2,
                       backgroundColor: 'rgba(0,0,255,0)',
                   },
                   point: {
                       backgroundColor: 'rgba(148,237,206,0.8)',
                       radius: 2,
                       hoverRadius: 4
                   }
                },

                responsive: true,
                maintainAspectRatio: false

               },
              week: false

            }
        },

        created() {

            // this.monthTransactions();
            this.fillData();

        },

        mounted() {
        //    this.fillData();
        },

        methods: {

            fillData () {
               
                this.datacollection = {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
                    // labels: this.$store.state.x_asLabel,
                    datasets: [
                        {
                        label: 'Transaction(s)',
                        borderColor: '#94EDCE',
                        data: [0, 100, 50, 200, 150, 250, 55, 23, 71, 220, 171, 58]
                        // data: this.$store.state.graphData
                        }
                    ]
                }
            },

            monthTransactions() {
              
              let chart = document.getElementById('line-chart')
              this.week = false
              this.$store.commit('monthGraphData')
              this.datacollection = {
                    labels: this.$store.state.x_asLabel,
                    datasets: [
                        {
                         label: 'Month Transaction(s)',
                         borderColor: '#94EDCE',
                         data: this.$store.state.graphData
                        }
                    ]
                }

            },

            weekTransactions() {

              this.week = true
              this.$store.commit('weekGraphData')
              this.datacollection = {
                    labels: this.$store.state.x_asLabel,
                    datasets: [
                        {
                         label: 'Week Transaction(s)',
                         borderColor: '#94EDCE',
                         data: this.$store.state.graphData
                        }
                    ]
                }

            },

            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }

         }

    }
</script>

<style scoped>
    .transaction__container {
        font-family: 'Poppins', sans-serif;
        border-radius: 4px;
        max-width: 1146px;
        width: 100%;
        height: 100%;
        display: flex;
        background: #FFFFFF;
        flex-direction: column;
        justify-content: flex-start;
        padding: 50px 100px 70px 100px;
    }

    .transaction__head {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 22px;
    }

    .transaction__title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 36px;
        text-align: left;
        color: #10DC87;
        margin-right: 12px;
    }

    .transaction__final {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .graph-container{
        display: flex;
        flex-direction: column;
        widows: 100%;
        height: auto;
        justify-content: center;
        align-items: flex-start;
    }

    .graph-tabs{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
        justify-content: flex-start;
        align-items: center;
    }

    .graph-tab-name{
        text-align: left;
        text-decoration: underline;
        font-size: 16px;
        width: 250px;
        cursor: pointer;
        color: grey;
    }

    .graph-tab-name:hover{
        color: black;
    }

    .graphs{
        display: flex;
        width: 100%;
        height: auto;
        justify-content: flex-start;
        align-items: center;
    }

    .export {
        padding: 24px 28px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    }

    .export__title {
        color:#2F2F2F;
        font-size: 24px;
        text-align: left;
        width:100%;
    }

    .export__text {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: left;
        font-size: 14px;
        color:#2F2F2F;
        width: 100%;
        max-width: 223px;
    }

    .export__buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .export__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 107px;
        width: 100%;
        border-radius: 5px;
        background: linear-gradient(to bottom, #10DC87, #08BA4D);
        color: white;
        font-size: 15px;
        padding: 5px 20px;
    }

    .transaction__content {
        max-width: 900px;
        height: 500px;
        width: 100%;
        background: url('../../assets/images/dashboard/graph.png') no-repeat center center;
        background-size: contain;
    }

    @media (max-width: 980px) {
        .transaction__container {
            padding: 50px 50px;
        }

        .transaction__title {
            font-size: 24px;
        }

        .export__title {
            font-size: 20px;
        }

        .export {
        }
    }

</style>