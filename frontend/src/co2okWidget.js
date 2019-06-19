class Co2okWidget {

    constructor() {

    //   this.host = 'http://127.0.0.1:8000'
    //   this.merchantId = merchantId
    //   this.year = year
    //   this.merchantCompasations()

    }

    xhr() {

        let xhr;

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        return xhr;

    }

    sumArray(total, num){

        return total + num;
    }

    // customize version of Math floor()
    customizeFloor(elem, num){
       let roundedNumber
       let stringfyElem = elem.toString()
       let commaIndex = stringfyElem.indexOf('.') // get the position of the comma
       //check if the number is decimal
       if (commaIndex != -1){
           roundedNumber = stringfyElem.substr(0, commaIndex + (num+1))
       }else{
           console.log('not a decimal number', stringfyElem)
       }
       return roundedNumber
    }

    parseTransactionsData(transactions) {

        // let currentMonth = this.$moment().format('M')
        let currentMonth = new Date().getMonth()
        let yearArr = ['',[],[],[],[],[],[],[],[],[],[],[],[]]
        let transDataArr = []
        let i
        let parseMonth
        for (i = 1; i <= currentMonth+1; i++) {

            if (i < 10) {
                parseMonth = `${'0'+i}`
            } else if (i > 9) {
                parseMonth = i
            }

            transactions.filter((transaction) => {
                if (transaction.month.search(parseMonth) != -1) {
                    yearArr[i].push(transaction.orders)
                }
            })
     
            transDataArr.push(Number(yearArr[i].reduce(this.sumArray).toFixed(2)))
        }
        
        return transDataArr

    }

    merchantCompasations(merchantId, year) {

       let xhr = this.xhr()
       let host = 'http://test-frontend.co2ok.ninja'
       let self = this

       xhr.open('GET', `${host}/user/compnensationsData/?merchantId=${merchantId}&year=${year}`, true)
       xhr.withCredentials = true;
       xhr.onreadystatechange = function(){
           if (this.readyState == 4 && this.status == 200){
               let yearTransData = self.parseTransactionsData(JSON.parse(xhr.responseText))
               self.widgetGenerator(yearTransData)
               console.log(yearTransData);
             
           }
       }
       xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
       xhr.send()

    }

    widgetGenerator (response) {

        let currentYear = new Date().getFullYear()
        let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dencember']
        let widget = `
          <div class="widget-container" style="width: 500px; height: 600px; display: flex; flex-direction:column;justify-content: center;align-items:center;border:1px solid red;">

            <h3>Total gecompenseerde co2 in Jaar ${currentYear}</h3>

          </div>`

        let widgetContainer = document.querySelector('.widget-container')

        response.forEach((data, i) => {
            let widgetContent = `
            <div class="" style="width: 100%; height: auto; display: flex; flex-direction:row;justify-content: flex-start;align-items:center;border:1px solid green;margin-bottom: 30px;">

                <h1 style="text-align: center;border: 1px solid black;border-radius:100%;color:white;padding:10px;">${data}</h1>
                <div class="" style="width: 100%; height: auto; display: flex; flex-direction:column;justify-content: center;align-items:center;">
                    <h3>${monthsArr[i]}</h3>
                    <p>x 50kg co2 gecompenseerd</p>
                </div>

            </div>`
            widgetContainer.appendChild(widgetContent)
        });
        document.body.appendChild(widget)

    }

}
export default new Co2okWidget()

