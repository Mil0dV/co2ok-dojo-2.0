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

      if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0')
      {
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
                let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
                // let totalTransactionData = xhr.responseText
                   console.log(totalTransactionData)
                   Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData)

                // ok deze else werkt dus nog niet zoals bedoeld
            } else {
                let totalTransactionData = 491
            }
        }
        xhr.send()
        // let totalTransactionData = 491
        //   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
    },

    widgetGenerator: function (widgetContainer, totalCompensatedData) {


        // HT: FDD800
        // CO2ok nu: 11D073
        // Mijnkraamshop: D0C918
        let color = "#D0C918"
        // Het zou een idee zijn om deze te verduidelijken tov de host var hierboven
        let  SITE_HOST =  'https://co2ok.eco'
        // let SITE_HOST = 'http://localhost:8080'

        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidget-ht.css`)
        document.getElementsByTagName("head")[0].appendChild(fileref)


        try{
          var image_url = plugin.url;
        }
        catch{
          var image_url = "/wp-content/plugins/co2ok-plugin-woocommerce/images";
        }

                let widgetimg = `<img src = "${SITE_HOST}/widget/widgetmark-grayscale.png" width=101px>`
                let widgetmark = `
                <div>
                <div class="btn_co2ok_widget co2ok_widget_info" href="#">
                    <span class="btn_co2ok_widget co2ok_widget_info">SHOP<img class="logo_co2ok_widget" src="https://co2ok.eco/static/logo.png"></span>
                </div>
                    <div class="caption_co2ok_widget co2ok_widget_info">
                        <span class="caption_co2ok_widget co2ok_widget_info"> <strong>${totalCompensatedData}</strong>t CO₂ reductie </span>
                        </div>
                    </div>
                        
                <div class="co2ok_widget_infobox_container co2ok-popper" id="widget-infobox-view">

                <div class="widget-inner-wrapper">
                <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
                <p class="widget-text-block greyBorder">Tijdens productie en vervoer van producten komen broeikasgassen vrij</p>
                </a>
                <img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/fout.svg" class="widget-svg-img-large  co2ok_info_hover_image">
                </div>
                
                <div class="widget-inner-wrapper">
                <img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/even.svg" class="widget-svg-img-large co2ok_info_hover_image">
                <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
                <p class="widget-text-block greyBorder">Met een kleine bijdrage voorkomt CO₂ok evenveel uitstoot</p>
                </a>
                </div>
        
                <div class="widget-inner-wrapper">
                <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
                <p class="widget-text-block">Zo is je aankoop klimaatneutraal!!</p>
                </a>
                </div>
        
                <a class="widget-hover-link" target="_blank" href="http://co2ok.eco"><img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/logo.svg" class="co2ok_logo_default_info widget-hover-link co2ok_logo_default_info"></a>
                <span class="widget-hover-link">
                <a  class="widget-hover-link" target="_blank" href="http://www.co2ok.eco/co2-compensatie">Hoe CO&#8322; compensatie werkt</a> </span>
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
        offset.left = offset.left - widgetInfoBox.width() / 2 - 50;
        offset.top = offset.top + widgetInfoButton.height();
        widgetInfoBox.css({
            top: offset.top,
            margin: "0 auto",
            left: offset.left,
            transform: "none"
        });
        } else {
        offset.left = offset.left - widgetInfoBox.width() + widgetInfoButton.width();
        offset.top = offset.top + widgetInfoButton.height();
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
          _this.placeWidgetInfoBox();
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
              _this.ShowWidgetInfoBox();
            }
          });
      }
  }

}
// export default new Co2okWidget()


// New style Async execution B)
// if the variables are set on the script src, we're in async mode 
// and don't expect the html to run merchantCompensations

if (document.currentScript.getAttribute('div')) {
  let div = document.currentScript.getAttribute('div')
  let merchantId = document.currentScript.getAttribute('merchantId')
  let widgetColor = document.currentScript.getAttribute('widgetColor')
  let lang = document.currentScript.getAttribute('lang')
  Co2okWidget.merchantCompensations(div, merchantId, widgetColor, lang)
}