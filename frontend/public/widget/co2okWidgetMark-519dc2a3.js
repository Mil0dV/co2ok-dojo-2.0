/* eslint-disable no-console */
/* global ga, jQuery*/
//Douchezaak
let Co2okWidgetXL = {

    SITE_HOST: "https://co2ok.eco",
    // SITE_HOST: "http://localhost:8080",

    getCookieValue: function (a) {
      var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : '';
    },

    preloadImage: function (url) {
      var img=new Image();
      img.src=url;
    },

    loadResources: function () {
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL-DZ.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)

      images = [`${this.SITE_HOST}/widget/cfs.png`,
      `${this.SITE_HOST}/widget/DZ-globe.png`,
      `${this.SITE_HOST}/static/info-dz.svg`,
      `${this.SITE_HOST}/widget/douche.svg`,
      `${this.SITE_HOST}/widget/DZ-heart-earth_2.png`,
      `${this.SITE_HOST}/widget/box_circle.png`,
      `${this.SITE_HOST}/widget/plant_circle.png`,
      `${this.SITE_HOST}/widget/sapling_tree_circle.png`,
      `${this.SITE_HOST}/widget/douchezaak_logo.png`]

      for (img of images){
        this.preloadImage(img)
      }

    },

    merchantCompensations: function (widgetContainer, merchantId, widgetSize, widgetColor, lang) {

        // get impact from cookie if available
        let co2ok_impact = Co2okWidgetXL.getCookieValue('co2ok_impact')

        if (co2ok_impact > 1){
          // console.log('Collaborate and listen')
          Co2okWidgetXL.widgetGenerator(widgetContainer, co2ok_impact, widgetSize, widgetColor, lang)
          return
        }

        // get impact from API
        var xhr = new XMLHttpRequest();

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
                  let totalTransactionData = 22300
                  Co2okWidgetXL.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)
            }
        }
        xhr.send()
        //   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
    },

    uspInsertion: function () {
      let product_usp_html = `<li class="list__item">
        <div class="layout layout--x-small layout--center">
          <div class="layout__item layout__item--fixed usp_hover" style="width: 18px">
            <img src=https://co2ok.eco/widget/DZ-globe.png width=18px>
          </div>
          <div class="layout__item usp_hover_target">
            Shop klimaatvriendelijk
          </div>
        </div>
      </li>`

      let home_usp_html = `<li class="grid__item">
        <div class="layout layout--x-small layout--center">
          <div class="layout__item layout__item--fixed usp_hover" style="width: 24px">
            <img src=https://co2ok.eco/widget/DZ-globe.png width=24px>
          </div>
          <div class="layout__item usp_hover_target">
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
        <img class="cfs_hover_target" src="https://co2ok.eco/widget/cfs.png" style="width: 100px">
      </li>`

      jQuery(".wwk-logo--full").parent().after(cfs_html)
    },

    insertWidget: async function() {
      let widget_div = `<div class="widgetContainerDZ" style="margin-top:25px; margin-bottom:25px; margin-left:18px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>`

      let pagetype = window.location.pathname.split("/")[1]
      if (pagetype == "product" || pagetype == "product-categorie" || pagetype == "werken-bij-douchezaak" || pagetype == "badkamer-blog" || pagetype == "badkamer-showroom" || pagetype.split("-")[0] == "vacature")
      {
        for (var x = 0; x < 15; x++)
        {
          if (jQuery('.__fbcw__widget').length)
          {
            var FBCWElementArray = document.querySelectorAll(".__fbcw__widget");
            for (var element of FBCWElementArray) {
              if (element.offsetLeft > 0) {
                jQuery(element).after(widget_div);
                Co2okWidgetXL.merchantCompensations('widgetContainerDZ', '0', 'XL', 'default');
                return
              }
            }
          }
          await new Promise(r => setTimeout(r, 200));
        }
      }
      else
        return ;
    },

    insertInfoHoverHtml: function() {
      var infoHoverHtml =
      `
      <div class="co2ok_widget_infobox_container co2ok-popper infobox-hidden" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

        <div class="card-main-header">
          <img class="png-img-large left-align-img header-img" src="${this.SITE_HOST}/widget/DZ-heart-earth_2.png">
          <p class="header">Our Planet Promise</p>
        </div>

        <div class="co2ok-widget-content">

          <div class="card-sub-header left">
            <p class="sub-header">Duurzame producten</p>
          </div>
          <div class="inner-wrapper">
            <img class="png-img-large right-align-img box" src="${this.SITE_HOST}/widget/box_circle.png">
              <p class="text-block left">Douchezaak biedt hoogwaardige producten die een leven lang meegaan, en daardoor minder afval opleveren!</p>
          </div>

          <div class="card-sub-header right">
            <p class="sub-header">Neutrale verpakking & verzending</p>
          </div>
          <div class="inner-wrapper">
            <img class="png-img-large left-align-img plant" src="${this.SITE_HOST}/widget/plant_circle.png">
              <p class="text-block right" style="min-height: 58px;">Wij neutraliseren de verpakking én de verzending van uw bestelling door geld te investeren in klimaat-positieve programma's. Kortom: we planten bomen voor elke aankoop!</p>
          </div>

          <div class="card-sub-header left">
            <p class="sub-header">Neutraliseren van de productie</p>
          </div>
          <div class="inner-wrapper">
            <img class="png-img-large right-align-img tree" src="${this.SITE_HOST}/widget/sapling_tree_circle.png">
              <p class="text-block left" style="min-height: 88px;">Verder bieden we u de optie om de CO₂ die wordt uitgestoten bij de productie van uw aankoop te compenseren. Eenvoudig gezegd, plant u uw eigen bomen direct naast de onze, met slechts één druk op de knop!</p>
          </div>

          <a class="hover-link" href="#!"><img src="${this.SITE_HOST}/static/logo.png" class="co2ok_logo_default_info hover-link co2ok_logo_default_info"></a>
          <span class="hover-link">
            <a class="hover-link" style="margin-left: 36px; margin-top: 36px;" href="#!"></a>
          </span>
          <img class="douchezaak_logo" src="${this.SITE_HOST}/widget/douchezaak_logo.png">
        </div>
      </div>
      `
      jQuery('footer').before(infoHoverHtml)
    },

    widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor, lang) {
      var decimalsCompensation = 1;
      if (totalCompensatedData < 100)
        var compensationAmount  = 0.1;
      else {
        if (totalCompensatedData > 99999)
          decimalsCompensation = 0;
        var compensationAmount  = totalCompensatedData / 1000;
      }
      var compensatietekst = `We hebben <br><span id="large-widget-text-large">${compensationAmount .toFixed(decimalsCompensation)} ton CO<sub>2</sub></span><br> uitstoot voorkomen`;

      let widgetmark = `
      <div class="large-widget">
        <span class ="large-widget-right-green"></span>
        <svg id= "half-circle" style="width: 160px;"> <circle cx="95" cy="65" r="62" fill="white"> /></svg>
        <p id="large-widget-text-dz">Douchezaak geeft <br>om het klimaat!</p>
        <p id="large-widget-text">${compensatietekst}</p>
        <p id="large-widget-xvliegen">= ${(compensationAmount * 1000000 / 500) .toFixed(0)} X<br>douchen</p>
        <img id="co2ok-logo" src= "https://douchezaak.nl/wp-content/plugins/co2ok-for-woocommerce/images/logo.svg">
        <img id="info-button-widget" class="testclass info_button_widget_hover" src= "${this.SITE_HOST}/static/info-dz.svg">
        <img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/douche.svg">
      </div>
      `
      var widgetContainerArray = document.getElementsByClassName('widgetContainerDZ')

      // Don't try to place widget if there is no container
      if(widgetContainerArray == null){
        return
      }

      Array.from(widgetContainerArray).forEach(element => {
        if (element.offsetLeft > 0) {
          element.innerHTML = widgetmark;
        }
      });
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

    placeWidgetInfoBox : function(element_id) {
      var elementBox = jQuery(element_id);
      var infoHoverBox = jQuery(".co2ok_widget_infobox_container");
      var offset = elementBox.offset();
      var offsetMobile = elementBox.offset();
      var windowWidth = jQuery(window).width();

      infoHoverBox.remove();
      jQuery("body").append(infoHoverBox);
      if (element_id == '.large-widget')
      {
        offset.left -= infoHoverBox.width() / 4;
        if (windowWidth <= 800)
          offset.top += elementBox.height() * 4;
        if (windowWidth <= 800)
          offsetMobile.left = -10;
        else
          offsetMobile.left -= infoHoverBox.width();
        offsetMobile.top += elementBox.height();
      }
      else if (element_id == '.usp_hover_target')
      {
        if (windowWidth >= 1121 && windowWidth < 1400)
          offset.left = windowWidth - 370;
        else
          offset.left -= 25;
        offset.top += 20;
        offsetMobile.left -= 45;
        offsetMobile.top += 20;
      }
      else if (element_id == '.cfs_hover_target')
      {
        offset.left -= infoHoverBox.width() / 2;
        if (offset.left < 0)
          offset.left = 5;
        offset.top -= 430;
        offsetMobile.top -= 430;
        offsetMobile.left -= infoHoverBox.width() - 10;
      }
      else
        return ;

      var e = window.event;
      var posX = e.clientX;

      if (offset.left < 0 && posX < windowWidth / 2) offset.left = 10;
      if (offset.left < 0 && posX > windowWidth / 2) offset.left = windowWidth - 360;
      if (offset.top < 0) offset.top = 10;
      if (offsetMobile.left < 0) offsetMobile.left = 5;
      if (offsetMobile.top < 0) offsetMobile.top = 10;
      if (windowWidth <= 800 && windowWidth > 480 && element_id != ".large-widget") {
        infoHoverBox.css({
          top: offsetMobile.top,
          margin: "0 auto",
          left: windowWidth - 360,
          transform: "none"
        });
      } else if (windowWidth < 480) {
        infoHoverBox.css({
          top: offsetMobile.top,
          margin: "0 auto",
          left: offsetMobile.left,
          transform: "none"
        });
      } else {
          infoHoverBox.css({
            top: offset.top,
            left: offset.left,
            margin: "0",
            transform: "none"
          });
        }
    },
    ShowWidgetInfoBox  : function(element_id)
    {
      if (jQuery('.co2ok_widget_infobox_container').hasClass('infobox-hidden')) {
        Co2okWidgetXL.googleAnalyticsEvent(element_id);
      }
      jQuery(".co2ok_widget_infobox_container").removeClass('infobox-hidden')
      jQuery(".co2ok_widget_infobox_container").addClass('ShowWidgetInfoBox')
      // if (!this.isMobile() == true ) {
      //     var elmnt = document.getElementById("widget-infobox-view");
      //     elmnt.scrollIntoView(false); // false leads to bottom of the infobox
      //   }
    },

    hideWidgetInfoBox : function()
    {
      jQuery(".co2ok_widget_infobox_container").removeClass('ShowWidgetInfoBox')
      jQuery(".co2ok_widget_infobox_container").addClass('infobox-hidden')
    },

    modalRegex: function(e, element_id)
    {
      if (jQuery(e.target).hasClass("cfs_hover_target"))
        return ('.cfs_hover_target');
      else if (jQuery(e.target).hasClass("usp_hover_target"))
        return ('.usp_hover_target');
      else if (jQuery(e.target).hasClass("info_button_widget_hover"))
        return ('.large-widget')
      else if (jQuery(e.target).hasClass("png-img-large") ||
        jQuery(e.target).hasClass("co2ok_widget_infobox_container") ||
        jQuery(e.target).hasClass("logo_co2ok_widget") ||
        jQuery(e.target).hasClass("header") ||
        jQuery(e.target).hasClass("sub-header") ||
        jQuery(e.target).hasClass("text-block") ||
        jQuery(e.target).hasClass("selectable-text") ||
        jQuery(e.target).hasClass("card-main-header") ||
        jQuery(e.target).hasClass("co2ok-widget-content") ||
        jQuery(e.target).hasClass("card-content") ||
        jQuery(e.target).hasClass("card-sub-header") ||
        jQuery(e.target).hasClass("inner-wrapper") ||
        jQuery(e.target).hasClass("co2ok_widget_info") ||
        jQuery(e.target).hasClass("co2ok_widget_info_hitarea") ||
        jQuery(e.target).hasClass("hover-link") ||
        jQuery(e.target).hasClass("douchezaak_logo"))
        return (element_id);
      else
        return (null)
    },

    RegisterWidgetInfoBox : function()
    {
      var _this = this;
      var element_id = null;

      jQuery(".co2ok_widget_info_keyboardarea").focus(function(){
          _this.ShowWidgetInfoBox(element_id);
          jQuery(".first-text-to-select").focus();
      });

      jQuery('body').click(function(e)
      {
        element_id = _this.modalRegex(e, element_id);
          if (!element_id)
            _this.hideWidgetInfoBox();
          else {
            _this.ShowWidgetInfoBox(element_id);
          }
      });

      jQuery('body').on("touchstart",function(e){
        element_id = _this.modalRegex(e, element_id);
          if (!element_id)
            _this.hideWidgetInfoBox();
          else {
            _this.ShowWidgetInfoBox(element_id);
            _this.placeWidgetInfoBox(element_id);
          }
      });

      if(!this.isMobile())
      {
        jQuery(".co2ok_widget_info , .co2ok_widget_info_hitarea").mouseenter(function() {
          _this.placeWidgetInfoBox();
        });

        jQuery(document).mouseover(function(e) {
          element_id = _this.modalRegex(e, element_id);
          if (!element_id)
            _this.hideWidgetInfoBox();
          else {
            _this.ShowWidgetInfoBox(element_id);
            _this.placeWidgetInfoBox(element_id);
          }
        });
      }
    },

    googleAnalyticsEvent : function(element_id) {
      let eventName = null;
      if (element_id == '.usp_hover_target')
          eventName = `usp_hover${Co2okWidgetXL.platform}`
      else if (element_id == '.cfs_hover_target')
          eventName = `cfsfooter${Co2okWidgetXL.platform}`
      else if (element_id == '.large-widget')
          eventName = `widget_large${Co2okWidgetXL.platform}`
      if (eventName) {
          ga('CO2ok_widget.send', 'event', 'interaction', eventName);            
          ga('CO2ok_widget.send', 'pageview',  `/${eventName}`);
      }
  },

    initializeGA: function() {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-108940950-10', 'auto', 'CO2ok_widget');
      ga('CO2ok_widget.send', 'pageview');
          if (Co2okWidgetXL.isMobile())
              Co2okWidgetXL.platform = "_mobile"
          else
              Co2okWidgetXL.platform = "_desktop"
    },
}

