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

    merchantCompasations(merchantId, year) {

       let xhr = this.xhr()
       let host = 'http://127.0.0.1:8000'
       xhr.open('GET', `${host}/user/compasationsData/?id=${merchantId}&year=${year}`, true)
       xhr.withCredentials = true;
       xhr.onreadystatechange = function(){
           if (this.readyState == 4 && this.status == 200){
             console.log(xhr.responseText);
             
           }
       }
       xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
       xhr.send()

    }

    widgetGenerator (response) {

        let widget = `
          <div class="widget-container">

            <h3>Total gecompenseerde co2 in Jaar ${response.year}</h3>

          </div>`

        let widgetContainer = document.querySelector('.widget-container')

        response.transactions.forEach(data => {
            let widgetContent = `
            <div class="">

                <h1>${data.totalOrder}</h1>
                <div class="">
                    <h3>${data.month}</h3>
                    <p>x 50kg co2 gecompenseerd</p>
                </div>

            </div>`
            widgetContainer.appendChild(widgetContent)
        });
        document.body.appendChild(widget)

    }

}
export default new Co2okWidget()

