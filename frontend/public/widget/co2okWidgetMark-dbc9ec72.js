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
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		//hovercard css
	  var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-projects.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)
		var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-dbc9ec72.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)

	  images = [
			`${this.SITE_HOST}/widget/cfs.png`,
			`${this.SITE_HOST}/widget/kabloom/KB_world.png`,
			`${this.SITE_HOST}/widget/kabloom/KB_box.png`,
			`${this.SITE_HOST}/widget/kabloom/KB_seedling.png`,
			`${this.SITE_HOST}/widget/kabloom/KB_trees.png`,
			`${this.SITE_HOST}/widget/kabloom/KB_logo.png`,
			`${this.SITE_HOST}/widget/kabloom/KB_heart.png`,
			`${this.SITE_HOST}/static/info-kabloom.svg`,
			`${this.SITE_HOST}/widget/large-wiget-airplane.png`,
			`${this.SITE_HOST}/static/logo.png`
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
      <img class="cfs_hover_target" src="${this.SITE_HOST}/widget/kabloom/KB_heart.png" style="width: 100px;">
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

		var stepOne = "Kabloom offers recyclable, compostable, and biodegrable products that bring nature back into modernized daily life with the goal of increasing awareness around environmental crisises.";
		var stepTwo = "To further their commitment, your purchase will be shipped with as little climate impact as possible and biodegrable packaging! The emissions that cannot be avoided are fully compensated by Kabloom.";
		var stepThree = "We (CO2ok) offer you the possibility to offset the CO2 emissions of your purchase with one click. The money you pay for this goes to CO2 compensation projects of FairClimateFund and Atmosfair that are Gold Standard certified."
		var imageDesc = "Not only the climate benefits: we also realize less deforestation and health benefits through less smoke and toxic carbon monoxide."

    let infoHoverHtml = `

			<div class="co2ok_widget_infobox_container co2ok-popper co2ok-widget-hovercard co2ok-large" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none; height: 730px;">

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
            <p class="sub-header right co2ok-large" style="color: #dc3077;">Sustainable products</p>
						<p class="widget-wrapper right widget-text-block left co2ok-large"> ${stepOne} </p>
          </div>


          <div class="co2ok-widget-wrapper co2ok-large">
            <p class="sub-header left co2ok-large" style="color: #dc3077;">Neutral packing & shipping</p>
						<p class="widget-text-block left co2ok-large co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
						<img class="png-img-large left-align-img co2ok-plant co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_seedling.png">
          </div>

          <div class="co2ok-widget-wrapper co2ok-large">
						<img class="png-img-large right-align-img co2ok-tree co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_trees.png">
            <p class="sub-header right co2ok-large" style="color: #dc3077;">Neutralizing production</p>
						<p class="widget-text-block right co2ok-large"> ${stepThree} </p>
          </div>

          <div class="co2-compensation-projects co2ok-large">
            <img class="co2-project-img co2ok-large" src="${this.SITE_HOST}/widget/co2_projects.jpg">
            <p class="co2-project-img-text co2ok-large"> ${imageDesc} </p>
          </div>

          <div class="co2ok-logos co2ok-large">
            <img src="${this.SITE_HOST}/static/logo.png" href="https://www.co2ok.eco/projects" class="co2ok-logo co2ok-large">
            <img class="feat-company-logo co2ok-large" src="${this.SITE_HOST}/widget/kabloom/KB_logo.png">
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

		var compensationAmount = 11;
		var compensatietekst = `This shop prevents <br><span id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> emissions`;
		var vliegen = "flying";
		var reductietekst = 'CO₂ reduction';

		//XL widget on aobut page, if on about page
		if (window.location.toString().includes('https://kabloom.co.uk/about/')) {

			let widgetXL = `
				<div class="large-widget">
					<span class ="large-widget-right-kabloom"></span>
					<svg id= "half-circle" style="width: 160px;"> <circle cx="95" cy="64.6" r="62.6" fill="white"> /></svg>
					<p id="large-widget-text">${compensatietekst}</p>
					<p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
					<img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo-gray.png">
					<img id="info-button-widget" class="info-button-widget widget-large" src= "${this.SITE_HOST}/static/info-kabloom.svg">
					<img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
				</div>
			`

			jQuery("<div id='widgetContainerXL' style='margin-top:25px; margin-bottom:25px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementsByClassName("content-container"))
			let widgetContainerXL = document.getElementById('widgetContainerXL')
			widgetContainerXL.innerHTML = widgetXL;
		}

		let widgetmark = `
			<div>
				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
					<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
					<span> <strong>${(compensationAmount.toFixed(1))}</strong>t ${reductietekst} </span>
				</div>
			</div>
		`

		jQuery("<div id='widgetContainermark' style='width:180px;height:auto;display:flex;flex-direction:row;align-items:center;'></div>").appendTo(document.getElementsByClassName("menu-footer-column-1-container"))
		let widgetContainermark = document.getElementById('widgetContainermark')
		widgetContainermark.innerHTML = widgetmark;
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
	  var infoHoverBox = jQuery(".co2ok-widget-hovercard");
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
    else if (element_id == '.widget-large' || element_id == '.widget-small') {
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

	ShowWidgetInfoBox  : function() {
	  jQuery(".co2ok-widget-hovercard").removeClass('infobox-hidden')
	  jQuery(".co2ok-widget-hovercard").addClass('ShowWidgetInfoBox')
	},

	hideWidgetInfoBox : function() {
	  jQuery(".co2ok-widget-hovercard").removeClass('ShowWidgetInfoBox')
	  jQuery(".co2ok-widget-hovercard").addClass('infobox-hidden')
	},

	modalRegex: function(e) {
    if (jQuery(e.target).hasClass("co2ok-large"))
      return ('.co2ok-large')
    else if (jQuery(e.target).hasClass("widget-large"))
      return ('.widget-large')
		else if (jQuery(e.target).hasClass("widget-small"))
      return ('.widget-small')
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

	  jQuery('body').on("touchstart",function(e) {
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
      Co2okWidget.merchantCompensations();
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