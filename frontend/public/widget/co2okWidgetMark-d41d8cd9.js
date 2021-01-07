// Naif staging

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

  merchantCompensations: function (widgetContainer, merchantId) {

    // get impact from cookie if available
    let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')
    console.log(co2ok_impact)

    if (co2ok_impact > 1){
      console.log('Collaborate and listen')
      Co2okWidget.widgetGenerator(widgetContainer, co2ok_impact)
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
        Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData)

        // Something is fishy, let's serve up the total
      } else {
        let totalTransactionData = 491
        Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData)
      }
    }
    xhr.send()
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
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

      if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0')
      {
        console.log('hammer time!')
        return
      }

      // Naif USP list addition (no german yet)
      if (window.location.hostname == "staging.naifcare.com" ||
          window.location.hostname == "naifcare.com"){
        jQuery(".shipping-module").append('<p><i class="icon-earth"></i><br><strong>Shop klimaatneutraal</strong><br>Met CO₂ok</p>')
        jQuery(".icon-earth").css({"color":"#545454"})
      } else {
        jQuery(".shipping-module").append('<p><i class="icon-earth"></i><br><strong>Shop climate neutral</strong><br>With CO₂ok</p>')
        jQuery(".icon-earth").css({"color":"#545454"})
      }

      if (totalCompensatedData <500) {
        var compensatiewidget  = 137.42;
        // var compensatietekst = `De bij CO₂ok aangesloten webshops hebben samen <strong> ${compensatiewidget .toFixed(1)} </strong>ton CO₂-uitstoot voorkomen <br><br>= <strong>${(compensatiewidget * 5000).toFixed(0)} </strong>km vliegen`;
      }
      else {
        var compensatiewidget  = totalCompensatedData / 1000;
        // var compensatietekst = `Deze webshop heeft <strong>${compensatiewidget .toFixed(1)} </strong>ton CO₂-uitstoot voorkomen <br><br>= <strong>${(compensatiewidget * 5000).toFixed(0)} </strong>km vliegen`
      }

      let widgetimg = `<img src = "${SITE_HOST}/widget/widgetmark-grayscale.png" width=101px>`

      var reductietekst = 'CO₂ reductie';
      var stepOne = "Je kan bij ons klimaatverandering bestrijden door de uitstoot van de productie van je aankoop te neutraliseren";
      var stepTwo = "Deze winkel zet zich in voor een klimaatvriendelijke bezorging; alle uitstoot wordt geneutraliseerd door middel van CO2-compensatieprojecten";
      var stepThree = `Samen hebben we <strong class="co2ok-small">${compensatiewidget.toFixed(1)}</strong> ton CO2-uitstoot gecompenseerd. Dit staat gelijk aan <strong class="co2ok-small">${(totalCompensatedData * 5).toFixed(0)} </strong>km  km vliegen.`;
      var works = 'Hoe we dat doen';

      let widgetmark = `

        <div>

          <div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
            <span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${SITE_HOST}/static/logo.png"></span>
          </div>
          <div class="caption_co2ok_widget co2ok_widget_info widget-small">
            <span> <strong>${compensatiewidget.toFixed(1)}</strong>t ${reductietekst} </span>
          </div>

        </div>

        <div class="co2ok_widget_infobox_container co2ok-popper hovercard-trustmark co2ok-small" id="widget-infobox-view">

          <div class="co2ok-small hovercard-wrapper">
            <img alt="Production emissions" title="Production emissions" src="${SITE_HOST}/widget/hovercard/renewable_energy.png" class="co2ok-small widget-info-hover-png widget-png-left">
            <p class="co2ok-small widget-steps step-one widget-right"> ${stepOne} </p>
          </div>

          <div class="co2ok-small hovercard-wrapper" style="margin: 20px 0px;">
            <img alt="Shipping emissions" title="Shipping emissions" src="${SITE_HOST}/widget/hovercard/green_truck.png" class="co2ok-small widget-info-hover-png widget-png-right">
            <p class="co2ok-small widget-steps step-two widget-left"> ${stepTwo} </p>
          </div>

          <div class="co2ok-small hovercard-wrapper">
            <img alt="Production emissions" title="Production emissions" src="${SITE_HOST}/widget/hovercard/heart_plane.png" class="co2ok-small widget-info-hover-png widget-png-left">
            <p class="co2ok-small widget-steps step-three widget-right"> ${stepThree} </p>
          </div>

          <span class="co2ok-small widget-hovercard-links">
            <a class="co2ok-small widget-compensation" target="_blank" href="http://www.co2ok.eco/co2-compensatie"> ${works} </a>
          </span>
          <img class="co2ok-small widget-branch-png" src="${SITE_HOST}/widget/hovercard/branch.png">

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
    return jQuery(e.target).hasClass("co2ok-small") ||
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