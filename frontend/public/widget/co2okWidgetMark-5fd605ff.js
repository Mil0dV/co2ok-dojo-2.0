// custom for Hutspot

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

    let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')
    
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

      var widgetColor = 'gray'
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark.css`)
      document.getElementsByTagName("head")[0].appendChild(fileref)
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
      
      if (document.cookie.match(/^(.*;)?\s*co2ok_hide_button\s*=\s*[^;]+(.*)?$/)){
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
      lang = 'EN'

      if (lang == 'EN') {
        var reductietekst = 'CO₂ reduction'
        var compensatietekst = `This webshop prevented <strong>${compensatiewidget .toFixed(1)} </strong>tonnes of CO₂ emission <br><br>= <strong>${(compensatiewidget * 5000).toFixed(0)} </strong>km of flying`
        var how_does_it_worktekst = 'How does CO₂ offsetting work?'
        var titletekst = 'Make my purchase Climate neutral!'
      }
      else {
        var reductietekst = 'CO₂ reductie'
        var compensatietekst = `Deze webshop heeft <strong>${compensatiewidget .toFixed(1)} </strong>ton CO₂-uitstoot voorkomen <br><br>= <strong>${(compensatiewidget * 5000).toFixed(0)} </strong>km vliegen`
        var how_does_it_worktekst = 'Hoe werkt CO₂ compensatie?'
        var titletekst = 'Maak mijn aankoop klimaatneutraal'
      }
      let widgetmark = `
      <div>
      <div class="btn_co2ok_widget co2ok_widget_info" href="#">
          <span class="btn_co2ok_widget co2ok_widget_info">SHOP<img class="logo_co2ok_widget" src="${SITE_HOST}/static/logo${colorSuffix}.png"></span>
      </div>
          <div class="caption_co2ok_widget co2ok_widget_info">
              <span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
              </div>
          </div>
              
      <div class="co2ok_widget_infobox_container co2ok-popper" id="widget-infobox-view">

      <div class="widget-inner-wrapper">
      <a href="#!" input type="text" role="button" tabindex="0" class="selectable-text first-text-to-select" style="outline: none; -webkit-appearance: none;">
      <p class="widget-text-block greyBorder">${compensatietekst} </p>
      </a>
      <img alt="${titletekst}" title="${titletekst}" src="${SITE_HOST}/widget/vliegtuig_hover.png" class="widget-svg-img-large  co2ok_info_hover_image">
      </div>

      <a class="widget-hover-link" target="_blank" href="http://co2ok.eco"><img src="${SITE_HOST}/static/logo.png" class="co2ok_logo_default_info widget-hover-link co2ok_logo_default_info"></a>
      <span class="widget-hover-link">
      <a  class="widget-hover-link" target="_blank" href="http://www.co2ok.eco/co2-compensatie">${how_does_it_worktekst}</a> </span>
      </div>


      `
              // console.log(widgetimg)

      // 1. Remove widgetContainer
      document.getElementById("widgetContainer").remove()
      // 2. Append widgetcontainer to targeted div
      jQuery("<div id='widgetContainer' style='width:180px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementsByClassName("col-md-pull-4")[0])

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
