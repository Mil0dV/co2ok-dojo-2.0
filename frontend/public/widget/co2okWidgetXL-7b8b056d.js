let Co2okWidgetXL = {

  getCookieValue: function (a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  },


  merchantCompensations: function (widgetContainer, merchantId, widgetSize, widgetColor, lang) {
    // get impact from cookie if available
    let co2ok_impact = Co2okWidgetXL.getCookieValue('co2ok_impact')

    if (co2ok_impact > 1){
      console.log('Collaborate and listen')
      Co2okWidgetXL.widgetGenerator(widgetContainer, co2ok_impact, widgetSize, widgetColor, lang)
      return
    }

    // get impact from API
    let xhr = new XMLHttpRequest();

    // let host = 'http://127.0.0.1:8000'
    let host = 'https://app.co2ok.eco'
    xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
    //    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        // For the near future: detect co2ok-large numbers, then divide and adjust kilo to ton
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
    return new Promise(resolve => {
      var img = new Image();
      img.src = url;
      resolve('resolved');
    });
  },

  /** Async function that loads resources needed for widget
   *
   * This funciton is called first after determining if A/B is showing. If shown, all
   * resources needed for the widget are loaded before the rest of the the code is ran.
   */
  loadResources: async function () {
    //css for hovercard
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)
    //css for hovercard
	  var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL-7b8b056d.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)

	  images = [
	  `${this.SITE_HOST}/widget/woonliving/WL_world.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_box.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_seedling.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_trees.png`,
		`${this.SITE_HOST}/widget/woonliving/WL_logo.png`,
		`${this.SITE_HOST}/widget/woonliving/logotrees.png`
    `${this.SITE_HOST}/widget/hovercard/co2-projects.jpg`
		]


	  for (img of images) {
			result = await this.preloadImage(img)
	  }
  },

  /** Custom widget hovercard html
   *
   * Inserted before the footer of the webpage
   */
  insertHovercardHTML: function () {

    const treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
		if (treeTotal === 0) {
			treeTotal = 151;
		}

		var stepOne = "Woonliving werkt samen met de beste en onafhankelijke designers en meubelmakers. Geen tussenpersonen en geen winkels waardoor de keten duurzamer is.  Je kunt in de webshop zien hoe milieubewust een product is, zo helpen ze je een duurzame keuze te maken.";
		var stepTwo = `Woonliving denkt goed na over hoe ze jouw producten verzenden, ze doen dit met zo min mogelijk klimaat impact, vaak zelfs zonder verpakking! Daarnaast hebben ze nu al <strong>${treeTotal}</strong> bomen geplant met Trees for All!`;
		var stepThree = "Verder bieden wij (CO2ok) je de mogelijkheid om met één klik de CO2 uitstoot van je aankoop direct te compenseren. Het geld dat je hiervoor extra betaalt gaat naar CO2 compensatieprojecten van Fair Climate Fund en Atmosfair die Gold Standard gecertificeerd zijn.";
		var imageDesc = "Niet alleen het klimaat profiteert: we realiseren zo ook minder ontbossing en gezondheidsvoordelen door minder rook en giftige koolmonoxide"

    let infoHoverHtml = `

      <div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-large co2ok-large" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

        <div class="mobile mobile-bar desktop-hidden co2ok-large" style="background-color: #00B67A;">
          <p class="mobile-header desktop-hidden co2ok-large">Woonliving's Planet Promise</p>
          <span class="exit-area-span co2ok-large">
            <p class="exit-area desktop-hidden co2ok-large"> X </p>
          </span>
        </div>

        <div class="co2ok-widget-content co2ok-large">
          <div class="card-main-header mobile-hidden co2ok-large">
            <img class="png-img-large mobile-hidden left-align-img header-img co2ok-large" src="${this.SITE_HOST}/widget/woonliving/WL_world.png">
            <p class="co2ok-header mobile-hidden co2ok-large" style="color: #00B67A; margin-bottom: 0px;">Woonliving's Planet Promise</p>
          </div>

          <div class="co2ok-widget-wrapper co2ok-header-one co2ok-large" style="padding-top: 4px;">
            <img class="png-img-large right-align-img co2ok-box co2ok-large" src="${this.SITE_HOST}/widget/woonliving/WL_box.png">
            <p class="sub-header right co2ok-large" style="color: #239DCC;">Duurzame producten</p>
            <p class="widget-wrapper right widget-text-block left co2ok-large"> ${stepOne} </p>
          </div>


          <div class="co2ok-widget-wrapper co2ok-large">
            <p class="sub-header left co2ok-large" style="color: #239DCC;">Neutrale verpakking & verzending</p>
            <p class="widget-text-block left co2ok-large co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
            <img class="png-img-large left-align-img co2ok-plant co2ok-large" src="${this.SITE_HOST}/widget/woonliving/WL_seedling.png">
          </div>

          <div class="co2ok-widget-wrapper co2ok-large">
            <img class="png-img-large right-align-img co2ok-tree co2ok-large" src="${this.SITE_HOST}/widget/woonliving/WL_trees.png">
            <p class="sub-header right co2ok-large" style="color: #239DCC;">Neutraliseren van de productie</p>
            <p class="widget-text-block right co2ok-large"> ${stepThree} </p>
          </div>

          <div class="co2-compensation-projects co2ok-large">
            <img class="co2-project-img co2ok-large" src="${this.SITE_HOST}/widget/hovercard/co2-projects.jpg">
            <p class="co2-project-img-text co2ok-large"> ${imageDesc} </p>
          </div>

          <div class="co2ok-logos co2ok-large">
            <img src="${this.SITE_HOST}/static/logo.png" href="https://www.co2ok.eco/projects" class="co2ok-logo co2ok-large">
            <img class="feat-company-logo co2ok-large" src="${this.SITE_HOST}/widget/woonliving/WL_logo.png">
            <img class="treesforall-logo co2ok-large" src="${this.SITE_HOST}/widget/woonliving/logotrees.png">
          </div>

        </div>
      </div>
		`
		jQuery('footer').before(infoHoverHtml)
	},

  widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor, lang) {

    if (Co2okWidgetXL.getCookieValue('co2ok_ab_hide') == '0') {
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

    var compensatietekst = `Deze webshop heeft <br><span id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> uitstoot voorkomen`;
    var vliegen = "vliegen";

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

    let widgetmark = `

      <div class="large-widget">
        <span class ="large-widget-right-green"></span>
        <svg id= "half-circle" style="width: 160px;" ${circleSize} /></svg>
        <p id="large-widget-text">${compensatietekst}</p>
        <p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
        <img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo${colorSuffix}.png">
        <img id="info-button-widget" class="info-button-widget co2ok-large" src= "${this.SITE_HOST}/static/info${colorSuffix}.svg">
        <img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
      </div>

    `

    Co2okWidgetXL.insertHovercardHTML();

    let widgetcontainer = document.getElementById(widgetContainer)

    // Don't try to place widget if there is no container
    if(widgetcontainer == null) {
      return
    }

    widgetcontainer.innerHTML = widgetmark
    Co2okWidgetXL.RegisterWidgetInfoBox(widgetSize);
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


  ShowWidgetInfoBox  : function() {
      // console.log("Show must go on")
    jQuery(".widget-hovercard-large").removeClass('infobox-hidden')
    jQuery(".widget-hovercard-large").addClass('ShowWidgetInfoBox')
    jQuery(".co2ok_widget_container").css({
      marginBottom: 200
    });
  },


  hideWidgetInfoBox : function() {
    jQuery(".widget-hovercard-large").removeClass('ShowWidgetInfoBox')
    jQuery(".widget-hovercard-large").addClass('infobox-hidden')
    jQuery(".co2ok_widget_container").css({
      marginBottom: 0
    });
  },


  modalRegex: function(e) {
     return jQuery(e.target).hasClass("co2ok-large") ||
     jQuery(e.target).hasClass("exit-area-span") ||
     jQuery(e.target).is("#info-button-widget");
  },


  RegisterWidgetInfoBox : function() {
    console.log('it begins')
    var _this = this;

    jQuery(".co2ok_widget_info_keyboardarea").focus(function() {
      _this.ShowWidgetInfoBox();
      jQuery(".first-text-to-select").focus();
    });

    jQuery('body').click(function(e) {
      if(!_this.modalRegex(e) || jQuery(e.target).hasClass("exit-area-span")|| jQuery(e.target).hasClass("exit-area")) {
        _this.hideWidgetInfoBox();
      } else {
        _this.ShowWidgetInfoBox();
      }
    });

    jQuery('body').on("touchstart",function(e) {
      if(!_this.modalRegex(e) || jQuery(e.target).hasClass("exit-area-span") || jQuery(e.target).hasClass("exit-area")) {
        _this.hideWidgetInfoBox();
      } else {
        _this.placeWidgetInfoBox()
        _this.ShowWidgetInfoBox();
      }
    });

    if(!this.isMobile()) {
      jQuery(".co2ok_widgets_info , .co2ok_widget_info_hitarea").mouseenter(function() {
        _this.placeWidgetInfoBox();
      });

      jQuery(document).mouseover(function(e) {
        if (!_this.modalRegex(e) || jQuery(e.target).hasClass("exit-area-span") || jQuery(e.target).hasClass("exit-area")) {
          _this.hideWidgetInfoBox();
        } else {
          _this.placeWidgetInfoBox();
          _this.ShowWidgetInfoBox();
        }
      });
    }
  },

  /** manual switch for A/B testing
   *
   * shows or hides co2 depending on url arguments
   */
  manualABSwitch: async function() {
    // Manual AB-switch
    var urlParams = new URLSearchParams(window.location.search);
    var co2ok_AB_param = urlParams.get('co2ok_ab');
    if (co2ok_AB_param == 'show') {
      console.log('Co2ok ON manually!')
    } else if (co2ok_AB_param == 'hide') {
      console.log('Co2ok OFF mannually!')
      return false;
    } else if (Co2okWidgetXL.getCookieValue('co2ok_ab_hide') == '0') {
      console.log('hammer time!')
      return false;
		}

    var co2ok_fileswap_param = urlParams.get('co2ok_fileswap');
		if (co2ok_fileswap_param == 'patch' || Co2okWidgetXL.getCookieValue('co2ok_fileswap') == 'swapped') {
			jQuery.getScript('http://localhost:8080/widget/co2ok_local_file.js');

			var now = new Date();
			now.setTime(now.getTime() + 1 * 3600 * 1000);

			document.cookie = 'co2ok_fileswap=swapped;expires=Thu,'+ now +';path="/"'
			return false;
		} else if (co2ok_fileswap_param == 'unpatch') {
			document.cookie = 'co2ok_fileswap=;expires = Thu, 01 Jan 1970 00:00:00 GMT;'
		}
		return true;
	},

  /** defers running of widget code until jQuery is loaded
   *
   * In order to avoid slowing webites and loading widget script before
   * jQuery has been loaded, this functions is recursively calls itself until
   * jQuery as been loaded on page.
   */
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

//document.currentScript must be saved here before entering loadResrouces to avoid null
//loadResouces returns a promise, this means that by .then()
//the script has stopped running and cannot be found
var  script = document.currentScript;

Co2okWidgetXL.manualABSwitch()
.then(abSwitch => {
  if (abSwitch === true) {
    Co2okWidgetXL.loadResources()
    .then(_  => Co2okWidgetXL.jQueryLoadDefer(script))
  } else {
    return
  }
})