jQuery(document).ready(function() {
  console.log("CO2ok is fighting climate change!")

  Co2okWidgetXL.loadResources()

  // Manual AB-switch
  var urlParams = new URLSearchParams(window.location.search);
  var co2ok_AB_param = urlParams.get('co2ok_ab');
  if (co2ok_AB_param == 'show')
  {
    console.log('Co2ok ON manually!')
  }
  else if (co2ok_AB_param == 'hide')
  {
    console.log('Co2ok OFF manually!')
    return
  }
  else if (Co2okWidgetXL.getCookieValue('co2ok_ab_hide') == '0')
  {
    console.log('hammer time!')
    return
  }

  var co2ok_fileswap_param = urlParams.get('co2ok_fileswap');
  if (co2ok_fileswap_param == 'patch' || Co2okWidgetXL.getCookieValue('co2ok_fileswap') == 'swapped') {
    jQuery.getScript('http://localhost:8080/widget/co2ok_local_file.js');

    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);

    document.cookie = 'co2ok_fileswap=swapped;expires=Thu,'+ now +';path="/"'
    return
  } else if (co2ok_fileswap_param == 'unpatch') {
    document.cookie = 'co2ok_fileswap=;expires = Thu, 01 Jan 1970 00:00:00 GMT;'
  }
  Co2okWidgetXL.insertInfoHoverHtml();
  Co2okWidgetXL.initializeGA();
  Co2okWidgetXL.insertWidget();
  Co2okWidgetXL.uspInsertion();
  Co2okWidgetXL.cfsTrustMarkInsertion();
  Co2okWidgetXL.RegisterWidgetInfoBox();
})
