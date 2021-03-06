let Co2okWidgetXL = {

  getCookieValue: function (a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  },


  merchantCompensations: function (widgetContainer, merchantId, widgetSize, widgetColor, lang) {

    // get impact from cookie if available
    let co2ok_impact = Co2okWidgetXL.getCookieValue('co2ok_impact')

    //ungly hack for demo store
    if (merchantId == 'a0d50fa9')
      co2ok_impact = 2342;

    if (co2ok_impact > 1){
      console.log('Collaborate and listen')

      // ugly hack for DGL (degroenelinde)
      // enforces impact retrieval from backend
      if (merchantId == '12afe7d2' || merchantId == '432c516a') {
        // for DGL: continue to retrieval and storing in the cookie if the actual value hasn't been stored
        // (100 is the default value in WC)
        if (co2ok_impact > 100){
          Co2okWidgetXL.widgetGenerator(widgetContainer, co2ok_impact, widgetSize, widgetColor, lang)
          return
        }
      } else {
        Co2okWidgetXL.widgetGenerator(widgetContainer, co2ok_impact, widgetSize, widgetColor, lang)
        return
      }
    }

    // var widgetColor = "gray"
    // var widgetSize = "L"

    // get impact from API
    let xhr = new XMLHttpRequest();

    // let host = 'http://127.0.0.1:8000'
    let host = 'https://app.co2ok.eco'
    xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
    //    xhr.withCredentials = true;
    xhr.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        // For the near future: detect co2ok-large numbers, then divide and adjust kilo to ton
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

  widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor, lang) {

    // HT: FDD800
    // CO2ok nu: 11D073
    // Mijnkraamshop: D0C918
    let color = "#D0C918"

    //css for hovercard
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)


    if (Co2okWidgetXL.getCookieValue('co2ok_ab_hide') == '0')
    {
      console.log('hammer time!')
      return
    }
    var decimalsCompensation = 1;
    if (totalCompensatedData < 100) {
      var compensationAmount  = 0.1;

    } else {
      if (totalCompensatedData > 9999) {
        decimalsCompensation = 0;
      }
      var compensationAmount  = totalCompensatedData / 1000;
    }

    if (lang == 'NL') {

      var compensatietekst = `Deze webshop heeft <br><span id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> uitstoot voorkomen`;
      var vliegen = "vliegen";
      var stepOne = "Je kan bij ons klimaatverandering bestrijden door de uitstoot van de productie van je aankoop te neutraliseren";
      var stepTwo = "Deze winkel zet zich in voor een klimaatvriendelijke bezorging; alle uitstoot wordt geneutraliseerd door middel van CO2-compensatieprojecten";
      var stepThree = `Samen hebben we <strong class="co2ok-small">${compensationAmount .toFixed(1)} </strong>ton CO2-uitstoot gecompenseerd. Dit staat gelijk aan <strong class="co2ok-small">${(compensationAmount * 5000).toFixed(0)} </strong>km vliegen.`;
      var works = 'Hoe we dat doen';

    } else {

      var compensatietekst = `This shop prevented <br><span id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> emissions`;
      var vliegen = "flying";
      var stepOne = "You are empowered to fight climate change by neutralising emissions from production of your purchase";
      var stepTwo = "This shop has committed to climate friendly delivery; all emissions are neutralised through carbon offsetting projects";
      var stepThree = `Together we've offset <strong class="co2ok-small">${compensationAmount .toFixed(1)} </strong>tonnes of CO₂ emissions. This is equal to <strong class="co2ok-small">${(compensationAmount * 5000).toFixed(0)} </strong>km of flying`;
      var works = 'How do do this';

    }


    if (widgetSize == "L") {

      var circleSize = '> <circle cx="61" cy="39.5" r="37.5" fill="white">';
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetL.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

    } else {

      var circleSize = '> <circle cx="95" cy="64.6" r="62.6" fill="white">';
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

  }

    // Kleine of grote widget

    if (widgetColor == "gray") {

      var colorSuffix = "-gray";
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL-gray.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

    } else {

      var colorSuffix = "";

    }
    // Wordt de widget in grijs of groen weergegeven

    // let widgetimg = `<img src = "${this.SITE_HOST}/widget/widgetmark-grayscale.png" width=101px>`
    let widgetmark = `

      <div class="large-widget">
        <span class ="large-widget-right-green"></span>
        <svg id= "half-circle" style="width: 160px;" ${circleSize} /></svg>
        <p id="large-widget-text">${compensatietekst}</p>
        <p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
        <img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo${colorSuffix}.png">
        <img id="info-button-widget" class="info-button-widget" src= "${this.SITE_HOST}/static/info${colorSuffix}.svg">
        <img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
      </div>

      <div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-large co2ok-large" id="widget-infobox-view">

        <div class="co2ok-large hovercard-wrapper">
          <img alt="Rewnewable Energy" title="Rewnewable Energy" src="${this.SITE_HOST}/widget/hovercard/renewable_energy.png" class="co2ok-large widget-info-hover-png widget-png-left">
          <p class="co2ok-large widget-steps step-one widget-right"> ${stepOne} </p>
        </div>

        <div class="co2ok-large hovercard-wrapper" style="margin: 20px 0px;">
          <img alt="Shipping emissions" title="Shipping emissions" src="${this.SITE_HOST}/widget/hovercard/green_truck.png" class="co2ok-large widget-info-hover-png widget-png-right">
          <p class="co2ok-large widget-steps step-two widget-left"> ${stepTwo} </p>
        </div>

        <div class="co2ok-large hovercard-wrapper">
          <img alt="Production emissions" title="Production emissions" src="${this.SITE_HOST}/widget/hovercard/heart_plane.png" class="co2ok-large widget-info-hover-png widget-png-left">
          <p class="co2ok-large widget-steps step-one widget-right"> ${stepThree} </p>
        </div>

        <span class="co2ok-large widget-hovercard-links">
          <a class="co2ok-large widget-compensation" target="_blank" href="http://www.co2ok.eco/co2-compensatie"> ${works} </a>
        </span>
        <img class="co2ok-large widget-branch-png" src="${this.SITE_HOST}/widget/hovercard/branch.png">

      </div>
    `

    let widgetcontainer = document.getElementById(widgetContainer)

    // Don't try to place widget if there is no container
    if(widgetcontainer == null) {
      return
    }

    widgetcontainer.innerHTML = widgetmark
    this.RegisterWidgetInfoBox(widgetSize);
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
    var widgetInfoButton = jQuery(".info-button-widget");
    var widgetInfoBox = jQuery(".widget-hovercard-large");
    var widgetBox = jQuery(".large-widget")
    var offset = widgetInfoButton.offset();

    widgetInfoBox.remove();
    jQuery("body").append(widgetInfoBox);

    if (jQuery(window).width() < 480) {

      offset.left = offset.left - widgetInfoBox.width() / 2;
      offset.top = offset.top - (widgetInfoBox.height() + widgetInfoButton.height() - 9) - 10;
      if ( offset.left < 0) offset.left = 10;
      if ( offset.top < 0) offset.top = 10;
      widgetInfoBox.css({
          top: offset.top,
          margin: "0 auto",
          left: offset.left,
          transform: "none"
      });

    } else {

      offset.left = offset.left -  widgetBox.outerWidth() / 2;
      if ( offset.left < 0) offset.left = 10;
      offset.top = offset.top - (widgetInfoButton.height()) - widgetInfoBox.height() + 6;
      if (offset.top < 0) {
        offset.top = offset.top + (widgetInfoBox.height() + widgetInfoButton.width() / 2) + 6;
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
    jQuery(".widget-hovercard-large").removeClass('infobox-hidden')
    jQuery(".widget-hovercard-large").addClass('ShowWidgetInfoBox')
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
    jQuery(".widget-hovercard-large").removeClass('ShowWidgetInfoBox')
    jQuery(".widget-hovercard-large").addClass('infobox-hidden')
    jQuery(".co2ok_widget_container").css({
      marginBottom: 0
    });
  },


  modalRegex: function(e)
  {
     return jQuery(e.target).hasClass("co2ok-large") ||
     jQuery(e.target).hasClass("widget-hovercard-large") ||
     jQuery(e.target).hasClass("info-button-widget");
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
      if(!_this.modalRegex(e, ))
      {
        _this.hideWidgetInfoBox();
      } else {
        _this.ShowWidgetInfoBox();
      }

    });

    jQuery('body').on("touchstart",function(e){

      if(!_this.modalRegex(e)){
        _this.hideWidgetInfoBox();
      } else {
        _this.placeWidgetInfoBox()
        _this.ShowWidgetInfoBox();
      }
    });

    if(!this.isMobile())
    {
      jQuery(".co2ok_widgets_info , .co2ok_widget_info_hitarea").mouseenter(function() {
        _this.placeWidgetInfoBox();
      });

      jQuery(document).mouseover(function(e) {

        if (!_this.modalRegex(e)) {

          _this.hideWidgetInfoBox();

        } else {
          _this.placeWidgetInfoBox();
          _this.ShowWidgetInfoBox();
        }
      });
    }
  },

  jQueryLoadDefer: function(script) {
    if (window.jQuery) {
      if (script.getAttribute('div')) {
        let div = script.getAttribute('div')
        let merchantId = script.getAttribute('merchantId')
        let widgetSize = script.getAttribute('widgetSize');
        let widgetColor = script.getAttribute('widgetColor')
        let lang = script.getAttribute('lang')
        Co2okWidgetXL.merchantCompensations(div, merchantId, widgetSize, widgetColor, lang)
      }
    } else {
      setTimeout(function() { Co2okWidgetXL.jQueryLoadDefer(script) }, 50);
    }
  }


}
  // export default new Co2okWidget()

Co2okWidgetXL.SITE_HOST =  'https://co2ok.eco'
// Co2okWidgetXL.SITE_HOST = 'http://localhost:8081'

//document.currentScript must be saved before entering loadResrouces to avoid null return
//loadResouces() returns a promise, meaning that by .then() the script has stopped running and cannot be found
var  script = document.currentScript;

Co2okWidgetXL.loadResources()
.then(_ => Co2okWidgetXL.jQueryLoadDefer(script))