<template>
    <div class="transaction__container">
        <div class="transaction__head">
            <h1 class="transaction__title">Transactions</h1>
            <v-icon color="#10DC87" style="transform: rotate(120deg)" large>sync</v-icon>
        </div>

        <div class="graph-container mb-1">
            <div class="graph-tabs">
                <p class="graph-tab-name font-weight-bold" style=""  @click="yearTransactions(yearLabel)" v-if="!$store.state.userData.userdata.is_superuser">Monthly Transactions</p>
                <p class="graph-tab-name font-weight-bold"  @click="weekTransactions()" v-if="!$store.state.userData.userdata.is_superuser">Weekly Transactions</p>
            </div>

            <p class="font-weight-bold black--text" style="font-size: 15px;text-align: center" v-if="!$store.state.userData.userdata.is_superuser">{{graphLegend}}</p>

            <div class="graphs">
                <line-chart :chartData="datacollection" :options="chartOptions" style="width: 1000px; height: 400px"/>
            </div>
        </div>

        <v-layout row wrap justify-space-between align-start class="mb-3" style="width: 100%;">
            <v-flex xs12 sm6 md6 lg6 style="height: 100%;" class="week-ctr-flex">
                <div class="text-capitalize black--text ctrl-container" style="" v-if="week">

                    <v-tooltip top color="#369555">
                        <template v-slot:activator="{ on }">
                          <div class="month-ctrl" @click="prevMonthCtrl()">
                              <v-icon medium :style="prevStyle" style="" class="animated zoomIn" v-on="on">keyboard_arrow_left</v-icon>
                              <v-icon medium :style="prevStyle" style="" class="animated zoomIn" v-on="on">keyboard_arrow_left</v-icon>
                          </div>
                        </template>
                        <span>{{prevMonth}}</span>
                    </v-tooltip>

                    <v-icon class="graph-ctr-icon animated bounceIn" :style="weekPrevStyle" style="" small>keyboard_arrow_left</v-icon>
                    <p class="graph-ctr-txt animated bounceIn" :style="weekPrevStyle" style="width: 150px;" @click="prevWeek()">Previous Week</p>
                </div>

                <div class="text-capitalize black--text ctrl-container" style="" v-if="week">
                    <p class="graph-ctr-txt animated bounceIn" :style="weekNextStyle"  @click="nextWeek()">Next Week</p>
                    <v-icon class="graph-ctr-icon animated bounceIn" :style="weekNextStyle" small>keyboard_arrow_right</v-icon>

                    <v-tooltip top color="#369555">
                        <template v-slot:activator="{ on }">
                          <div class="month-ctrl" @click="nextMonthCtrl()">
                              <v-icon medium :style="nextStyle" style="" class="animated zoomIn" v-on="on">keyboard_arrow_right</v-icon>
                              <v-icon medium :style="nextStyle" style="" class="animated zoomIn" v-on="on">keyboard_arrow_right</v-icon>
                          </div>
                        </template>
                        <span>{{nextMonth}}</span>
                    </v-tooltip>

                </div>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 style="height: 100%;" class="year-info-flex">
                <select name="" id="" @change="transactionsDataFormat()" style="width: auto; height: 30px; border: 1px solid #E5E5E5; border-radius: 5px; padding-left: 10px;padding-right: 10px;color: black;font-size: 14px;font-weight: bold;">
                    <option value="">Choose a data format</option>
                    <option value="transactions">Transactions</option>
                    <option value="compensations">Compensations Sum</option>
                </select>
                <v-icon medium :style="prevStyle" style="position: relative;bottom: 2px;" class="animated zoomIn mr-2" @click="prevYear()">keyboard_arrow_left</v-icon>
                <p class="font-weight-bold">YEAR {{yearLabel}}</p>
                <v-icon medium :style="nextStyle" style="position: relative;bottom: 2px;" class="animated zoomIn ml-2" @click="nextYear()">keyboard_arrow_right</v-icon>
            </v-flex>
        </v-layout>

        <div class="transaction__final">
            <div class="export">
                <p class="export__title">Export</p>
                <p class="export__text">How would you like to export the transaction statistics.</p>

                <div class="export__buttons">
                    <button class="export__btn" @click="exportPDF()">
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
import jsPDF from 'jspdf'
import Co2okWidget from '../../co2okWidget'
import { log } from 'util';
    export default {
        name: "Transactions",

        components: {
          LineChart
        },

        data(){
            return{

              Graph: null,
            //   graphTabName: [{name: 'Monthly Transactions', fnt: this.yearTransactions()}, {name: 'Weekly Transactions', fnt: this.weekTransactions()}],
              datacollection: {
                    labels: this.$store.state.x_asLabel,
                    datasets: [
                        {
                            //  label: this.graphLegend,
                            label: '',
                            borderColor: '#94EDCE',
                            data: this.$store.state.graphData
                        }
                    ]
                },
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

                legend: {
                    display: false
                },

                responsive: true,
                maintainAspectRatio: false

               },
              week: false, //enable/disable de week graph ctrl when weekly transactions is clicked
              currentYear: this.$moment().year(),
              currentMonth: this.$moment().format('MMMM'),
              endWeek: this.$moment(this.currentMonth, 'MMMM').endOf('week').add(1, 'day').format('DD').toString(),

              prevMonth: null,//prev btn tooltip content
              nextMonth: null,//next btn tooltip content
              graphLegend: null,//graph info label
              currentMonthNumber: this.$moment().subtract(1, 'months').format('M'),
              monthNumber: 0,
              realTimeMonth: this.$moment().format('MMMM').toString(), //displayed month when next/pren are clicked
              realtimeWeek: '',
              monthsArr: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dencember'],
              daysArr: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',],
              nextStyle: {color: '#E0E0E0', cursor: 'default'}, // month next btn dunamic styles
              prevStyle: {color: '#369555', cursor: 'pointer'}, // month previous btn dunamic styles
              weekPrevStyle: {color: '#E0E0E0', cursor: 'default'}, // week previous btn dunamic styles
              weekNextStyle: {color: '#369555', cursor: 'pointer'}, // week next btn dunamic styles
              yearArr: ['',[],[],[],[],[],[],[],[],[],[],[],[]],
              monthsWeeksArr: ['',[],[],[],[],[],[],[],[],[],[],[],[]],
              weekDaysNameArr: ['',[],[],[],[],[],[],[],[],[],[],[],[]],
              weekDate: null, //use in weektransaction() to get transactions of the sended week
              lastWeek: null,
              startWeek: null,
              daysArrIndex: 0, //use in nextweek()
              pdfOptions: {
                orientation: 'landscape',
                unit: 'in',
                format: [4, 2]
              },
              pdfData: [],
              yearArrIndex: this.$store.state.years[0].indexOf(this.$moment().year().toString()),
              yearLabel: this.$moment().year(),
              transactiosData_isArrayLen: true // length of de compensations data array

            }
        },

        created() {

            this.prevMonth = this.$moment().subtract(1, 'months').format('MMMM')
            this.nextMonth = this.currentMonth    
            this.generatePDFdata()
            // this.exportPDF()
            if(this.$store.state.userData.userdata.is_superuser){
                this.mechantsYearTransactions(this.$moment().year())
            }else{
                this.yearTransactions(this.$moment().year())
            }  

        },

        mounted() {
            
            let self = this
            let nextyear = this.$moment(self.currentYear, 'YYYY').add(12, 'months').format('YYYY')
            //  this.$store.dispatch('commitGetUserData');

        },

        methods: {

            exportPDF(){

                let pdfName = 'transaction'; 
                let doc = new jsPDF();

                let months = this.$moment().format('M')
                let self = this
                let columns = []
                let rows = []

                for (let m = 1; m <= months; m++) {
                    columns.push(self.monthsArr[m-1])
                    rows.push(self.yearArr[m])
                }

                // let pdfTemplate ="<h2>C020k Year Transactions Data</h2> <table> <tr>

                //       for (let c = 0; c < columns.length; c++) {
                //           "<th>"+columns[index]+"</th>"
                //       }

                //     "</tr>"
                    
                //      for (let m = 0; m < months; m++) {
                //           "<tr>"+
                //             for (let r = 0; r < rows.length; r++) {
                //                 "<td>"+
                //                     rows[m][r]
                //                 "</td>"
                //             }
                //           "</tr>"
                //       }

                //   "</table>"

                let pdfTemplate = `
                  <h2 style="text-align:center;margin-bottom:20px;color:#08BA4D">C020k Year Transactions Data</h2>
                  <table style="border-collapse: collapse;width: 100%;height: auto;margin: auto;position:relative;right:100px;"> 
                    <tr>
                      <th style="border: 1px solid #dddddd;text-align: left;padding:8px;font-weight:bold;">January</th>
                      <th style="border: 1px solid #dddddd;text-align: left;padding:8px;font-weight:bold;">February</th>
                      <th style="border: 1px solid #dddddd;text-align: left;padding:8px;font-weight:bold;">March</th>
                      <th style="border: 1px solid #dddddd;text-align: left;padding:8px;font-weight:bold;">April</th>
                      <th style="border: 1px solid #dddddd;text-align: left;padding:8px;font-weight:bold;">May</th>
                    </tr>
                    <tr>
                     <td style="border: 1px solid #dddddd;text-align: left;padding:80px">${this.pdfData[0]}</td>
                     <td style="border: 1px solid #dddddd;text-align: left;padding:80px">${this.pdfData[1]}</td>
                     <td style="border: 1px solid #dddddd;text-align: left;padding:80px">${this.pdfData[2]}</td>
                     <td style="border: 1px solid #dddddd;text-align: left;padding:80px">${this.pdfData[3]}</td>
                     <td style="border: 1px solid #dddddd;text-align: left;padding:80px">${this.pdfData[4]}</td>
                    </tr>
                  </table>
                `
                
                // doc.text(pdfTemplate, 10, 10);
                doc.fromHTML(pdfTemplate, 50, 30);

                // doc.autoTable(columns, rows);     
                doc.save(pdfName + '.pdf');

                console.log(this.pdfData);
                console.log(columns); 

            },

            updateGraphData() {

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

            // parseTransactionsData(transactions){
                
            //     let self = this
            //     let currentMonth = this.$moment().format('M')
            //     let transDataArr = []
            //     let monthWeekArr = [] //contains weeks of month
            //     let i //month for loop index
            //     let w //weeks for loop index
            //     let d //days for loop index
            //     let parseMonth
            //     let parseWeek
            //     let parseDay
            //     let dayOfMonth
            //     let weekOfMonth
            //     for(i = 1; i <= currentMonth; i++){
                    
            //         if(i < 10){
            //             parseMonth = `${'0'+i}`
            //         }else if(i > 9){
            //             parseMonth = i
            //         }
                    
                    
            //         transactions.filter((transaction) => {
            //             if(transaction.month.search(parseMonth) != -1){
            //                 self.yearArr[i].push(transaction.orders)
            //             }
            //         })

            //         dayOfMonth = this.$moment(currentMonth, 'M').daysInMonth()
            //         weekOfMonth = Math.ceil(self.dayOfMonth/7)

            //         // generate number of week base on the month
            //         for (w = 1; w <= weekOfMonth; w++) {

            //             let dateWeek = `${this.monthsArr[i-1]} - ${w}`

            //              if(w < 10){
            //                 parseWeek = `${'0'+w}`
            //             }else if(w > 9){
            //                 parseWeek = w
            //             }
                   
            //         }

            //         // don't work perfectly but is a beter version of the weekTransactions()
            //         for (let days = 1; days <= dayOfMonth; days++) {

            //             if(days < 10){
            //                 parseDay = `${'0'+days}`
            //             }else if(days > 9){
            //                 parseDay = days
            //             }
            //             let daysName = this.$moment(`${self.currentYear}-${parseMonth}-${parseDay}`).day()
            //             this.weekDaysNameArr[i].push(self.daysArr[daysName])
                        
            //             // check if the number od the month days <= the total transactions
            //             if(days <= transactions.length){
            //                 // console.log(transactions[days-1].month.search('05')+'=>'+transactions[days-1].week.search('05'));
            //                 if(transactions[days-1].week.search(parseDay) == 0){
            //                     // weekDaysArr[w].push(transaction.orders)
            //                     this.monthsWeeksArr[i].push(transactions[days-1].date) 
            //                 }
            //                 else{
            //                     this.monthsWeeksArr[i].push(0)       
            //                 }
            //             }else{

            //             }

            //         }
                    
            //         let uniqYearArr = this._.uniq(this.yearArr[i])
            //         // this.pdfData.push(this._.floor(this._.sum(uniqYearArr), 2))
            //         this.pdfData.push(this._.uniq(uniqYearArr))
            //         transDataArr.push(this._.floor(this._.sum(uniqYearArr), 2))

            //     }

            //     // console.log(this.monthsWeeksArr);  
            //     // console.log(this._.chunk(this.weekDaysNameArr[5],7))
            //     console.log(transDataArr);
            //     console.log(this.pdfData)
                
            //     return this._.uniq(transDataArr)

            // },

            parseTransactionsWeekData(transactions){

                let weekArr = []
                let weekArrSum = []
                // this.lastWeek = this.$moment(this.currentMonth, 'MMMM').endOf('week').add(1, 'day').format('DD')
                let parseDay
                let d = this.startWeek

                if(d == null){
                    d = 1
                }else{
                    d = this.startWeek
                }

                for (d; d <= this.lastWeek; d++) {
                    
                    if(d < 10){
                        parseDay = `${'0'+d}`
                    }else if(d > 9){
                        parseDay = d
                    }
 

                    transactions.filter((transaction) =>{
                        if(transaction.day.search(parseDay) != -1){
                            weekArr.push(transaction.orders)
                        }else{
                            weekArr.push(0)
                        }
                    })

                }
                //make a group array of the data in weekArr base on the transactionarr length
                let chunkedWeekArr = this._.chunk(weekArr,transactions.length)
                console.log(this._.pull(chunkedWeekArr, 0))
                // sum the chunkedWeekArr group array
                for (let index = 0; index < chunkedWeekArr.length; index++) {
                    if(this.transactiosData_isArrayLen){
                        let pulledchunkedWeekArr = this._.pull(chunkedWeekArr[index], 0) //remove all 0 from the array, to get the exact length
                        weekArrSum.push(pulledchunkedWeekArr.length)
                    }else{
                        weekArrSum.push(this._.sum(chunkedWeekArr[index]))
                    }
                    
                }

                let daysInWeek = 7
                let dayLeft = daysInWeek - this.lastWeek // number of days if the month is not begin on monday
                if(dayLeft > 0){
                    for (let dl = 1; dl <= dayLeft; dl++) {
                         weekArrSum.unshift(null) // add null to the begin of the array   
                    }
                }

                // console.log(weekArr);    
                // console.log(weekArrSum);  
                // console.log('start week', this.startWeek);
                // console.log('end week', this.lastWeek);
                
                return weekArrSum

            },

            // change the format of the transactions data(sum of compensation in euro / length of the data array)
            transactionsDataFormat(){

                if(event.target.value == 'transactions'){
                    this.transactiosData_isArrayLen = true
                }else if(event.target.value == 'compensations'){
                    this.transactiosData_isArrayLen = false
                }else{
                    this.transactiosData_isArrayLen = true
                }

                if(this.$store.state.userData.userdata.is_superuser && !this.week){
                    this.mechantsYearTransactions(this.yearLabel)
                }else if(!this.$store.state.userData.userdata.is_superuser && !this.week){
                    this.yearTransactions(this.yearLabel)
                }
                
                //if weekly transaction is actif
                if(this.week){
                    this.weekTransactions()
                    this.weekGraphCtrl()
                }
                
            },

            yearTransactions(year) {
            //   let chart = document.getElementById('line-chart')
                this.week = false //disable the week ctrl btn(next, prev)
                this.graphLegend = `${this.currentMonth} Transaction(s)` 
                let self = this
                let merchantTransactionsArr = []
                this.$axios.get(`${this.$store.state.SITE_HOST}/user/compnensationsData/`, {
                    params: {
                        // year: self.$moment().year(),
                        year: year,
                        merchantId: self.$store.state.userData.profileData.merchantId
                    },
                    headers: {
                       "X-CSRFToken": `${this.$store.state.userToken}`,
                        Authorization: `token ${window.localStorage.getItem('userToken')}` 
                    }
                }).then(response => {

                    // let yearGraphData = self.parseTransactionsData(response.data)
                    response.data.forEach((transaction) => {
                        if(self.transactiosData_isArrayLen){
                            merchantTransactionsArr.push(transaction.length)
                        }else{
                            merchantTransactionsArr.push(this._.floor(this._.sum(transaction), 2))
                        }
                        
                    })
                    self.$store.commit('yearGraphData', merchantTransactionsArr)
                    self.updateGraphData()

                }).catch(error => {
                    console.log(error)
                })

            },

            // get al merchants year transactions(for super user)
            mechantsYearTransactions(year){
                
                let allTransactionsArr = []
                let self = this
                this.$axios.get(`${this.$store.state.SITE_HOST}/user/allTransactions/`, {
                    params:{
                        year: year
                    },
                    headers: {
                       "X-CSRFToken": `${this.$store.state.userToken}`,
                        Authorization: `token ${window.localStorage.getItem('userToken')}` 
                    }

                }).then(response => {

                    response.data.forEach((transaction) => {

                        if(self.transactiosData_isArrayLen){
                            allTransactionsArr.push(transaction.length)
                        }else{
                            allTransactionsArr.push(this._.floor(this._.sum(transaction), 2))
                        }

                    })
                    self.$store.commit('yearGraphData', allTransactionsArr)
                    self.updateGraphData()

                }).catch(error => {

                    console.log(error);

                })
                
            },

            weekTransactionRequest(lastweek, weekdate, beginweek){
                let self = this
                this.$axios.get(`${this.$store.state.SITE_HOST}/user/weeklyTransaction/`, {
                    params: {
                        yearMonth: weekdate,
                        endWeek: lastweek,
                        startWeek: beginweek,
                        merchantId: self.$store.state.userData.profileData.merchantId
                    },
                    headers: {
                       "X-CSRFToken": `${self.$store.state.userToken}`,
                        Authorization: `token ${window.localStorage.getItem('userToken')}` 
                    }
                }).then(response => {

                    let weekGraphData = self.parseTransactionsWeekData(response.data)
                    self.$store.commit('weekGraphData', weekGraphData)
                    self.updateGraphData()

                }).catch(error => {
                    console.log(error)
                })

            },

            weekTransactions() {

                this.week = true
                // this.graphLegend = `${this.currentMonth} week-1 Transaction(s)`
                let self = this
                this.daysArrIndex = 0
                this.startWeek = '01'
                this.lastWeek = this.$moment(this.realTimeMonth, 'MMMM').endOf('week').add(1, 'day').format('DD')
                this.weekDate = `${this.yearLabel}-${this.$moment().format('MM')}`

                this.realtimeWeek = this.startWeek+'-'+this.lastWeek
                this.graphLegend = `${this.realTimeMonth} ${this.realtimeWeek} Transaction(s)`

                this.weekPrevStyle.color = '#E0E0E0'
                this.weekPrevStyle.cursor = 'default'

                // next/previous month tooltip content
                // this.prevMonth = this.$moment().subtract(1, 'months').format('MMMM')
                // this.nextMonth = this.currentMonth

                this.weekTransactionRequest(this.lastWeek, this.weekDate, '01')

            },
            
            weekGraphCtrl(){

               let daysOfMonth = this.$moment(this.realTimeMonth, 'MMMM').daysInMonth()
               let weekOfMonth = Math.ceil(daysOfMonth/7)
               let lastDay = parseInt(this.$moment(this.realTimeMonth, 'MMMM').endOf('week').add(1, 'day').format('D').toString())
               let daysArr = []
               
               for (let d = 1; d <= daysOfMonth; d++) {
                   daysArr.push(d)
               }

               let daysInWeek = 7
               let dayLeft = daysInWeek - lastDay // number of days if the month is not begin on monday
               if(dayLeft > 0){
                    for (let dl = 1; dl <= dayLeft; dl++) {
                        daysArr.unshift(null) // add null to the begin of the array   
                    }
                }

               let daysChunkedArr = this._.chunk(daysArr,7)
               
               if(this.daysArrIndex < weekOfMonth){

                   this.lastWeek = this._.last(daysChunkedArr[this.daysArrIndex])
                   let startweek
                   this.startWeek = daysChunkedArr[this.daysArrIndex][0]

                   this.realtimeWeek = this.startWeek+'-'+this.lastWeek
                   this.graphLegend = `${this.realTimeMonth} ${this.realtimeWeek} Transaction(s)`

                   if(daysChunkedArr[this.daysArrIndex][0] <= 10){
                       startweek =`0${daysChunkedArr[this.daysArrIndex][0]}`
                   }else{
                       startweek = daysChunkedArr[this.daysArrIndex][0]
                   }

                   if(startweek == '0null'){
                       startweek = '01'
                   }

                   this.weekDate = `${this.yearLabel}-${this.$moment(this.realTimeMonth, 'MMMM').format('MM')}`
                   this.weekTransactionRequest(this.lastWeek , this.weekDate, startweek)
                   this.weekPrevStyle.color = '#369555'
                   this.weekPrevStyle.cursor = 'pointer'
                   console.log(daysChunkedArr);
                   
                //    console.log(this.lastWeek,this.weekDate, startweek);
               }else{
                    this.weekNextStyle.color = '#E0E0E0'
                    this.weekNextStyle.cursor = 'default'
                   console.log('finito');       
               }

            },

            nextYear(){

                let self = this
                if(this.yearArrIndex < this.$store.state.years[0].length-1){
                    this.nextStyle.color = '#369555'
                    this.nextStyle.cursor = 'pointer'
                    this.prevStyle.color = '#369555'
                    this.prevStyle.cursor = 'pointer'
                    this.yearArrIndex++

                    if(this.$store.state.userData.userdata.is_superuser){
                        this.mechantsYearTransactions(this.$store.state.years[0][this.yearArrIndex])
                    }else{
                        let nextyear = self.$moment(this.$store.state.years[0][this.yearArrIndex], 'YYYY').add(12, 'months').format('YYYY')
                        self.yearTransactions(this.$store.state.years[0][this.yearArrIndex])
                    }
                    
                    this.yearLabel = this.$store.state.years[0][this.yearArrIndex]
                }else if(this.yearArrIndex > this.$store.state.years[0].length){
                    this.yearArrIndex = this.$store.state.years[0].length
                }else{
                    this.nextStyle.color = '#E0E0E0'
                    this.nextStyle.cursor = 'default'
                }

            },

            prevYear(){

                let self = this
                if(this.yearArrIndex > 0){
                    this.prevStyle.color = '#369555'
                    this.prevStyle.cursor = 'pointer'
                    this.nextStyle.color = '#369555'
                    this.nextStyle.cursor = 'pointer'
                    this.yearArrIndex--

                    if(this.$store.state.userData.userdata.is_superuser){
                        this.mechantsYearTransactions(this.$store.state.years[0][this.yearArrIndex])
                    }else{
                        let nextyear = self.$moment(this.$store.state.years[0][this.yearArrIndex], 'YYYY').add(12, 'months').format('YYYY')
                        self.yearTransactions(this.$store.state.years[0][this.yearArrIndex])
                    }

                    this.yearLabel = this.$store.state.years[0][this.yearArrIndex]
                }else if(this.yearArrIndex == 0){
                    this.prevStyle.color = '#E0E0E0'
                    this.prevStyle.cursor = 'default'
                    this.yearArrIndex = 0
                }

            },

            prevWeek(){

                if(this.daysArrIndex > 0){
                    this.daysArrIndex--
                    this.weekGraphCtrl()

                    this.weekNextStyle.color = '#369555'
                    this.weekNextStyle.cursor = 'pointer'
                    this.weekPrevStyle.color = '#369555'
                    this.weekPrevStyle.cursor = 'pointer'
                }else{
                    this.weekPrevStyle.color = '#E0E0E0'
                    this.weekPrevStyle.cursor = 'default'
                }

            },

            nextWeek(){
    
               this.daysArrIndex++
               this.weekGraphCtrl()
              
            },

            nextMonthCtrl()
            {

            //    if(this.monthNumber > 0 && this.realTimeMonth != this.currentMonth){
               if(this.realTimeMonth != this.currentMonth){
   
                  let nextmonth = this.$moment(this.realTimeMonth,'MMMM').add(2, 'months').format('MMMM')
                  this.realTimeMonth = this.$moment(this.realTimeMonth,'MMMM').add(1, 'months').format('MMMM')

                  this.nextMonth = nextmonth
                  this.prevMonth = this.$moment(this.realTimeMonth,'MMMM').subtract(1, 'months').format('MMMM')

                  this.weekTransactions()

                  this.nextStyle.color = '#369555'
                  this.nextStyle.cursor = 'pointer'
                  this.prevStyle.color = '#369555'
                  this.prevStyle.cursor = 'pointer'

               }else if(this.currentMonth == this.realTimeMonth){
                   
                   this.nextMonth = 'May'
                   this.nextStyle.color = '#E0E0E0'
                   this.nextStyle.cursor = 'default'
               }
               

            },

            prevMonthCtrl() {
              
              //month displayed when previous month btn clicked
              let prevCurrentMonth = this.$moment(this.realTimeMonth,'MMMM').subtract(1, 'months').format('MMMM');
                
              if(this.monthsArr.indexOf(this.realTimeMonth) >= 2){

                  let prevmonth = this.$moment(this.realTimeMonth,'MMMM').subtract(2, 'months').format('MMMM')
                  this.realTimeMonth = this.$moment(this.realTimeMonth,'MMMM').subtract(1, 'months').format('MMMM')//update realTimeMonth data

                  this.nextStyle.color = '#369555'
                  this.nextStyle.cursor = 'pointer'
           
                  this.prevMonth = prevmonth //update previous tooltip content
                  this.nextMonth = this.$moment(this.realTimeMonth,'MMMM').add(1, 'months').format('MMMM')//update next tooltip content

                  this.weekTransactions()

              }else if(this.monthsArr.indexOf(this.realTimeMonth) == 1){
                  this.prevStyle.color = '#E0E0E0'
                  this.prevStyle.cursor = 'default'
                  this.prevMonth = 'January'
                  this.realTimeMonth = 'January'
                  this.weekTransactions()
                  this.nextMonth = 'February'             
              }
              

            },

            generatePDFdata(){

                let pdf = []
                let months = this.$moment().format('M')
                let daysOfMonth
                let weekOfMonth
                let chunkedPDF

                for (let m = 1; m <= months; m++) {
                    
                    pdf.push([])
                    daysOfMonth = this.$moment(m, 'M').daysInMonth()
                    weekOfMonth = Math.ceil(daysOfMonth/7)

                    for (let w = 1; w <= daysOfMonth; w++) {
                        pdf[m-1].push(w)
                    }

                    chunkedPDF = this._.chunk(pdf[m],7)

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
        margin-bottom: 0 !important;
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
        /* text-decoration: underline; */
        font-size: 16px;
        width: 250px;
        cursor: pointer;
        color: grey;
    }

    .graph-tab-name:hover{
        color: black;
        text-decoration: underline;
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
        align-items: flex-start;
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