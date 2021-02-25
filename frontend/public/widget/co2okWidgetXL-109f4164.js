// Woonliving XL

//dev store
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
	  fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-projects.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)

	  var images = [
	  `${this.SITE_HOST}/widget/woonliving/WL_world.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_box.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_seedling.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_trees.png`,
		`${this.SITE_HOST}/widget/woonliving/WL_logo.png`,
		`${this.SITE_HOST}/widget/woonliving/logotrees.png`
		]


	  for (var img of images) {
			result = await this.preloadImage(img)
	  }
  },


  // sleeper: function (ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // },

  // /** Retrieves total trees planted from WL site
  //  *
  //  * The tree total is filled in one by one and they is a a slight delay. In order to avoid
  //  * a miss count, sleepers and checks are needed to ensure the total trees planted match in
  //  * the hovercard and on the site.
  //  */
  // getTreeTotal: async function() {
  //   let trees = -1;
  //   let  treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
  //   while (treeTotal > trees && treeTotal >= 0) {
  //     await Co2okWidgetXL.sleeper(1000);
  //     trees = treeTotal;
  //     treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
  //     if (trees == treeTotal) {
  //       await Co2okWidgetXL.sleeper(1000);
  //       treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
  //     }
  //   }
  //   return treeTotal;
  //   // if (treeTotal === 0) {
  //   // 	treeTotal = 151;
  //   // }
  // },

  /** Custom widget hovercard html
   *
   * Inserted before the footer of the webpage
   */
  insertHovercardHTML: async function () {

		//tree counter takes a bit to load, this loop waits to retrieve number of trees planted
    // let treeTotal = Co2okWidgetXL.getTreeTotal();
    // let  treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
		// if (treeTotal === 0 ) {
  	let treeTotal = 152;
		// }

		var stepOne = "Woonliving werkt samen met de beste en onafhankelijke designers en meubelmakers. Geen tussenpersonen en geen winkels waardoor de keten duurzamer is.  Je kunt in de webshop zien hoe milieubewust een product is, zo helpen ze je een duurzame keuze te maken.";
		var stepTwo = `Jouw aankoop wordt met zo min mogelijk klimaatimpact verzonden, vaak zelfs zonder verpakking! De uitstoot die niet kan worden voorkomen, wordt volledig gecompenseerd door Woonliving. Daarnaast hebben ze nu al <strong>${treeTotal}</strong> bomen geplant met Trees for All!`;
		var stepThree = "Verder bieden wij (CO2ok) je de mogelijkheid om met één klik direct de CO2 uitstoot van je aankoop te compenseren. Het geld dat je hiervoor betaalt gaat naar CO2 compensatieprojecten van FairClimateFund en Atmosfair die Gold Standard gecertificeerd zijn.";
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
            <img class="co2-project-img co2ok-large" src="${this.SITE_HOST}/widget/co2-projects.jpg">
            <p class="co2-project-img-text co2ok-large"> ${imageDesc} </p>
          </div>

          <div class="co2ok-logos co2ok-large">
            <img src="${this.SITE_HOST}/static/logo.png" href="https://www.co2ok.eco/projects" class="co2ok-logo co2ok-large">
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
    var windowHeight = jQuery(window).height();
		var y = event.clientY;

    widgetInfoBox.remove();
    jQuery("body").append(widgetInfoBox);

    offset.left = offset.left -  widgetBox.outerWidth() / 2;
    if ( offset.left < 0) offset.left = 10;
    offset.top = offset.top - (widgetInfoButton.height()) - widgetInfoBox.height() + 6;
			offset.top += 40;
			//protection for hovercard clipping off window
			if (y + widgetInfoButton.height() > jQuery(window).height()) {
				offset.top -= (y + widgetInfoButton.height()) - jQuery(window).height();
				offset.top -= 30;
			}
    // if (offset.top < 0) {
    //   offset.top = offset.top + (widgetInfoBox.height() + widgetInfoButton.width() / 2) + 6;
    // }
    // let overflow = offset.top - widgetInfoBox.outerHeight();
    // if (overflow < 0) {
    //   offset.top -= overflow;

    // }
    widgetInfoBox.css({
      top: offset.top,
      left: offset.left,
      margin: "0",
      transform: "none"
    });
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
     jQuery(e.target).is("#info-button-widget") ||
     jQuery(e.target).hasClass("exit-area") ||
     jQuery(e.target).hasClass("exit-area-span");
  },


  RegisterWidgetInfoBox : function() {
    let element_id = null;

    element_id = Co2okWidgetXL.modalRegex(e);
    jQuery(".co2ok_widget_info_keyboardarea").focus(function() {
      Co2okWidgetXL.ShowWidgetInfoBox();
      jQuery(".first-text-to-select").focus();
    });

    jQuery('body').click(function(e) {
      if (element_id === "exit-area-span"|| element_id === "exit-area") {
       //prevents opening of cart on closing of hovercards
				if (e.detail === 1) {
					e.stopImmediatePropagation();
					Co2okWidgetXL.hideWidgetInfoBox();
				}
      } else if (element_id) {
        Co2okWidgetXL.ShowWidgetInfoBox();
      }
    });

    jQuery('body').on("touchstart",function(e) {
      if (element_id === "exit-area-span"|| element_id === "exit-area") {
        //prevents opening of cart on closing of hovercards
				if (e.detail === 1) {
					e.stopImmediatePropagation();
					Co2okWidgetXL.hideWidgetInfoBox();
				}
      } else if (element_id) {
        Co2okWidgetXL.placeWidgetInfoBox()
        Co2okWidgetXL.ShowWidgetInfoBox();
      }
    });

    if(!this.isMobile()) {
      jQuery(".co2ok_widgets_info , .co2ok_widget_info_hitarea").mouseenter(function() {
        Co2okWidgetXL.placeWidgetInfoBox();
      });

      jQuery(document).mouseover(function(e) {
        if (!element_id ||element_id === "exit-area-span"|| element_id === "exit-area") {
          //prevents opening of cart on closing of hovercard
            Co2okWidgetXL.hideWidgetInfoBox();
        } else if (element_id) {
          Co2okWidgetXL.placeWidgetInfoBox();
          Co2okWidgetXL.ShowWidgetInfoBox();
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
      let co2ok_AB_test = JSON.parse(localStorage.getItem('co2ok_ab_hide'));

      //if co2okButton.js isn't loaded, we defer
      if (co2ok_AB_test === null) {
        setTimeout(function() { Co2okWidgetXL.manualABSwitch() }, 50);
      } else {
        if (co2ok_AB_param == 'show') {
          console.log('Co2ok ON manually!')
          return true;
        } else if (co2ok_AB_param == 'hide') {
          console.log('Co2ok OFF mannually!')
          return false;
        } else if (co2ok_AB_test === 0) {
          return false;
        }
        return true;
      }

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
        let widgetColor = script.getAttribute('widgetColor')
        let lang = script.getAttribute('lang')
        Co2okWidgetXL.merchantCompensations(div, merchantId, widgetColor, lang)
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
