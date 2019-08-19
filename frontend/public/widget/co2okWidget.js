let Co2okWidget = {

    xhr: function() {

        let xhr;

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        return xhr;

    },

    sumArray: function(total, num){

        return total + num;
    },

    // customize version of Math floor()
    customizeFloor: function(elem, num){
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
    },

    parseTransactionsData: function(transactions) {

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

    },

    merchantCompensations: function ( widgetContainer) {
        let xhr = Co2okWidget.xhr()
        let host = 'http://localhost:8000'  
        let merchantId = 'TWVyY2hhbnQ6MmRhN2E5MDItYWE2Zi00YmFiLWI5ODgtZWZmNTc4NTVjYTZh'
        //  /*'http://test.co2ok.ninja'*/
        xhr.open('GET', `${host}/user/totoCompensationData/?merchantId=${merchantId}`, true)
        //    xhr.withCredentials = true;
           xhr.onreadystatechange = function(){
               if (this.readyState == 4 && this.status == 200){
                //    let yearTransData = self.parseTransactionsData(JSON.parse(xhr.responseText))
                //    console.log(yearTransData)
                // console.log(xhr.responseText)
                let totoTransData = xhr.responseText
                   console.log(totoTransData)
               }
           }
        // //    xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
           xhr.send()
        Co2okWidget.widgetGenerator(widgetContainer)
    },

    widgetGenerator: function(widgetContainer) {

        // let currentYear = new Date().getFullYear()
        // let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dencember']
        // let widget = `
        //   <div class="widget-container" style="width: 500px; height: 600px; display: flex; flex-direction:column;justify-content: center;align-items:center;border:1px solid red;">

        //     <h3>Total gecompenseerde co2 in Jaar ${currentYear}</h3>

        //   </div>`

        // HT: FDD800
        // CO2ok nu: 11D073

          let widgets = `<div class="widgets" style="width: 100%;height: auto;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 15px;">
                    <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:180px;height:auto;margin-top: -5px;">
                        <p style="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 12px;margin-left: 20px;">Shop klimaatneutraal   </p>
                        <img src="/static/info-HT.svg" alt="" class="compensate-icon" style = "width: 17px;height: 17px; padding: 2px;">
                        <!--<img src="/static/logo.png" alt="" class="compensate-icon" style = "width: 25px">-->
                    </div>
                </div>
                <div class="co2-widget" style ="width: 100%;height: auto;display: flex;flex-direction: row;justify-content: flex-start;align-items: flex-start; margin-left: 15px">
                    <p style ="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; text-align: right;font-size: 24px; font-weight: bold;color: #FDD800; line-height: 23px"> 5811 </p>
                    <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 5px;">
                        <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-top: -5px;">
                            <img src="/static/cloud.png" alt="" class="compensate-icon" style = "width: 16px;height: 16px;">
                            <p style="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 14.5px;font-weight:400;margin-left: 0px;">CO₂-Reductie</p>
                        </div>
                        <p style="color: #464646; font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 11px;margin-top: -5px;text-align:left;">kilo CO₂ voorkomen</p>
                    </div>
                    
                </div>

                <!-- <div class = "wood-widget" style = "width: 100%;height: auto;display: flex;flex-direction: row;justify-content: flex-start;align-items: flex-start;">
                    <h1 style = "text-align: right;font-size: 50px;color: green;">256</h1>
                    <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 15px;">
                        
                        <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-top: -5px;">
                            <img src = "" alt = "" class ="compensate-icon" style = "width: 20px;height: 20px;border: 1px solid red;">
                            <p style="font-size: 25px;font-weight:bold;margin-left: 10px;">HOUT</p>
                        </div>
                        <p style="font-size: 14px;margin-top: -5px;text-align:left;">x duizend kg hout ( = 723 bomen) bespaard</p>
                    </div>
                </div> -->
            </div>`

        // document.getElementById('widgetContainer').appendChild(widgets)
        let widgetcontainer = document.getElementById(widgetContainer)
        widgetcontainer.innerHTML = widgets
        // document.body.innerHTML = widgets

        // response.forEach((data, i) => {
        //     let widgetContent = `
        //     <div class="" style="width: 100%; height: auto; display: flex; flex-direction:row;justify-content: flex-start;align-items:center;border:1px solid green;margin-bottom: 30px;">

        //         <h1 style="text-align: center;border: 1px solid black;border-radius:100%;color:white;padding:10px;">${data}</h1>
        //         <div class="" style="width: 100%; height: auto; display: flex; flex-direction:column;justify-content: center;align-items:center;">
        //             <h3>${monthsArr[i]}</h3>
        //             <p>x 50kg co2 gecompenseerd</p>
        //         </div>

        //     </div>`
        //     widgetContainer.appendChild(widgetContent)
        // });
        

    }

}
// export default new Co2okWidget()

