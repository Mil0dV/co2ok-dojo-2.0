// kabloom

let Co2okWidget = {

	SITE_HOST: "https://co2ok.eco",
	// SITE_HOST: "http://localhost:8080",

	getCookieValue: function (a) {
	  var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
	  return b ? b.pop() : '';
	},

	preloadImage: function (url) {
		return new Promise(resolve => {
			var img = new Image();
			img.src = url;
			resolve('resolved');
		});
	},

	loadResources: async function () {
    //css for XL widget
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)
		//css for trustmark
		// var fileref=document.createElement("link")
		// fileref.setAttribute("rel", "stylesheet")
		// fileref.setAttribute("type", "text/css")
		// fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
		// document.getElementsByTagName("head")[0].appendChild(fileref)
		//hovercard css
	  var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-projects.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)

	  images = [`${this.SITE_HOST}/widget/cfs.png`,
	  `${this.SITE_HOST}/widget/kabloom/KB_world.png`,
	  `${this.SITE_HOST}/widget/kabloom/KB_box.png`,
	  `${this.SITE_HOST}/widget/kabloom/KB_seedling.png`,
	  `${this.SITE_HOST}/widget/kabloom/KB_trees.png`,
		`${this.SITE_HOST}/widget/kabloom/KB_logo.png`,
    `${this.SITE_HOST}/widget/kabloom/treeslogo.png`,
    `${this.SITE_HOST}/widget/kabloom/KB_heart.png`
		]

	  for (img of images) {
			result = await this.preloadImage(img)
	  }
	},

	merchantCompensations: function () {

		// get impact from cookie if available
		let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')

		if (co2ok_impact > 1) {
		  // console.log('Collaborate and listen')
      Co2okWidget.widgetGenerator(co2ok_impact)
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
				Co2okWidget.widgetGenerator(totalTransactionData)

				// Something is fishy, let's serve up the total
				} else {
				  let totalTransactionData = 22300
				  Co2okWidget.widgetGenerator(totalTransactionData)
			}
		}
		xhr.send()
		//   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
	},

	/** insert CFSmark in cart, home and product page
	 *
	 * CFSmark inserted in footer next to last pay icon and on product page next to last pay icons
	 */
	cfsTrustMarkInsertion: function () {

    //product page cfs insertion
    let cfstHtml = `
      <img class="cfs_hover_target" src="${this.SITE_HOST}/widget/kabloom/KB_cfs_2.png" style="width: 100px;">
    `
    jQuery(".img-block").append(cfstHtml)

    //crate/cart page cfs insertion
    let cfscHtml = `
      <img class="cfs_hover_cart_target" src="${this.SITE_HOST}/widget/cfs.png" style="width: 100px; height: 48px;">
    `
    jQuery('button[name="calc_shipping"]').before(cfscHtml)
	},

	/** inserts usp on landing page */
	uspInsertion: function () {

    let uspHtml = `
      <div class="icon">
        <img class="co2ok_usp_icon_header" src="${this.SITE_HOST}/widget/kabloom/KB_heart.png" style="width: 120px !important; max-width: 120px !important; height: 120px !important;">
				</div>
				`
        // <p class="co2ok_usp_text" style="font-weight: bolder;font-size: 12px;width: 105px;text-align: center;margin: auto; line-height: 13px;color: #6d7533;">CLIMATE FRIENDLY SHIPPING</p>
		jQuery(".icons-container").append(uspHtml)

  },

	insertHovercardHTML: function() {

		var stepOne = "Woonliving biedt hoogwaardige producten die een leven lang meegaan, en daardoor minder afval opleveren!";
		var stepTwo = "Wij neutraliseren de verpakking én de verzending van uw bestelling door geld te investeren in klimaat-positieve programma's. Kortom: we planten bomen voor elke aankoop!";
		var stepThree = "Verder bieden we u de optie om de CO₂ die wordt uitgestoten bij de productie van uw aankoop te compenseren. Eenvoudig gezegd, plant u uw eigen bomen direct naast de onze, met slechts één druk op de knop!";
		var co2Projects = "We ondersteunen verschillende CO₂-compensatie-projecten, gecoördineerd door Atmosfair en Fair Climate Fund. Deze zijn gecertificeerd met de CDM Gold Standard, de strengste norm voor projecten voor klimaatbescherming."
		var imageDesc = "Niet alleen het klimaat profiteert: we realiseren zo ook minder ontbossing en gezondheidsvoordelen door minder rook en giftige koolmonoxide"

    let infoHoverHtml = `

			<div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-large co2ok-large" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none; height: 730px;">

				<div class="mobile mobile-bar desktop-hidden co2ok-large" style="background-color: #dc3078">
					<p class="mobile-header desktop-hidden co2ok-large">Our Planet Promise</p>
					<span class="exit-area-span">
						<p class="exit-area desktop-hidden co2ok-large"> X </p>
					</span>
				</div>

				<div class="co2ok-widget-content co2ok-large">
          <div class="card-main-header mobile-hidden co2ok-large" style="color: #76862D;">
            <img class="png-img-large mobile-hidden left-align-img header-img co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_world.png">
            <p class="header mobile-hidden co2ok-large">Our Planet Promise</p>
          </div>

          <div class="co2ok-widget-wrapper co2ok-large co2ok-header-one">
						<img class="png-img-large right-align-img co2ok-box co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_box.png">
            <p class="sub-header right co2ok-large" style="color: #dc3077;">Duurzame producten</p>
						<p class="widget-wrapper right widget-text-block left co2ok-large"> ${stepOne} </p>
          </div>


          <div class="co2ok-widget-wrapper co2ok-large">
            <p class="sub-header left co2ok-large" style="color: #dc3077;">Neutrale verpakking & verzending</p>
						<p class="widget-text-block left co2ok-large co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
						<img class="png-img-large left-align-img co2ok-plant co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_seedling.png">
          </div>

          <div class="co2ok-widget-wrapper co2ok-large">
						<img class="png-img-large right-align-img co2ok-tree co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_trees.png">
            <p class="sub-header right co2ok-large" style="color: #dc3077;">Neutraliseren van de productie</p>
						<p class="widget-text-block right co2ok-large"> ${stepThree} </p>
          </div>

          <div class="co2ok-widget-wrapper co2ok-large">
            <p class="sub-header right co2ok-large" style="color: #dc3077;">CO₂-compensatieprojecten</p>
						<p class="widget-text-block right co2ok-large" style="width: 90% !important;"> ${co2Projects} </p>
          </div>

          <div class="co2-compensation-projects co2ok-large">
            <img class="co2-project-img co2ok-large" src="${this.SITE_HOST}/widget/co2_projects.jpg">
            <p class="co2-project-img-text co2ok-large"> ${imageDesc} </p>
          </div>

          <div class="co2ok-logos co2ok-large">
            <img src="${this.SITE_HOST}/static/logo.png" href="https://www.co2ok.eco/projects" class="co2ok-logo co2ok-large">
            <img class="feat-company-logo co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_logo.png">
            <img class="treesforall-logo co2ok-large" src="${this.SITE_HOST}/widget/logotrees.png">
          </div>

				</div>
      </div>

		`
		jQuery('#footer').before(infoHoverHtml)
	},

  /** Inserts impact calculator on
   *
   *
   */

	widgetGenerator: function (totalCompensatedData) {

    var decimalsCompensation = 1;
    if (totalCompensatedData < 100) {
      var compensationAmount  = 0.1;

    } else {
      if (totalCompensatedData > 9999) {
        decimalsCompensation = 0;
      }
      var compensationAmount  = totalCompensatedData / 1000;
    }

    var compensatietekst = `This shop prevented <br><span id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> emissions`;
    var vliegen = "flying";
    var circleSize = '> <circle cx="95" cy="64.6" r="62.6" fill="white">';

    let widgetXL = `

        <div class="large-widget">
          <span class ="large-widget-right-green"></span>
          <svg id= "half-circle" style="width: 160px;" ${circleSize} /></svg>
          <p id="large-widget-text">${compensatietekst}</p>
          <p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
          <img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo.png">
          <img id="info-button-widget" class="info-button-widget widget-large" src= "${this.SITE_HOST}/static/info.svg">
          <img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
      </div>
    `

    jQuery("<div id='widgetContainerXL' style='margin-top:25px; margin-bottom:25px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementsByClassName("content-container"))
    let widgetcontainer = document.getElementById('widgetContainerXL')
    widgetcontainer.innerHTML = widgetXL;
    this.RegisterWidgetInfoBox();
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
	  var infoHoverBox = jQuery(".widget-hovercard-large");
	  var offset = elementBox.offset();
		var windowWidth = jQuery(window).width();
		var y = event.clientY;

	  infoHoverBox.remove();
		jQuery("body").append(infoHoverBox);
	  if (element_id == '.co2ok_usp_icon_header' || element_id == '.cfs_hover_cart_target' || element_id == '.cfs_hover_target') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
			}
			offset.top += 40;
			//protection for hovercard clipping off window
			if (y + infoHoverBox.height() > jQuery(window).height()) {
				offset.top -= (y + infoHoverBox.height()) - jQuery(window).height();
				offset.top -= 30;
			}
    }
    else if (element_id == '.widget-large') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
      }
      if (y - infoHoverBox.height() > 0) {
        offset.top -= infoHoverBox.height();
      }
		}
	  else
			return ;

	  var e = window.event;
	  var posX = e.clientX;

	  if (offset.left < 0 && posX < windowWidth / 2) offset.left = 10;
	  if (offset.left < 0 && posX > windowWidth / 2) offset.left = windowWidth - 360;
	  if (offset.top < 0) offset.top = 10;
    infoHoverBox.css({
    top: offset.top,
    left: offset.left,
    margin: "0",
    transform: "none"
    });
	},
	ShowWidgetInfoBox  : function()
	{
	  jQuery(".widget-hovercard-large").removeClass('infobox-hidden')
	  jQuery(".widget-hovercard-large").addClass('ShowWidgetInfoBox')
	},

	hideWidgetInfoBox : function() {
	  jQuery(".widget-hovercard-large").removeClass('ShowWidgetInfoBox')
	  jQuery(".widget-hovercard-large").addClass('infobox-hidden')
	},

	modalRegex: function(e) {
    if (jQuery(e.target).hasClass("co2ok-large"))
      return ('.co2ok-large')
    else if (jQuery(e.target).hasClass("widget-large"))
      return ('.widget-large')
	  else if (jQuery(e.target).hasClass("co2ok_usp_icon_header"))
      return ('.co2ok_usp_icon_header');
    else if (jQuery(e.target).hasClass("cfs_hover_cart_target"))
      return ('.cfs_hover_cart_target');
    else if (jQuery(e.target).hasClass("cfs_hover_target"))
			return ('.cfs_hover_target');
		else if (jQuery(e.target).hasClass("exit-area-span"))
			return ('.exit-area-span')
	},

	RegisterWidgetInfoBox : function() {
	  var _this = this;
    var element_id = null;

	  jQuery('body').click(function(e) {
			element_id = _this.modalRegex(e);
		  if (!element_id || element_id === '.exit-area-span') {
				_this.hideWidgetInfoBox();

			} else {
				_this.ShowWidgetInfoBox();
		  }
	  });

	  jQuery('body').on("touchstart",function(e){
		element_id = _this.modalRegex(e);
		  if (!element_id || element_id === '.exit-area-span') {
        _this.hideWidgetInfoBox();
      }
		  else {
			_this.ShowWidgetInfoBox();
			_this.placeWidgetInfoBox(element_id);
		  }
	  });

	  if(!this.isMobile()) {

			jQuery(document).mouseover(function(e) {
        element_id = _this.modalRegex(e);
				if (!element_id || element_id === '.exit-area-span') {
					_this.hideWidgetInfoBox();
				} else {
					_this.ShowWidgetInfoBox();
					_this.placeWidgetInfoBox(element_id);
				}
			});
	  }
	},

	manualABSwitch: async function() {
    // Manual AB-switch
    var urlParams = new URLSearchParams(window.location.search);
    var co2ok_AB_param = urlParams.get('co2ok_ab');
    if (co2ok_AB_param == 'show') {
      console.log('Co2ok ON manually!')
    } else if (co2ok_AB_param == 'hide') {
      console.log('Co2ok OFF mannually!')
      return false;
    } else if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0') {
      console.log('hammer time!')
      return false;
		}

    var co2ok_fileswap_param = urlParams.get('co2ok_fileswap');
		if (co2ok_fileswap_param == 'patch' || Co2okWidget.getCookieValue('co2ok_fileswap') == 'swapped') {
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

	jQueryLoadDefer: function() {
    if (window.jQuery) {
      Co2okWidget.insertHovercardHTML();
			Co2okWidget.uspInsertion();
			Co2okWidget.cfsTrustMarkInsertion();
      Co2okWidget.RegisterWidgetInfoBox();
      if (window.location.toString().includes('https://kabloom.co.uk/about/')) {
        Co2okWidget.merchantCompensations();
      }
    } else {
      setTimeout(function() { Co2okWidget.jQueryLoadDefer(script) }, 50);
    }
  }

}

Co2okWidget.manualABSwitch()
.then(abSwitch => {
	console.log("abSwitch", abSwitch)
  if (abSwitch === true) {
    Co2okWidget.loadResources()
		.then(_  => Co2okWidget.jQueryLoadDefer())
  } else {
    return
  }
})