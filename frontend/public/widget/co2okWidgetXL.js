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
  
    merchantCompensations: function (widgetContainer, merchantId, widgetSize, widgetColor) {
  
        if (document.cookie.match(/^(.*;)?\s*co2ok_hide_button\s*=\s*[^;]+(.*)?$/)){
          console.log('hammer time!')
          return
        }
  
        let xhr = Co2okWidget.xhr()
        // let host = 'http://127.0.0.1:8000'
        let host = 'https://app.co2ok.eco'
        xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
        //    xhr.withCredentials = true;
           xhr.onreadystatechange = function(){
               if (this.readyState == 4 && this.status == 200){
                // For the near future: detect large numbers, then divide and adjust kilo to ton
                // let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
                let totalTransactionData = xhr.responseText
                // let totalTransactionData = 491
  
                   console.log(totalTransactionData)
                   Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor)
  
                // ok deze else werkt dus nog niet zoals bedoeld
            } else {
                let totalTransactionData = 491
            }
        }
        xhr.send()
        // let totalTransactionData = 491
        //   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
    },
  
    widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor) {
  
        // HT: FDD800
        // CO2ok nu: 11D073
        // Mijnkraamshop: D0C918
        let color = "#D0C918"
        // Het zou een idee zijn om deze te verduidelijken tov de host var hierboven
        // let  SITE_HOST =  'https://co2ok.eco'
        let SITE_HOST = 'http://localhost:8080'
  
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark.css`)
        document.getElementsByTagName("head")[0].appendChild(fileref)
        

                if (totalCompensatedData <500) {
                  var compensatiewidget  = 101.8;
                  var compensatietekst = `De bij co2ok aangesloten webshops hebben samen <strong> ${compensatiewidget .toFixed(1)} </strong>ton co2-uitstoot voorkomen <br><br>= <strong>${compensatiewidget * 5000 .toFixed(0)} </strong>km vliegen`;
                }
                else {
                  var compensatiewidget  = totalCompensatedData / 1000;
                  var compensatietekst = `Deze webshop heeft <strong>${compensatiewidget .toFixed(1)} </strong>ton co2-uitstoot voorkomen <br><br>= <strong>${compensatiewidget * 5000 .toFixed(0)} </strong>km vliegen`
                }
                // Heeft de webshop al voldoende gecompenseerd om een substantieel getal te geven? Zo niet, pak volledige compensatie van webshops aangesloten bij co2ok

                if (widgetSize == "L") {
                    var fileref=document.createElement("link")
                    fileref.setAttribute("rel", "stylesheet")
                    fileref.setAttribute("type", "text/css")
                    fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetL.css`)
                    document.getElementsByTagName("head")[0].appendChild(fileref)
                 }
                 else {
                    var fileref=document.createElement("link")
                    fileref.setAttribute("rel", "stylesheet")
                    fileref.setAttribute("type", "text/css")
                    fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetXL.css`)
                    document.getElementsByTagName("head")[0].appendChild(fileref)

                // Kleine of grote widget

                if (widgetColor == "gray") {
                   var colorSuffix = "-gray";
                   var fileref=document.createElement("link")
                   fileref.setAttribute("rel", "stylesheet")
                   fileref.setAttribute("type", "text/css")
                   fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetXL-gray.css`)
                   document.getElementsByTagName("head")[0].appendChild(fileref)
                }
                else {
                    var colorSuffix = "";
                }
                // Wordt de widget in grijs of groen weergegeven


                }
                let widgetimg = `<img src = "${SITE_HOST}/widget/widgetmark-grayscale.png" width=101px>`
                let widgetmark = `
            
                <div class="large-widget">
                    <span class ="large-widget-right-green"></span>
                    <svg id= "half-circle" width="3500" height="4000">
                    <circle cx="95" cy="65" r="62" fill="white" />
                    </svg>
                    <p id="large-widget-text">Deze webshop heeft <span style="color:#606468;;font-size:18px; font-weight: bold;." <span>${(compensatiewidget.toFixed(1))} </span> uitstoot voorkomen</p>
                    <p id="large-widget-xvliegen">= ${compensatiewidget * 5000 .toFixed(0)}  <br>vliegen</p>
                    <img id="co2ok-logo" src= "${SITE_HOST}/static/logo${colorSuffix}.png">
                    <img id="info-button-widget" src= "${SITE_HOST}/static/info${colorSuffix}.svg">
                    <img id="large-widget-airplane" src= "${SITE_HOST}/widget/large-wiget-airplane.png">
              </div>
              
              `
                // console.log(widgetimg)
  
        let widgetcontainer = document.getElementById(widgetContainer)
        // let widgetcontainer = document.getElementsByClassName('whb-empty-column')[0]
        widgetcontainer.innerHTML = widgetmark
        this.RegisterWidgetInfoBox();
        // this.ShowWidgetInfoBox();
    },
  
  
    // Returns true if we are running on a mobile device.
    isMobile: function() {
        // Check the user agent. If one of the Mobile models, return true.
        // TODO: in theorie zou dit voldoende moeten zijn, anders moet t toch met bovenstaande (of de package waar ie ook in zit).
        // alternatief: https://stackoverflow.com/a/20293441
        return !!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
        },
        // Returns true if jQuery can find an element that matches the given selector string.
        isExistingjQueryElement: function(selector) {
            return !!jQuery(selector).length;
    },
    
  
    
    placeWidgetInfoBox : function() {
        // console.log('Platz? Lebensraum!')
        var widgetInfoButton = jQuery(".co2ok_widget_info");
        var widgetInfoBox = jQuery(".co2ok_widget_infobox_container");
        var offset = widgetInfoButton.offset();
  
        widgetInfoBox.remove();
        jQuery("body").append(widgetInfoBox);
  
        if (jQuery(window).width() < 480) {
        // offset.left = offset.left - widgetInfoBox.width() / 4;
        offset.top = offset.top - (widgetInfoBox.height() + widgetInfoButton.height() - 9);
        if ( offset.left < 0) offset.left = 10;
        if ( offset.top < 0) offset.top = 10;
        widgetInfoBox.css({
            top: offset.top,
            margin: "0 auto",
            left: offset.left,
            transform: "none"
        });
        } else {
        offset.left = offset.left - widgetInfoBox.width() / 2;
        if ( offset.left < 0) offset.left = 10;
        offset.top = offset.top - (widgetInfoButton.height()) - widgetInfoBox.height() + 6;
        widgetInfoBox.css({
            top: offset.top,
            left: offset.left,
            margin: "0",
            transform: "none"
        });
        }
    },
    ShowWidgetInfoBox  : function()
    {
        // console.log("Show must go on")
      jQuery(".co2ok_widget_infobox_container").removeClass('infobox-hidden')
      jQuery(".co2ok_widget_infobox_container").addClass('ShowWidgetInfoBox')
      jQuery(".co2ok_widget_container").css({
        marginBottom: 200
      });
      // if (!this.isMobile() == true ) {
      //     var elmnt = document.getElementById("widget-infobox-view");
      //     elmnt.scrollIntoView(false); // false leads to bottom of the infobox
      //   }
    },
  
    hideWidgetInfoBox : function()
    {
      jQuery(".co2ok_widget_infobox_container").removeClass('ShowWidgetInfoBox')
      jQuery(".co2ok_widget_infobox_container").addClass('infobox-hidden')
      jQuery(".co2ok_widget_container").css({
        marginBottom: 0
      });
    },
  
    modalRegex: function(e)
    {
       return jQuery(e.target).hasClass("widget-svg-img") ||
       jQuery(e.target).hasClass("widget-svg-img-large") ||
       jQuery(e.target).hasClass("logo_co2ok_widget") ||
       jQuery(e.target).hasClass("widget-text-block") ||
       jQuery(e.target).hasClass("widget-inner-wrapper") ||
       jQuery(e.target).hasClass("co2ok_widget_info") ||
       jQuery(e.target).hasClass("co2ok_widget_info_hitarea") ||
       jQuery(e.target).hasClass("co2ok_widget_infobox_container") ||
       jQuery(e.target).hasClass("widget-hover-link");
    },
  
    RegisterWidgetInfoBox : function()
    {
      console.log('it begins')
      var _this = this;
  
      jQuery(".co2ok_widget_info_keyboardarea").focus(function(){
          _this.ShowWidgetInfoBox();
          jQuery(".first-text-to-select").focus();
      });
  
      jQuery('body').click(function(e)
      {
        if(!_this.modalRegex(e))
        {
          _this.hideWidgetInfoBox();
        }
        else {
          _this.ShowWidgetInfoBox();
        }
  
      });
  
      jQuery('body').on("touchstart",function(e){
  
        if(!_this.modalRegex(e)){
          _this.hideWidgetInfoBox();
        }
        else {
          _this.placeWidgetInfoBox()
          _this.ShowWidgetInfoBox();
        }
      });
  
      if(!this.isMobile())
      {
        jQuery(".co2ok_widget_info , .co2ok_widget_info_hitarea").mouseenter(function() {
          _this.placeWidgetInfoBox();
        });
  
        jQuery(document).mouseover(function(e) {
            if (!(_this.modalRegex(e)))
            {
              _this.hideWidgetInfoBox();
            }
            else {
              _this.placeWidgetInfoBox();
              _this.ShowWidgetInfoBox();
            }
          });
      }
  }
  
  }
  // export default new Co2okWidget()
  