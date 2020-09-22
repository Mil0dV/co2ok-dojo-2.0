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
      let widget_div = `<div id="widgetContainerDZ" style="margin-top:25px; margin-bottom:25px; margin-left:18px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>`

      let pagetype = window.location.pathname.split("/")[1]
      if (pagetype == "product-categorie")
        jQuery('#egm_call_me_back-2').before(widget_div)
      else if (pagetype == "product")
        jQuery('#egm_call_me_back-3').before(widget_div)
      else if (pagetype == "werken-bij-douchezaak" || pagetype == "badkamer-blog" || pagetype == "badkamer-showroom" || pagetype.split("-")[0] == "vacature")
        {
          for (var x = 0; x < 15; x++)
          {
            if (jQuery('.__fbcw__widget').length)
              {
                jQuery('.__fbcw__widget').after(widget_div)
                break ;
              }
            await new Promise(r => setTimeout(r, 200));
          }
        }
        else
          return ;
      Co2okWidgetXL.merchantCompensations('widgetContainerDZ', '0', 'XL', 'default')
    },

    insertInfoHoverHtml: function() {
      var infoHoverHtml =
      `
      <div class="co2ok_widget_infobox_container co2ok-popper infobox-hidden" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

        <div class="card-main-header">
          <img class="svg-img-large left-align-img header-img" src="${this.SITE_HOST}/widget/DZ-heart-earth_2.png">
          <p class="header">Our Planet Promise</p>
        </div>

        <div class="co2ok-widget-content">

          <div class="card-sub-header left">
            <p class="sub-header">Duurzame Producten</p>
          </div>
          <div class="inner-wrapper">
            <img class="svg-img-large right-align-img box" src="${this.SITE_HOST}/widget/box_circle.png">
            <a href="#!" input="" type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
              <p class="text-block left">Douchezaal biedt producten die een leven lang meegaan, en daardoor minder afval opleveren!</p>
            </a>
          </div>

        <div class="card-main-header">
          <img class="svg-img-large left-align-img header-img" src="${this.SITE_HOST}/widget/DZ-heart-earth_2.png">
          <p class="header">Our Planet Promise</p>
        </div>

        <div class="co2ok-widget-content">

          <div class="card-sub-header left">
            <p class="sub-header">Duurzame producten</p>
          </div>
          <div class="inner-wrapper">
            <img class="svg-img-large right-align-img box" src="${this.SITE_HOST}/widget/box_circle.png">
            <a href="#!" input="" type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
              <p class="text-block left">Douchezaak biedt hoogwaardige producten die een leven lang meegaan, en daardoor minder afval opleveren!</p>
            </a>
          </div>

          <div class="card-sub-header right">
            <p class="sub-header">Neutrale verpakking & verzending</p>
          </div>
          <div class="inner-wrapper">
            <img class="svg-img-large left-align-img plant" src="${this.SITE_HOST}/widget/plant_circle.png">
            <a href="#!" input="" type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
              <p class="text-block right" style="min-height: 58px;">Wij neutraliseren de verpakking én de verzending van uw bestelling door geld te investeren in klimaat-positieve programma's. Kortom: we planten bomen voor elke aankoop!</p>
            </a>
          </div>

          <div class="card-sub-header left">
            <p class="sub-header">Neutraliseren van de productie</p>
          </div>
          <div class="inner-wrapper">
            <img class="svg-img-large right-align-img tree" src="${this.SITE_HOST}/widget/sapling_tree_circle.png">
            <a href="#!" input="" type="text" role="button" tabindex="0" class="selectable-text" style="outline: none; -webkit-appearance: none;">
              <p class="text-block left" style="min-height: 88px;">Verder bieden we u de optie om de CO₂ die wordt uitgestoten bij de productie van uw aankoop te compenseren. Eenvoudig gezegd, plant u uw eigen bomen direct naast de onze, met slechts één druk op de knop!</p>
            </a>
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
        <svg id= "half-circle"> <circle cx="95" cy="65" r="62" fill="white"> /></svg>
        <p id="large-widget-text-dz">Douchezaak geeft <br>om het klimaat!</p>
        <p id="large-widget-text">${compensatietekst}</p>
        <p id="large-widget-xvliegen">= ${(compensationAmount * 1000000 / 500) .toFixed(0)} X<br>douchen</p>
        <img id="co2ok-logo" src= "https://douchezaak.nl/wp-content/plugins/co2ok-for-woocommerce/images/logo.svg">
        <img id="info-button-widget" class="testclass info_button_widget_hover" src= "${this.SITE_HOST}/static/info-dz.svg">
        <img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/douche.svg">
      </div>
      `

      let widgetcontainer = document.getElementById(widgetContainer)
      // let widgetcontainer = document.getElementsByClassName('whb-empty-column')[0]

      // Don't try to place widget if there is no container
      if(widgetcontainer == null){
        return
      }

      widgetcontainer.innerHTML = widgetmark
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

      infoHoverBox.remove();
      jQuery("body").append(infoHoverBox);
      if (element_id == '.large-widget')
      {
          offset.left -= infoHoverBox.width() / 4;
          offset.top += elementBox.height() - 8;
          offsetMobile.left -= infoHoverBox.width();
          offsetMobile.top += elementBox.height();
      }
      else if (element_id == '.usp_hover_target')
      {
          offset.left -= 25;
          offset.top += 20;
          offsetMobile.left -= 45;
          offsetMobile.top += 20;
      }
      else if (element_id == '.cfs_hover_target')
      {
          offset.left -= 55;
          offset.top -= 350;
          offsetMobile.top -= 350;
          offsetMobile.left -= infoHoverBox.width() - 10;
      }
      else
        return ;

      if (offset.left < 0) offset.left = 10;
      if (offset.top < 0) offset.top = 10;
      if (offsetMobile.left < 0) offsetMobile.left = 5;
      if (offsetMobile.top < 0) offsetMobile.top = 10;

      let window_width = jQuery(window).width();
      let offset_diff = window_width - (offset.left + 350);

       if (jQuery(window).width() < 480) {
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
    ShowWidgetInfoBox  : function()
    {
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
      else if (jQuery(e.target).hasClass("svg-img") ||
        jQuery(e.target).hasClass("svg-img-large") ||
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
          _this.ShowWidgetInfoBox();
          jQuery(".first-text-to-select").focus();
      });

      jQuery('body').click(function(e)
      {
        element_id = _this.modalRegex(e, element_id);
          if (!element_id)
            _this.hideWidgetInfoBox();
          else {
            _this.ShowWidgetInfoBox();
          }
      });

      jQuery('body').on("touchstart",function(e){
        element_id = _this.modalRegex(e, element_id);
          if (!element_id)
            _this.hideWidgetInfoBox();
          else {
            _this.ShowWidgetInfoBox();
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
            _this.ShowWidgetInfoBox();
            _this.placeWidgetInfoBox(element_id);
          }
        });
      }
    }
}

jQuery(document).ready(function() {
  console.log("CO2ok is fighting climate change!")

  Co2okWidgetXL.loadResources()
  if (document.cookie.match(/^(.*;)?\s*co2ok_hide_button\s*=\s*[^;]+(.*)?$/)){
    console.log('hammer time!')
    return
  }
  Co2okWidgetXL.insertInfoHoverHtml();
  Co2okWidgetXL.insertWidget();
  Co2okWidgetXL.uspInsertion();
  Co2okWidgetXL.cfsTrustMarkInsertion();
  Co2okWidgetXL.RegisterWidgetInfoBox();
})
