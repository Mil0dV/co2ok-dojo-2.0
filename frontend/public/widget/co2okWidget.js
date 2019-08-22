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

    merchantCompensations: function (widgetContainer, merchantId) {
        let xhr = Co2okWidget.xhr()
        let host = 'http://127.0.0.1:8000'
        //  /*'http://test.co2ok.ninja'*/
        xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
        //    xhr.withCredentials = true;
           xhr.onreadystatechange = function(){
               if (this.readyState == 4 && this.status == 200){
                // For the near future: detect large numbers, then divide and adjust kilo to ton
                // let totalTransactionData = Math.round(xhr.responseText / 1000)
                let totalTransactionData = xhr.responseText
                Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData)
                //    console.log(totalTransactionData)
               }
           }
        //   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
           xhr.send()
    },

    widgetGenerator: function (widgetContainer, totalCompensatedData) {


        // HT: FDD800
        // CO2ok nu: 11D073
        // Mijnkraamshop: D0C918

          let widgets = `<div class="widgets" style="width: 100%;height: auto;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 15px;">
                    <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:180px;height:auto;margin-top: -5px;">
                        <p style="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 12px;margin-left: 20px;">Shop klimaatneutraal   </p>
                        <img src="/static/info-MKS.svg" alt="" class="compensate-icon" style = "width: 17px;height: 17px; padding: 2px;">
                        <!--<img src="/static/logo.png" alt="" class="compensate-icon" style = "width: 25px">-->
                    </div>
                </div>
                <div class="co2-widget" style ="width: 100%;height: auto;display: flex;flex-direction: row;justify-content: flex-start;align-items: flex-start; margin-left: 15px">
                    <p style ="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; text-align: right;font-size: 24px; font-weight: bold;color: #D0C918; line-height: 23px"> ${totalCompensatedData} </p>
                    <!-- <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 5px;">
                        <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-top: -5px;">
                            <img src="/static/cloud.png" alt="" class="compensate-icon" style = "width: 16px;height: 16px;">
                            <p style="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 15px;font-weight:400;margin-left: 0px;">CO₂-Reductie</p> -->
                        </div>
                        <p style="color: #464646; font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 14px;margin-top: -5px;text-align:left;">kilo CO₂ voorkomen</p>
                    </div>
                    
                </div>

                </div>
                <div class = "wood-widget" style = "width: 100%;height: auto;display: flex;flex-direction: row;justify-content: flex-start;align-items: flex-start;">
                    <h1 style = "text-align: right;font-size: 50px;color: green;">256</h1>
                    <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 15px;">
                        
                        <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-top: -5px;">
                            <img src = "" alt = "" class ="compensate-icon" style = "width: 20px;height: 20px;border: 1px solid red;">
                            <p style="font-size: 25px;font-weight:bold;margin-left: 10px;">HOUT</p>
                        </div>
                        <p style="font-size: 14px;margin-top: -5px;text-align:left;">x duizend kg hout ( = 723 bomen) bespaard</p>
                    </div>
                </div>`

        let widgetcontainer = document.getElementById(widgetContainer)
        widgetcontainer.innerHTML = widgets
    }

}
// export default new Co2okWidget()

