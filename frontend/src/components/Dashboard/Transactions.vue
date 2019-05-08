<template>
    <div class="transaction__container">
        <div class="transaction__head">
            <h1 class="transaction__title">Transactions</h1>
            <v-icon color="#10DC87" style="transform: rotate(120deg)" large>sync</v-icon>
        </div>

        <div class="graph-container mb-1">
            <div class="graph-tabs">
                <p class="graph-tab-name font-weight-bold"  @click="monthTransactions()">Monthly Transactions</p>
                <p class="graph-tab-name font-weight-bold"  @click="weekTransactions()">Weekly Transactions</p>
            </div>

            <p class="font-weight-bold black--text" style="font-size: 15px;text-align: center">{{graphLegend}}</p>

            <div class="graphs">
                <line-chart :chartData="datacollection" :options="chartOptions" style="width: 900px; height: 400px"/>
            </div>
        </div>

        <v-layout row wrap justify-space-between align-start class="mb-3" style="width: 100%;">
            <v-flex xs12 sm6 md6 lg6 style="height: 100%;" class="week-ctr-flex">
                <div class="text-capitalize black--text ctrl-container" style="" v-if="week">

                    <v-tooltip top color="#369555">
                        <template v-slot:activator="{ on }">
                          <!-- <img src="../../assets/images/dashboard/prev-month.svg" alt="" v-on="on" class="prev-month"> -->
                          <div class="month-ctrl" @click="prevMonthCtrl()">
                              <v-icon medium style="color: #369555; cursor: pointer;" class="animated zoomIn" v-on="on">keyboard_arrow_left</v-icon>
                              <v-icon medium style="color: #369555; cursor: pointer;" class="animated zoomIn" v-on="on">keyboard_arrow_left</v-icon>
                          </div>
                        </template>
                        <span>{{prevMonth}}</span>
                    </v-tooltip>

                    <v-icon class="graph-ctr-icon animated bounceIn" style="color: #E0E0E0;" small>keyboard_arrow_left</v-icon>
                    <p class="graph-ctr-txt animated bounceIn" style="color: #E0E0E0;width: 150px;">Previous Week</p>
                </div>

                <div class="text-capitalize black--text ctrl-container" style="" v-if="week">
                    <p class="graph-ctr-txt animated bounceIn">Next Week</p>
                    <v-icon class="graph-ctr-icon animated bounceIn" small>keyboard_arrow_right</v-icon>

                    <v-tooltip top color="#369555">
                        <template v-slot:activator="{ on }">
                          <!-- <img src="../../assets/images/dashboard/next-month.svg" alt="" v-on="on" class="prev-month"> -->
                          <div class="month-ctrl" @click="nextMonthCtrl()">
                              <v-icon medium style="color: #E0E0E0; cursor: pointer;" class="animated zoomIn" v-on="on">keyboard_arrow_right</v-icon>
                              <v-icon medium style="color: #E0E0E0; cursor: pointer;" class="animated zoomIn" v-on="on">keyboard_arrow_right</v-icon>
                          </div>
                        </template>
                        <span>{{nextMonth}}</span>
                    </v-tooltip>

                </div>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 style="height: 100%;" class="year-info-flex">
                <p class="font-weight-bold">YEAR {{currentYear}}</p>
            </v-flex>
        </v-layout>

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
import LineChart from '@/components/Dashboard/chart.vue'
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
                       radius: 3,
                       hoverRadius: 4
                   }
                },

                responsive: true,
                maintainAspectRatio: false

               },
              week: false, //enable/disable de week graph ctrl when weekly transactions is clicked
              currentYear: this.$moment().year(),
              currentMonth: this.$moment().format('MMMM'),
              prevMonth: null,//prev btn tooltip content
              nextMonth: null,//next btn tooltip content
              graphLegend: null,//graph info label
              currentMonthNumber: this.$moment().subtract(1, 'months').format('M'),
              monthNumber: 0,
              realTimeMonth: this.$moment().format('MMMM')//current month when next/pren are clicked

            }
        },

        created() {

            this.fillData();
        },

        mounted() {

        },

        methods: {

            fillData () {
               
                this.datacollection = {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
                    // labels: this.$store.state.x_asLabel,
                    datasets: [
                        {
                        label: `${this.currentMonth} Transaction(s)`,
                        borderColor: '#94EDCE',
                        data: [0, 100, 50, 200, 150, 250, 55, 23, 71, 220, 171, 58]
                        // data: this.$store.state.graphData
                        }
                    ]
                }
            },

            graphUpdatedData() {

                this.datacollection = {
                    labels: this.$store.state.x_asLabel,
                    datasets: [
                        {
                        //  label: this.graphLegend,
                         label: '',
                         borderColor: '#94EDCE',
                         data: this.$store.state.graphData
                        }
                    ]
                }

            },

            monthTransactions() {
              
              let chart = document.getElementById('line-chart')
              this.week = false
              this.graphLegend = `${this.currentMonth} Transaction(s)`
              this.$store.commit('monthGraphData')
              this.graphUpdatedData()

            },

            weekTransactions() {
              console.log(this.$moment().subtract(1, 'months').format('MMMM'));

              this.week = true
              this.graphLegend = `${this.currentMonth} week-1 Transaction(s)`
              this.$store.commit('weekGraphData')
              this.graphUpdatedData()
              //next/previous month tooltip content
              this.prevMonth = this.$moment().subtract(1, 'months').format('MMMM')
              this.nextMonth = this.currentMonth

            },

            nextMonthCtrl()
            {

               console.log(this.monthNumber);
               if(this.monthNumber > 0 && this.realTimeMonth != this.currentMonth){
   
                  let nextmonth = this.$moment(this.realTimeMonth,'MMMM').add(2, 'months').format('MMMM')
                  this.nextMonth = nextmonth

                  let nextmonthLabel = this.$moment(this.realTimeMonth,'MMMM').add(1, 'months').format('MMMM')

                  this.realTimeMonth = nextmonthLabel //update nextmonthLabel data
                  this.graphLegend = `${nextmonthLabel} week-1 Transaction(s)`

               }
               

            },

            prevMonthCtrl() {

              //if de monthNumber < the current month digit number
              if(this.monthNumber < this.currentMonthNumber-1){
                  this.monthNumber++
                  let prevmonth = this.$moment(this.realTimeMonth,'MMMM').subtract(2, 'months').format('MMMM')
                  let prevmonthLabel = this.$moment(this.realTimeMonth,'MMMM').subtract(1, 'months').format('MMMM')
           
                  this.prevMonth = prevmonth //update previous tooltip content
                  this.realTimeMonth = prevmonthLabel //update realTimeMonth data
                  this.graphLegend = `${prevmonthLabel} week-1 Transaction(s)`

              }else{
                //   this.prevMonth = 'January'
                //   this.nextMonth = 'Frebruary'
                //   this.graphLegend = `January week-1 Transaction(s)`                
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

    .week-ctr-flex{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .year-info-flex{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .week-ctr-flex .ctrl-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
    }

    .week-ctr-flex .ctrl-container p{
        color: #369555;
        text-align: left;
        font-size: 15px;
        height: auto;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
    }

    .week-ctr-flex .ctrl-container p:hover{
        text-decoration: underline;
        /* font-weight: bold; */
    }

    .week-ctr-flex .ctrl-container .v-icon{
        color: #369555;
    }

    .week-ctr-flex .ctrl-container:hover .week-ctr-flex div .v-icon{
        transform: scale(1.2,1.2);
    }

    .prev-month{
        width: 13px;
        height: 13px;
        cursor: pointer;
    }

    prev-month:hover, next-month:hover{
        transform: scale(1.2,1.2);
    }
    
    .month-ctrl{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: auto;       
     }

     .month-ctrl .v-icon{
         width: 6px;
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