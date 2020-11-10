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

    if (co2ok_impact > 1){
      console.log('Collaborate and listen today')

      // ugly hack for DGL
      // adds seperately compensated amount
      if (merchantId == '12afe7d2' || merchantId == '432c516a') {
        co2ok_impact = 1683 + parseInt(co2ok_impact)
      }

      Co2okWidgetXL.widgetGenerator(widgetContainer, co2ok_impact, widgetSize, widgetColor, lang)
      return
    }

    // var widgetColor = "gray"
    // var widgetSize = "L"

    // get impact from API
    let xhr = Co2okWidgetXL.xhr()
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
    var img=new Image();
    img.src=url;
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


  widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor, lang) {

    // HT: FDD800
    // CO2ok nu: 11D073
    // Mijnkraamshop: D0C918
    let color = "#D0C918"
    // Het zou een idee zijn om deze te verduidelijken tov de host var hierboven
    let  SITE_HOST =  'https://co2ok.eco'
    // let SITE_HOST = 'http://localhost:8080'
    console.log("inside generator")
    //css for widget
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
    if (lang == 'EN') {

      var compensatietekst = `This shop prevented <br><span id="large-widget-text-large">${compensationAmount .toFixed(decimalsCompensation)} ton CO<sub>2</sub></span><br> emission`;
      var vliegen = "flying"
      var compensation = `This webshop prevented <strong>${compensationAmount .toFixed(1)} </strong>tonnes of CO₂ emission = <strong>${(compensationAmount * 5000).toFixed(0)} </strong>km of flying`
      var shipping = "This shop's climate friendly shipping neutralised shipping emissions."
      var works = "How CO₂ compensation works"

    } else {

      var compensatietekst = `Deze webshop heeft <br><span id="large-widget-text-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> uitstoot voorkomen`;
      var vliegen = "vliegen"
      var compensation = `Deze webshop heeft <strong>${compensationAmount .toFixed(1)} </strong>ton CO₂-uitstoot voorkomen = <strong>${(compensationAmount * 5000).toFixed(0)} </strong>km vliegen`
      var shipping = "This shop's climate friendly shipping neutralised shipping emissions."
      var works = 'Hoe werkt CO₂ compensatie?'

    }

    if (widgetSize == "L") {

      var circleSize = '> <circle cx="61" cy="39.5" r="37.5" fill="white">';
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetL.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

    } else {

      var circleSize = '> <circle cx="95" cy="64.6" r="62.6" fill="white">';
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetXL.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

  }

    // Kleine of grote widget

    if (widgetColor == "gray") {

      var colorSuffix = "-gray";
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetXL-gray.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

    } else {

      var colorSuffix = "";

    }
    // Wordt de widget in grijs of groen weergegeven

    // let widgetimg = `<img src = "${SITE_HOST}/widget/widgetmark-grayscale.png" width=101px>`
    let widgetmark = `

      <div class="large-widget">
        <span class ="large-widget-right-green"></span>
        <svg id= "half-circle" style="width: 160px;" ${circleSize} /></svg>
        <p id="large-widget-text">${compensatietekst}</p>
        <p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
        <img id="co2ok-logo" src= "${SITE_HOST}/static/logo${colorSuffix}.png">
        <a target="_blank" href="https://www.co2ok.eco/co2-compensatie">
          <img id="info-button-widget" class="info-button-widget" src= "${SITE_HOST}/static/info${colorSuffix}.svg">
        </a>
        <img id="large-widget-airplane" src= "${SITE_HOST}/widget/large-wiget-airplane.png">
      </div>

      <div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-large" id="widget-infobox-view">

        <img alt="Production emissions" title="Production emissions" src="${SITE_HOST}/widget/hovercard/heart_plane.png" class="large widget-info-hover-png widget-png-right">
        <div class="large hovercard-wrapper">
          <p class="large widget-steps step-one widget-left"> ${compensation} </p>
        </div>

        <img alt="Shipping emissions" title="Shipping emissions" src="${SITE_HOST}/widget/hovercard/green_truck.png" class="large widget-info-hover-png widget-png-left">
        <div class="large hovercard-wrapper">
          <p class="large widget-steps step-two widget-right"> ${shipping} </p>
        </div>

        <span class="large widget-hovercard-links">
          <a class="large widget-compensation" href="http://www.co2ok.eco/co2-compensatie"> ${works} </a>
        </span>
        <img class="large widget-branch-png" src="${SITE_HOST}/widget/hovercard/branch.png">

      </div>
    `

    let widgetcontainer = document.getElementById(widgetContainer)

    // Don't try to place widget if there is no container
    if(widgetcontainer == null) {
      return
    }

    widgetcontainer.innerHTML = widgetmark
    this.RegisterWidgetInfoBox(widgetSize);
    console.log(widgetcontainer)
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
    var widgetInfoButton = jQuery("#info-button-widget");
    var widgetInfoBox = jQuery(".widget-hovercard-large");
    var widgetBox = jQuery(".large-widget")

    console.log(widgetInfoButton)
    var offset = widgetInfoButton.offset();

    widgetInfoBox.remove();
    jQuery("body").append(widgetInfoBox);

    if (jQuery(window).width() < 480) {

      offset.left = offset.left - widgetInfoBox.width() / 2;
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

      offset.left = offset.left -  widgetBox.outerWidth() / 2;
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
     return jQuery(e.target).hasClass("large") ||
     jQuery(e.target).hasClass("widget-hovercard-large") ||
     jQuery(e.target).is("#info-button-widget");
  },


  RegisterWidgetInfoBox : function() {
    console.log('it begins YEASS')
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
  let widgetSize = document.currentScript.getAttribute('widgetSize')
  let lang = document.currentScript.getAttribute('lang')
  Co2okWidgetXL.merchantCompensations(div, merchantId, widgetSize, widgetColor, lang)
}

jQuery(document).ready(function() {
  console.log("CO2ok is fighting climate change!")
  Co2okWidgetXL.loadResources()
  // Co2okWidgetXL.insertInfoHoverHtml(widgetSize);
})