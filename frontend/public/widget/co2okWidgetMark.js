let Co2okWidget = {

  getCookieValue: function (a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  },

  merchantCompensations: function (widgetContainer, merchantId, widgetColor, lang) {

    // get impact from cookie if available
    let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')

    //ungly hack for demo store
    if (merchantId == 'a0d50fa9')
      co2ok_impact = 2342;

      // if there is an impact value found in the cookie, render the widget
      if (co2ok_impact > 1) {
        console.log('Collaborate and listen')

        // ugly hack for DGL (degroenelinde)
        // enforces impact retrieval from backend
        if (merchantId == '12afe7d2' || merchantId == '432c516a') {
          // for DGL: continue to retrieval and storing in the cookie if the actual value hasn't been stored
          // (100 is the default value in WC)
          if (co2ok_impact > 100) {
            Co2okWidget.widgetGenerator(widgetContainer, co2ok_impact, widgetColor, lang)
            return
          }
        } else {
          Co2okWidget.widgetGenerator(widgetContainer, co2ok_impact, widgetColor, lang)
          return
        }
      }

    // get impact from API
    let xhr = new XMLHttpRequest();

    // let host = 'http://127.0.0.1:8000'
    let host = 'https://app.co2ok.eco'
    xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // For the near future: detect large numbers, then divide and adjust kilo to ton
        // let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
        let totalTransactionData = xhr.responseText
        // let totalTransactionData = 491

        // ugly hack for DGL
        // adds seperately compensated amount
        if (merchantId == '12afe7d2' || merchantId == '432c516a') {
          var d = new Date()
          var month = d.getMonth() + 1 // since count starts at zero
          month = month < 10 ? month + 12 : month // add 12 for 2021
          totalTransactionData = 168.3 * month + parseInt(totalTransactionData)
        }

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

  preloadImage: function (url) {
    return new Promise(resolve => {
      var img = new Image();
      img.src = url;
      resolve('resolved');
    });
  },


  loadResources: async function() {
    images = [
      `${this.SITE_HOST}/widget/hovercard/green_truck.png`,
      `${this.SITE_HOST}/static/logo.png`,
      `${this.SITE_HOST}/widget/hovercard/branch.png`,
      `${this.SITE_HOST}/widget/hovercard/heart_plane.png`,
      `${this.SITE_HOST}/widget/hovercard/renewable_energy.png`
    ]

    for (img of images) {
      result = await this.preloadImage(img)
    }
  },

  widgetGenerator: function (widgetContainer, totalCompensatedData, widgetColor, lang) {

    // HT: FDD800
    // CO2ok nu: 11D073
    // Mijnkraamshop: D0C918
    let color = "#D0C918"

    //css for trustmark and hovercard
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)

    if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0') {
      console.log('hammer time!')
      return
    }

    // Dit moet nog ff mooier als we dit nog willen gebruiken, anders kan het weg.
    if (totalCompensatedData < 100) {
      var compensatiewidget  = 0.1;
    } else {
      var compensatiewidget  = totalCompensatedData / 1000;
    }

    // Regular or grayscale widget
    if (widgetColor == "gray") {
      var colorSuffix = "-gray";
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-gray.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)
    } else {
        var colorSuffix = "";
    }

    if (lang == 'EN') {
      var reductietekst = 'CO₂ reduction';
      var stepOne = "You are empowered to fight climate change by neutralising emissions from production of your purchase";
      var stepTwo = "This shop has committed to climate friendly delivery; all emissions are neutralised through carbon offsetting projects";
      var stepThree = `Together we offset <strong class="co2ok-small">${compensatiewidget .toFixed(1)} </strong> tonne of CO₂ emissions. This is equal to <strong class="co2ok-small">${(compensatiewidget * 5000).toFixed(0)} </strong>km of flying`;
      var works = "How we do this";
    } else {
      var reductietekst = 'CO₂ reductie';
      var stepOne = "Je kan bij ons klimaatverandering bestrijden door de uitstoot van de productie van je aankoop te neutraliseren";
      var stepTwo = "Deze winkel zet zich in voor een klimaatvriendelijke bezorging; alle uitstoot wordt geneutraliseerd door middel van CO2-compensatieprojecten";
      var stepThree = `Samen hebben we <strong class="co2ok-small">${compensatiewidget .toFixed(1)} </strong>ton CO2-uitstoot gecompenseerd. Dit staat gelijk aan <strong class="co2ok-small">${(compensatiewidget * 5000).toFixed(0)} </strong>km vliegen.`;
      var works = 'Hoe we dat doen';
    }

    let widgetmark = `
      <div>

        <div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
          <span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo${colorSuffix}.png"></span>
        </div>
        <div class="caption_co2ok_widget co2ok_widget_info widget-small">
          <span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
        </div>

      </div>

      <div class="co2ok_widget_infobox_container co2ok-popper hovercard-trustmark co2ok-small" id="widget-infobox-view">

        <div class="co2ok-small hovercard-wrapper">
          <img alt="Rewnewable energy" title="Rewnewable energy" src="${this.SITE_HOST}/widget/hovercard/renewable_energy.png" class="co2ok-small widget-info-hover-png widget-png-left">
          <p class="co2ok-small widget-steps step-one widget-right"> ${stepOne} </p>
        </div>

        <div class="co2ok-small hovercard-wrapper" style="margin: 20px 0px;">
          <img alt="Shipping emissions" title="Shipping emissions" src="${this.SITE_HOST}/widget/hovercard/green_truck.png" class="co2ok-small widget-info-hover-png widget-png-right">
          <p class="co2ok-small widget-steps step-two widget-left"> ${stepTwo} </p>
        </div>

        <div class="co2ok-small hovercard-wrapper">
          <img alt="Production emissions" title="Production emissions" src="${this.SITE_HOST}/widget/hovercard/heart_plane.png" class="co2ok-small widget-info-hover-png widget-png-left">
          <p class="co2ok-small widget-steps step-one widget-right"> ${stepThree} </p>
        </div>

        <span class="co2ok-small widget-hovercard-links">
          <a class="co2ok-small widget-compensation" target="_blank" href="http://www.co2ok.eco/co2-compensatie"> ${works} </a>
        </span>
        <img class="co2ok-small widget-branch-png" src="${this.SITE_HOST}/widget/hovercard/branch.png">

      </div>
    `
            // console.log(widgetimg)

    let widgetcontainer = document.getElementById(widgetContainer)
    // let widgetcontainer = document.getElementsByClassName('whb-empty-column')[0]

    // Don't try to place widget if there is no container
    if(widgetcontainer == null) {
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
      offset.top = offset.top + widgetInfoButton.outerHeight();
      if (offset.top > jQuery(window).height() - widgetInfoBox.width()) {
        offset.top = offset.top - (widgetInfoBox.height() + widgetInfoButton.width() / 2) - 6;
      }
      widgetInfoBox.css({
        top: offset.top,
        left: offset.left,
        margin: "0",
        transform: "none"
      });
    }
  },

  ShowWidgetInfoBox  : function() {
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

  hideWidgetInfoBox : function() {
    jQuery(".hovercard-trustmark").removeClass('ShowWidgetInfoBox')
    jQuery(".hovercard-trustmark").addClass('infobox-hidden')
    jQuery(".co2ok_widget_container").css({
      marginBottom: 0
    });
  },

  modalRegex: function(e) {
    return jQuery(e.target).hasClass("co2ok-small") ||
    jQuery(e.target).hasClass("widget-small");
  },

  RegisterWidgetInfoBox : function() {
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

      if(!_this.modalRegex(e)) {
        _this.hideWidgetInfoBox();
      } else {
        _this.placeWidgetInfoBox()
        _this.ShowWidgetInfoBox();
      }
    });

    if(!this.isMobile()) {
      jQuery(".co2ok_widget_info , .co2ok_widget_info_hitarea").mouseenter(function() {
        _this.placeWidgetInfoBox();
      });

      jQuery(document).mouseover(function(e) {
        if (!(_this.modalRegex(e))) {
          _this.hideWidgetInfoBox();
        } else {
          _this.placeWidgetInfoBox();
          _this.ShowWidgetInfoBox();
        }
      });
    }
  },

  updateScriptToDefer : function() {
    if (document.querySelector('script[div="widgetContainermark"]')) {
      document.querySelector('script[div="widgetContainermark"]').setAttribute("defer", "");
      document.querySelector('script[div="widgetContainermark"]').removeAttribute("async")
    }
    // jQuery('script[div="widgetContainermark"]').attr("defer", "defer");
    // jQuery('script[div="widgetContainermark"]').removeAttr("async")
  },

  jQueryLoadDefer: function(script) {
    if (window.jQuery) {
      console.log("jQuery loaded!")
      // Co2okWidget.updateScriptToDefer();
      if (script.getAttribute('div')) {
        let div = script.getAttribute('div')
        let merchantId = script.getAttribute('merchantId')
        let widgetColor = script.getAttribute('widgetColor')
        let lang = script.getAttribute('lang')
        Co2okWidget.merchantCompensations(div, merchantId, widgetColor, lang)
      }
    } else {
      setTimeout(function() { Co2okWidget.jQueryLoadDefer(script) }, 50);
    }
  }

}
// export default new Co2okWidget()

Co2okWidget.SITE_HOST =  'https://co2ok.eco'
// Co2okWidget.SITE_HOST = 'http://localhost:8080'

//document.currentScript must be saved before entering loadResrouces to avoid null return
//loadResouces() returns a promise, meaning that by .then() the script has stopped running and cannot be found
var  script = document.currentScript;

Co2okWidget.loadResources()
.then(_ => Co2okWidget.updateScriptToDefer())
.then(_ => Co2okWidget.jQueryLoadDefer(script))
