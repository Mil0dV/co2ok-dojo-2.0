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

  getCookieValue: function (a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  },

  merchantCompensations: function (widgetContainer, merchantId, widgetColor, lang) {

    // get impact from cookie if available
    let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')
    console.log(co2ok_impact)
    
    if (co2ok_impact > 1){
      console.log('Collaborate and listen')

      // ugly hack for DGL
      // adds seperately compensated amount
      if (merchantId == '12afe7d2' || merchantId == '432c516a') {
        co2ok_impact = 1683 + parseInt(co2ok_impact)
      }

      Co2okWidget.widgetGenerator(widgetContainer, co2ok_impact, widgetColor, lang)
      return
    }

    // get impact from API
    let xhr = Co2okWidget.xhr()
    // let host = 'http://127.0.0.1:8000'
    let host = 'https://app.co2ok.eco'
    xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
    xhr.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        // For the near future: detect large numbers, then divide and adjust kilo to ton
        // let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
        let totalTransactionData = xhr.responseText
        // let totalTransactionData = 491

        console.log(totalTransactionData)
        document.cookie = 'co2ok_impact=' + totalTransactionData + ';max-age=86400;path="/"'
        Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData, widgetColor, lang)

        // Something is fishy, let's serve up the total
      } else {
        let totalTransactionData = 491
        Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData, widgetColor, lang)
      }
    }
    xhr.send()
      //   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
  },


  loadResources: function() {
    images = [
      `${this.SITE_HOST}/widget/hovercard/green_truck.png`,
      `${this.SITE_HOST}/static/logo.png`,
      `${this.SITE_HOST}/widget/hovercard/branch.png`,
      `${this.SITE_HOST}/widget/hovercard/heart_plant`

  ]

    for (img of images){
      this.preloadImage(img)
    }
  },

  widgetGenerator: function (widgetContainer, totalCompensatedData, widgetColor, lang) {

      // HT: FDD800
      // CO2ok nu: 11D073
      // Mijnkraamshop: D0C918
      let color = "#D0C918"
      // Het zou een idee zijn om deze te verduidelijken tov de host var hierboven
      // let  SITE_HOST =  'https://co2ok.eco'
      let SITE_HOST = 'http://localhost:8080'

      //css for trustmark
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)
      //css for hovercard
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark-a0d50fa9.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

      if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0')
      {
        console.log('hammer time!')
        return
      }

      // Dit moet nog ff mooier als we dit nog willen gebruiken, anders kan het weg.
      if (totalCompensatedData < 100) {
        var compensatiewidget  = 0.1;
      }
      else {
        var compensatiewidget  = totalCompensatedData / 1000;
      }
      // Regular or grayscale widget
      if (widgetColor == "gray") {
        var colorSuffix = "-gray";
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark-gray.css`)
        document.getElementsByTagName("head")[0].appendChild(fileref)
     }
     else {
         var colorSuffix = "";
     }

      if (lang == 'EN') {
        var reductietekst = 'CO₂ reduction'
        var compensation = `This webshop prevented <strong>${compensatiewidget .toFixed(1)} </strong>tonnes of CO₂ emission = <strong>${(compensatiewidget * 5000).toFixed(0)} </strong>km of flying`
        var shipping = "This shop's climate friendly shipping neutralised shipping emissions."
        var works = "How CO₂ compensation works"
      }
      else {
        var reductietekst = 'CO₂ reductie'
        var compensation = `Deze webshop heeft <strong>${compensatiewidget .toFixed(1)} </strong>ton CO₂-uitstoot voorkomen = <strong>${(compensatiewidget * 5000).toFixed(0)} </strong>km vliegen`
        var shipping = "This shop's climate friendly shipping neutralised shipping emissions."
        var works = 'Hoe werkt CO₂ compensatie?'
      }
      let widgetmark = `
        <div>

          <div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
            <span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${SITE_HOST}/static/logo${colorSuffix}.png"></span>
          </div>
          <div class="caption_co2ok_widget co2ok_widget_info widget-small">
            <span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
          </div>

        </div>

        <div class="co2ok_widget_infobox_container co2ok-popper hovercard-trustmark small" id="widget-infobox-view">

        <img alt="Production emissions" title="Production emissions" src="${SITE_HOST}/widget/hovercard/heart_plane.png" class="small widget-info-hover-png widget-png-right">
          <div class="small hovercard-wrapper">
            <p class="small widget-steps step-one widget-left"> ${compensation} </p>
          </div>

          <img alt="Shipping emissions" title="Shipping emissions" src="${SITE_HOST}/widget/hovercard/green_truck.png" class="small widget-info-hover-png widget-png-left">
          <div class="small hovercard-wrapper">
            <p class="small widget-steps step-two widget-right"> ${shipping} </p>
          </div>

          <span class="small widget-hovercard-links">
            <a class="small widget-compensation" href="http://www.co2ok.eco/co2-compensatie"> ${works} </a>
          </span>
          <img class="small widget-branch-png" src="${SITE_HOST}/widget/hovercard/branch.png">

        </div>
      `
              // console.log(widgetimg)

      let widgetcontainer = document.getElementById(widgetContainer)
      // let widgetcontainer = document.getElementsByClassName('whb-empty-column')[0]

      // Don't try to place widget if there is no container
      if(widgetcontainer == null){
        return
      }

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
      var widgetInfoBox = jQuery(".hovercard-trustmark");
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
      offset.left = offset.left - widgetInfoBox.outerWidth() / 2 + widgetInfoButton.outerWidth() / 2;
      if ( offset.left < 0) offset.left = 10;
      offset.top = offset.top + (widgetInfoBox.height() * 1.5) - 20;
      if (offset.top > jQuery(window).height() - widgetInfoBox.outerWidth()) {
        offset.top = offset.top - widgetInfoButton.height() - widgetInfoBox.outerWidth() + 6;
      }
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
    jQuery(".hovercard-trustmark").removeClass('infobox-hidden')
    jQuery(".hovercard-trustmark").addClass('ShowWidgetInfoBox')
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
    jQuery(".hovercard-trustmark").removeClass('ShowWidgetInfoBox')
    jQuery(".hovercard-trustmark").addClass('infobox-hidden')
    jQuery(".co2ok_widget_container").css({
      marginBottom: 0
    });
  },

  modalRegex: function(e)
  {
    return jQuery(e.target).hasClass("small") ||
    jQuery(e.target).hasClass("widget-small");
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
