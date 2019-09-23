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
        // let host = 'http://127.0.0.1:8000'
        let host = 'https://test.co2ok.ninja'
        xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
        //    xhr.withCredentials = true;
           xhr.onreadystatechange = function(){
               if (this.readyState == 4 && this.status == 200){
                // For the near future: detect large numbers, then divide and adjust kilo to ton
                let totalTransactionData = Math.round(xhr.responseText / 1000)
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
        // let  SITE_HOST =  'https://co2ok.eco'
        let SITE_HOST = 'http://localhost:8080'

        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidget-s7.css`)
        document.getElementsByTagName("head")[0].appendChild(fileref)

        var image_url = plugin.url;

          let widgets = `

          <div class="widgets" style="width: 100%;height: auto;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;width:100%;height:auto;margin-left: 15px;">
                    <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:380px;height:auto">
                        <span style="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 12px;margin-left: 20px;">SHOP </span>
                        <img src="${image_url}/logo.svg" alt="" class="compensate-icon" style = "width: 46px; margin-left: 3px; margin-top: 4px;">

                        
                        
                        <div class="co2-widget_info" style ="width: 100%;height: auto;display: flex;flex-direction: row;justify-content: flex-start;align-items: flex-start; margin-left: 15px">
                        <span style ="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; text-align: right;font-size: 16px; font-weight: bold; margin-top: 15px;"> ${totalCompensatedData} </span>
                        
                        <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 5px;">
                        <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-top: -5px;">
                        <!-- <img src="/static/cloud.png" alt="" class="compensate-icon" style = "width: 16px;height: 16px;"> -->
                        <p style="font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 12px;font-weight:400;margin-top: 25px;">kg CO₂-reductie</p>
                        <span class="co2ok_info_hitarea">
                            <img src="${SITE_HOST}/static/info-MKS.svg" alt="" class="co2ok_widget_info" style = "width: 17px;height: 17px; padding: 2px;">
                            </span>
                            </div>
                            </div>
                     
                    <!--
                    <p style="color: #464646; font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; font-size: 10px;margin-top: -5px;text-align:left;">kilo CO₂ voorkomen</p>
                    -->
                    </div>
                    </div>
                    
                    </div>
                    </div>
                    
                </div>
                <div class="co2ok_widget_infobox_container co2ok-popper" id="widget-infobox-view">

                    <div class="inner-wrapper">
                    <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
                    <p class="text-block greyBorder">Tijdens productie en vervoer van producten komen broeikasgassen vrij</p>
                    </a>
                    <img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/even.svg" class="widget-svg-img-large  co2ok_info_hover_image">
                    </div>
                    
                    <div class="inner-wrapper">
                    <img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/fout.svg" class="widget-svg-img-large co2ok_info_hover_image">
                    <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
                    <p class="text-block greyBorder">Met een kleine bijdrage voorkomt CO2ok evenveel uitstoot</p>
                    </a>
                    </div>
            
                    <div class="inner-wrapper">
                    <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
                    <p class="text-block">Zo is je aankoop klimaatneutraal!!</p>
                    </a>
                    </div>
            
                    <a class="widget-hover-link" target="_blank" href="http://co2ok.eco"><img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/logo.svg" class="co2ok_logo_default_info widget-hover-link co2ok_logo_default_info"></a>
                    <span class="widget-hover-link">
                    <a  class="widget-hover-link" target="_blank" href="http://www.co2ok.eco/co2-compensatie">Hoe CO&#8322; compensatie werkt</a> </span>
                </div>
        
                <div class="co2ok_infobox_container co2ok-popper" id="infobox-view">    </div>


                `

                let widgetimg = `<img src = "${SITE_HOST}/widget/widgetmark-grayscale.png" width=101px>`
                let widgetmark = `
                <div>
                <div class="btn_co2ok_widget co2ok_widget_info" href="#">
                    <span class="btn_co2ok_widget co2ok_widget_info">SHOP<img class="logo_co2ok_widget" src="https://co2ok.eco/static/logo.png"></span>
                </div>
                    <div class="caption_co2ok_widget co2ok_widget_info">
                        <span> <strong>${totalCompensatedData}</strong>t CO₂ reductie </span>
                        </div>
                    </div>
                        
                <div class="co2ok_widget_infobox_container co2ok-popper" id="widget-infobox-view">

                <div class="inner-wrapper">
                <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
                <p class="text-block greyBorder">Tijdens productie en vervoer van producten komen broeikasgassen vrij</p>
                </a>
                <img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/even.svg" class="widget-svg-img-large  co2ok_info_hover_image">
                </div>
                
                <div class="inner-wrapper">
                <img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/fout.svg" class="widget-svg-img-large co2ok_info_hover_image">
                <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
                <p class="text-block greyBorder">Met een kleine bijdrage voorkomt CO2ok evenveel uitstoot</p>
                </a>
                </div>
        
                <div class="inner-wrapper">
                <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
                <p class="text-block">Zo is je aankoop klimaatneutraal!!</p>
                </a>
                </div>
        
                <a class="widget-hover-link" target="_blank" href="http://co2ok.eco"><img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " src="${image_url}/logo.svg" class="co2ok_logo_default_info widget-hover-link co2ok_logo_default_info"></a>
                <span class="widget-hover-link">
                <a  class="widget-hover-link" target="_blank" href="http://www.co2ok.eco/co2-compensatie">Hoe CO&#8322; compensatie werkt</a> </span>
                </div>
        
                <div class="co2ok_infobox_container co2ok-popper" id="infobox-view">    </div>
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
        offset.top = offset.top + widgetInfoButton.height();
        widgetInfoBox.css({
            top: offset.top,
            margin: "0 auto",
            left: "50%",
            transform: "translateX(-50%)"
        });
        } else {
        offset.left = offset.left - widgetInfoBox.width() / 2;
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
      if (!this.isMobile() == true ) {
          var elmnt = document.getElementById("widget-infobox-view");
          elmnt.scrollIntoView(false); // false leads to bottom of the infobox
        }
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
