let Co2okWidgetXL = {

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
  
    getCookieValue: function (a) {
      var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : '';
    },

    merchantCompensations: function (widgetContainer, merchantId, widgetSize, widgetColor, lang) {
  
        // get impact from cookie if available
        let co2ok_impact = Co2okWidgetXL.getCookieValue('co2ok_impact')

        // if (co2ok_impact > 1){
        //   console.log('Collaborate and listen')
        //   Co2okWidgetXL.widgetGenerator(widgetContainer, co2ok_impact, widgetSize, widgetColor, lang)
        //   return
        // }

        // var widgetColor = "gray"
        // var widgetSize = "L"

        // get impact from API
        let xhr = Co2okWidgetXL.xhr()
        // let host = 'http://127.0.0.1:8000'
        let host = 'https://app.co2ok.eco'
        xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=519dc2a3`, true)
        //    xhr.withCredentials = true;
           xhr.onreadystatechange = function(){
               if (this.readyState == 4 && this.status == 200){
                // For the near future: detect large numbers, then divide and adjust kilo to ton
                // let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
                let totalTransactionData = xhr.responseText
                // let totalTransactionData = 491

                document.cookie = 'co2ok_impact=' + totalTransactionData + ';max-age=86400;path="/"'
                Co2okWidgetXL.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)
                   
                // Something is fishy, let's serve up the total
                } else {
                  let totalTransactionData = 491
                  Co2okWidgetXL.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)
            }
        }
        xhr.send()
        //   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
    },
  
    uspInsertion: function () {
      let product_usp_html = `<li class="list__item">
        <div class="layout layout--x-small layout--center">
          <div class="layout__item layout__item--fixed" style="width: 18px">
            <img src=http://localhost:8080/widget/DZ-globe.png width=18px> 
          </div>
          <div class="layout__item">
            Shop klimaatvriendelijk
          </div>
        </div>
      </li>`

      let home_usp_html = `<li class="grid__item">
        <div class="layout layout--x-small layout--center">
          <div class="layout__item layout__item--fixed" style="width: 24px">
            <img src=http://localhost:8080/widget/DZ-globe.png width=24px> 
          </div>
          <div class="layout__item">
            Shop klimaatvriendelijk
          </div>
        </div>
      </li>`

      if (window.location.pathname == "/")
        jQuery('a[href$="snellelevering"]').parent().after(home_usp_html)
      else
        jQuery('a[href$="snellelevering"]').parent().after(product_usp_html)
      
    },
    
    cfsTrustMarkInsertion: function () {
      let cfs_html = `<li class="list__item">
        <img src="http://localhost:8080/widget/cfs.png" style="width: 100px">
      </li>`
      
      jQuery(".wwk-logo--full").parent().after(cfs_html)
    },
    
    insertWidget: function() {
      let widget_div = `<div id="widgetContainer" style="margin-top:25px;margin-left:18px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>`

      let pagetype = window.location.pathname.split("/")[1]
      if (pagetype == "product" || pagetype == "product-categorie")
        jQuery('a[href$="https://www.feedbackcompany.com/nl-nl/reviews/douchezaak"]').parent().parent().after(widget_div)
    },

    widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor, lang) {
      // let  SITE_HOST =  'https://co2ok.eco'
      let SITE_HOST = 'http://localhost:8080'    
  
      // var fileref=document.createElement("link")
      // fileref.setAttribute("rel", "stylesheet")
      // fileref.setAttribute("type", "text/css")
      // fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark.css`)
      // document.getElementsByTagName("head")[0].appendChild(fileref)
     
      var tofixed = 1;
      if (totalCompensatedData < 100)
        var compensatiewidget  = 0.1;
      else {
        if (totalCompensatedData > 99999)
          tofixed = 0;
        var compensatiewidget  = totalCompensatedData / 1000;
      }
      var compensatietekst = `We hebben <br><span id="large-widget-text-large">${compensatiewidget .toFixed(tofixed)} ton CO<sub>2</sub></span><br> uitstoot voorkomen`;
      var dz_tekst = 'Douchezaak geeft <br>om het klimaat!'

      var circleSize = '> <circle cx="95" cy="65" r="62" fill="white">';
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetXL.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetXL-DZ.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

      if (document.cookie.match(/^(.*;)?\s*co2ok_hide_button\s*=\s*[^;]+(.*)?$/)){
        console.log('hammer time!')
        return
      }

      let widgetmark = `
  
      <div class="large-widget">
        <span class ="large-widget-right-green"></span>
        <svg id= "half-circle" ${circleSize} /></svg>
        <p id="large-widget-text-dz">${dz_tekst}</p>
        <p id="large-widget-text">${compensatietekst}</p>
        <p id="large-widget-xvliegen">= ${(compensatiewidget * 1000000 / 500) .toFixed(0)} X<br>douchen</p>
        <img id="co2ok-logo" src= "${SITE_HOST}/static/logo.png">
        <img id="info-button-widget" class="testclass info_button_widget_hover" src= "${SITE_HOST}/static/info-dz.svg">
        <img id="large-widget-airplane" src= "${SITE_HOST}/widget/douche.svg">
      </div>
      
      
      <div class="co2ok_widget_infobox_container co2ok-popper infobox-hidden" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

      <div class="inner-wrapper">
      <a href="#!" input="" type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
      <p class="text-block greyBorder">Douchezaak geloof in het tegengaan van verspilling. Onze degelijke producten die een leven lang meegaan, zijn hier een voorbeeld van. Daarnaast werken we hard aan het verduurzamen van gebruikte verpakkingsmaterialen en leveringen.</p>
      </a>
              </div>

      <div class="inner-wrapper">
      <img alt="Maak mijn aankoop klimaatneutraal " title="Maak mijn aankoop klimaatneutraal " class="svg-img-large   co2ok_info_hover_image" src="http://localhost:8080/widget/DZ-heart-earth.png">        <a href="#!" input="" type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
      <p class="text-block greyBorder">Dankzij onze partner CO2ok kunt ook u een directe bijdrage leveren door de klimaatimpact van productie en transport uw aankoop te compenseren'</p>
      </a>
      </div>

      <div class="inner-wrapper">
      <a href="#!" input="" type="text" role="button" tabindex="0" class="selectable-text-two" style="outline: none; -webkit-appearance: none;">
      <p class="text-block">Zo shop jij klimaatneutraal!</p>
      </a>
      </div>

      <a class="hover-link" target="_blank" href="http://co2ok.eco"><img alt="Maak mijn aankoop klimaatneutraal" title="Maak mijn aankoop klimaatneutraal" src="${SITE_HOST}/static/logo.png" class="co2ok_logo_default_info hover-link co2ok_logo_default_info"></a>
        <span class="hover-link">
        <a  class="hover-link" style="margin-left: 10px; margin-top: 100px;" target="_blank" href="http://www.co2ok.eco/co2-compensatie">Hoe werkt CO<sub>2</sub> compensatie?</a> </span>
      </div>
      `


      let old_hover = `
      <div class="co2ok_widget_infobox_container co2ok-popper" id="widget-infobox-view">

        <div class="widget-inner-wrapper">
        <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
        <p class="widget-text-block greyBorder">We hebben superveel CO2 voorkomen </p>
        </a>
        <img alt="Maak mijn aankoop klimaatneutraal" title="Maak mijn aankoop klimaatneutraal" src="${SITE_HOST}/widget/vliegtuig_hover.png" class="widget-svg-img  co2ok_info_hover_image">
        </div>

        <a class="widget-hover-link" target="_blank" href="http://co2ok.eco"><img src="${SITE_HOST}/static/logo.png" class="co2ok_logo_default_info widget-hover-link co2ok_logo_default_info"></a>
        <span class="widget-hover-link">
        <a  class="widget-hover-link" target="_blank" href="http://www.co2ok.eco/co2-compensatie">Hoe werkt CO<sub>2</sub> compensatie?</a> </span>
        </div>

        <div class="co2ok_infobox_container co2ok-popper" id="infobox-view">    </div>

        

        
      `

      
      let widgetcontainer = document.getElementById(widgetContainer)
      // let widgetcontainer = document.getElementsByClassName('whb-empty-column')[0]

      // Don't try to place widget if there is no container
      if(widgetcontainer == null){
        return
      }

      widgetcontainer.innerHTML = widgetmark
      
      this.RegisterWidgetInfoBox();
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
      var widgetInfoButton = jQuery(".large-widget");
      var widgetInfoBox = jQuery(".co2ok_widget_infobox_container");
      var offset = widgetInfoButton.offset();

      widgetInfoBox.remove();
      jQuery("body").append(widgetInfoBox);

      if (jQuery(window).width() < 480) {
      // offset.left = offset.left - widgetInfoBox.width() / 4;
      offset.top = offset.top + widgetInfoButton.height();
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
      offset.top = offset.top + (widgetInfoButton.height() - 5);
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
       return jQuery(e.target).hasClass("info_button_widget_hover") ||
        jQuery(e.target).hasClass("svg-img") ||
        jQuery(e.target).hasClass("svg-img-large") ||
        jQuery(e.target).hasClass("logo_co2ok_widget") ||
        jQuery(e.target).hasClass("text-block") ||
        jQuery(e.target).hasClass("inner-wrapper") ||
        jQuery(e.target).hasClass("co2ok_widget_info") ||
        jQuery(e.target).hasClass("co2ok_widget_info_hitarea") ||
        jQuery(e.target).hasClass("co2ok_widget_infobox_container") ||
        jQuery(e.target).hasClass("hover-link");
    },
  
    RegisterWidgetInfoBox : function()
    {
      // console.log('it begins')
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

jQuery(document).ready(function() {
  console.log("CO2ok is fighting climate change!")
  Co2okWidgetXL.insertWidget();
  Co2okWidgetXL.merchantCompensations('widgetContainer', '0', 'XL', 'default')
  Co2okWidgetXL.uspInsertion();
  Co2okWidgetXL.cfsTrustMarkInsertion();
})