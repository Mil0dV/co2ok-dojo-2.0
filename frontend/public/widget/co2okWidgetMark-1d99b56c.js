//VELA

let Co2okWidget = {

	// SITE_HOST: "https://co2ok.eco",
	SITE_HOST: "http://localhost:8080",

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

	loadResources: function () {
		//css for trustmark
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL-gray.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)
		//default projects hovercard css
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetmark-defaultUsp.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)

	  	var images = [`${this.SITE_HOST}/widget/cfs.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_world.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_box.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_seedling.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_trees.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_logo.png`,
			`${this.SITE_HOST}/static/logo.png`,
			`${this.SITE_HOST}/widget/hovercard/co2-projects.jpg`,
			`${this.SITE_HOST}/static/info.svg`,
			`${this.SITE_HOST}/widget/large-wiget-airplane.png`,
			`${this.SITE_HOST}/widget/vela/VL_heart.png`

		]

	  for (var img of images) {
			result = this.preloadImage(img)
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

	/** insert CFSmark in footer and product page
	 *
	 * CFSmark inserted in footer next to last pay icon and on product page next to last pay icons
	 */
	cfsTrustMarkInsertion: function () {

		//bottom footer
		let cfsHtml = `
			<img class="cfs_hover_target_footer" src="${this.SITE_HOST}/widget/cfs-gray.png" style="width: 100px; height: 48px; margin-left: 8px;">
		`
		jQuery(".footer-primary").after(cfsHtml)

	},

	/** inserts UPS's for VELA */
	uspInsertion: function () {

		//product page specific ups
		if (window.location.toString().includes('/product')) {
			//green heart
			let productUsp = `
				<img class="co2ok-usp-product" src="${this.SITE_HOST}/widget/vela/VL_heart.png">
			`
			jQuery(".wc-stripe-clear").before(productUsp)

			//product description
			let productDesc = jQuery(".product-short-description")[0].childNodes
			let productText = `
				<br><i class="wishlist-icon icon-heart" style="color: #26B43D"></i> Climate friendly product
			`
			productDesc[1].innerHTML += productText
		}

		//added marquee text
		let marquee = jQuery("#fs-progress");
		let marqueeText = `, always climate friendly <i class="wishlist-icon icon-heart" style="color: #26B43D"></i>`
		marquee[0].innerHTML += marqueeText

	},

	insertHovercardHTML: function () {

    let titleOne = "Sustainable products"
		let stepOne = "This store is comitted to minimizing the climate impact of their products by offering sustainable, climate friendly solutions for their products.";
		let titleTwo = "Neutral packaging & shipping"
    let stepTwo = "To further their commitment, your purchase will be shipped with as little climate impact as possible! The emissions that cannot be avoided are fully compensated by this store.";
		let titleThree = "Neutralizing production"
    let stepThree = "We (CO2ok) offset the CO2 emissions of your purchase. The compensated money goes to CO2 Gold Standard certified compensation projects: FairClimateFund and Atmosfair.";
		let imageDesc = "Not only the climate benefits: we also realize less deforestation and increased health benefits through less smoke and toxic carbon monoxide"
		let button = "How we do this";

    let infoHoverHtml = `

			<div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-small co2ok-small" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

				<div class="mobile mobile-bar desktop-hidden co2ok-small" style="background-color: #00B67A;">
					<p class="mobile-header desktop-hidden co2ok-small">Our Planet Promise</p>
					<span class="exit-area-span co2ok-small">
						<p class="exit-area desktop-hidden co2ok-small"> X </p>
					</span>
				</div>

				<div class="co2ok-widget-content co2ok-small">
					<div class="card-main-header mobile-hidden co2ok-small">
						<img class="png-img-large mobile-hidden left-align-img header-img co2ok-small" src="${this.SITE_HOST}/widget/hovercard/CO_world.png">
						<p class="co2ok-header mobile-hidden co2ok-small">Our Planet Promise</p>
					</div>

					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-one co2ok-small" style="padding-top: 4px;">
						<img class="png-img-large right-align-img co2ok-box co2ok-small" src="${this.SITE_HOST}/widget/hovercard/CO_box.png">
						<p class="sub-header right co2ok-small">${titleOne}</p>
						<p class="widget-wrapper right widget-text-block left co2ok-small"> ${stepOne} </p>
					</div>


					<div class="co2ok-widget-wrapper co2ok-small">
						<p class="sub-header left co2ok-small">${titleTwo}</p>
						<p class="widget-text-block left co2ok-small co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
						<img class="png-img-large left-align-img co2ok-plant co2ok-small" src="${this.SITE_HOST}/widget/hovercard/CO_seedling.png">
					</div>

					<div class="co2ok-widget-wrapper co2ok-small">
						<img class="png-img-large right-align-img co2ok-tree co2ok-small" src="${this.SITE_HOST}/widget/hovercard/CO_trees.png">
						<p class="sub-header right co2ok-small">${titleThree}</p>
						<p class="widget-text-block right co2ok-small"> ${stepThree} </p>
					</div>

					<div class="co2-compensation-projects co2ok-small">
						<img class="co2-project-img co2ok-small" src="${this.SITE_HOST}/widget/hovercard/co2-projects.jpg">
						<p class="co2-project-img-text co2ok-small"> ${imageDesc} </p>
					</div>

					<span class="default-button-hovercard-links co2ok-small" style="height:28px">
						<img class="default-logo-hovercard co2ok-small"  target=blank href="http://www.co2ok.eco/co2-compensatie" src="${Co2okWidget.SITE_HOST}/static/logo.png">
						<a class="default-co2ok-hovercard-button co2ok-small"  target=blank href="http://www.co2ok.eco/co2-compensatie"> ${button}
							<img class="default-branch-png co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/hovercard/branch.png">
						</a>
					</span>

				</div>
			</div>

		`
		jQuery('#footer').before(infoHoverHtml)
	},

	widgetGenerator: function (totalCompensatedData) {

	  if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0') {
			console.log('hammer time!')
			return
	  }

    var decimalsCompensation = 1;
		if (totalCompensatedData < 100)
			var compensationAmount  = 0.1;
		else {
			if (totalCompensatedData > 99999)
				decimalsCompensation = 0;
			var compensationAmount  = totalCompensatedData / 1000;
		}

		var compensatietekst = `This shop prevents <br><span id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> emissions`;
    var vliegen = "flying";

		let widgetmark = `
			<div class="large-widget">
			<span class ="large-widget-right-green"></span>
			<svg id= "half-circle" style="width: 160px;" > <circle cx="95" cy="64.6" r="62.6" fill="white">/></svg>
			<p id="large-widget-text">${compensatietekst}</p>
			<p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
			<img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo-gray.png">
			<img id="info-button-widget" class="info-button-widget widget-large" src= "${this.SITE_HOST}/static/info-gray.svg">
			<img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
			</div>
		`

		jQuery("<div id='widgetContainerXL' style='margin-top:25px; margin-bottom:25px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementById("text-5"));
		let widgetcontainer = document.getElementById('widgetContainerXL')

    // Don't try to place widget if there is no container
	  if(widgetcontainer == null){
			return
	  }

    widgetcontainer.innerHTML = widgetmark;

		// if on product page, insert trustmark widget as well
		if (window.location.toString() === "https://velaapparel.com/") {
			Co2okWidget.widgetXLGenerator(compensationAmount);
		}
	},

	/** Inserts pharagraph and impact calc on product page */
	widgetXLGenerator: function(compensationAmount) {

    let paragraph = `
      <p>
        This store is comitted to minimizing the climate impact of their products by offering sustainable, climate friendly solutions for their products.
        To further their commitment, your purchase will be shipped with as little climate impact as possible!
      </p>
    `
		let widgetmark = `
			<div>

				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
				<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
				<span> <strong>${(compensationAmount.toFixed(1))}</strong>t CO₂ reduction </span>
				</div>

			</div>

		`

		let trustMarkInsertion = jQuery("#row-1890224791")
		console.log(" yooo ", trustMarkInsertion);

		jQuery("<div id='widgetContainer' style='width:180px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").prepend(document.getElementById("col-1755092682"))
	  let widgetcontainer = document.getElementById('widgetContainer')
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
		var infoHoverBox = jQuery(".widget-hovercard-small");
		var offset = elementBox.offset();
		var windowWidth = jQuery(window).width();
		var y = event.clientY;

    infoHoverBox.remove();
		jQuery("body").append(infoHoverBox);
    console.log("element id", element_id);
    if (element_id === ".widget-large") {
      offset.left -= infoHoverBox.width() / 2;
      if ( offset.left < 0) offset.left = 10;
      offset.top = offset.top - infoHoverBox.height() + 6;
      if (offset.top < 0) {
        offset.top = offset.top + (infoHoverBox.height() + elementBox.width() / 2) + 6;
      }
    } else if (element_id == '.widget-small') {
			offset.left -= infoHoverBox.width() / 4;
			if (windowWidth <= 800)
		  	offset.top += elementBox.height() * 4;
			if (offset.top < jQuery(window).height()) {
				offset.top += infoHoverBox.height();
			}
			//protection for hovercard clipping off window
			if (y + infoHoverBox.height() > jQuery(window).height()) {
				offset.top -= (y + infoHoverBox.height()) - jQuery(window).height();
				offset.top -= 30;
			}
		} else if (element_id == '.cfs_hover_target') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
			}
			//protection for hovercard clipping off window
			if (y + infoHoverBox.height() > jQuery(window).height()) {
				offset.top -= (y + infoHoverBox.height()) - jQuery(window).height();
				offset.top -= elementBox.height();
			}
		} else if (element_id == '.cfs_hover_target_footer') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
			}
			offset.top -= infoHoverBox.height();
		} else if (element_id == '.co2ok-usp-product') {
			offset.left -= infoHoverBox.width() / 2 - elementBox.width() / 2;
			offset.top -= infoHoverBox.height();
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
	  jQuery(".widget-hovercard-small").removeClass('infobox-hidden')
	  jQuery(".widget-hovercard-small").addClass('ShowWidgetInfoBox')
	},

	hideWidgetInfoBox : function() {
	  jQuery(".widget-hovercard-small").removeClass('ShowWidgetInfoBox')
	  jQuery(".widget-hovercard-small").addClass('infobox-hidden')
	},

	modalRegex: function(e)
	{
	  if (jQuery(e.target).hasClass("cfs_hover_target"))
			return ('.cfs_hover_target');
		else if (jQuery(e.target).hasClass("cfs_hover_target_footer"))
			return ('.cfs_hover_target_footer');
		else if (jQuery(e.target).hasClass("exit-area"))
			return ('.exit-area')
		else if (jQuery(e.target).hasClass("exit-area-span"))
			return ('.exit-area-span')
	  	else if (jQuery(e.target).hasClass("co2ok-small"))
			return ('.co2ok-small')
		else if (jQuery(e.target).hasClass("widget-small"))
			return ('.widget-small')
    else if (jQuery(e.target).hasClass("widget-large"))
      return ('.widget-large')
		else if (jQuery(e.target).hasClass("co2ok-usp-product"))
			return ('.co2ok-usp-product')
	},

	RegisterWidgetInfoBox : function()
	{
	  var element_id = null;

	  jQuery('body').click(function(e) {
			element_id = Co2okWidget.modalRegex(e);
		  	if (element_id === '.exit-area') {
				  //prevents opening of cart on closing of hovercards
				if (e.detail === 1) {
					e.stopImmediatePropagation();
					Co2okWidget.hideWidgetInfoBox();
				}
			} else if (element_id) {
				Co2okWidget.ShowWidgetInfoBox();
		  	}
	  });

	  jQuery('body').on("touchstart",function(e){
		element_id = Co2okWidget.modalRegex(e);
			if (element_id === '.exit-area') {
				//prevents opening of cart on closing of hovercards
				if (e.detail === 1) {
					e.stopImmediatePropagation();
					Co2okWidget.hideWidgetInfoBox();
				}
		  	} else if (element_id) {
				Co2okWidget.ShowWidgetInfoBox();
				Co2okWidget.placeWidgetInfoBox(element_id);
		  	}
	  });

	  if(!this.isMobile())
	  {
			jQuery(".co2ok_widget_info , .co2ok_widget_info_hitarea").mouseenter(function() {
				Co2okWidget.placeWidgetInfoBox();
			});

			jQuery(document).mouseover(function(e) {
				element_id = Co2okWidget.modalRegex(e);
				if (!element_id || element_id === '.exit-area') {
					//prevents opening of cart on closing of hovercards
					Co2okWidget.hideWidgetInfoBox();
				} else if (element_id) {
					Co2okWidget.ShowWidgetInfoBox();
					Co2okWidget.placeWidgetInfoBox(element_id);
				}
			});
	  }
	},

	manualABSwitch: async function() {
		// Manual AB-switch
		var urlParams = new URLSearchParams(window.location.search);
		var co2ok_AB_param = urlParams.get('co2ok_ab');
		let co2ok_AB_test = JSON.parse(localStorage.getItem('co2ok_ab_hide'));

		//if co2okButton.js isn't loaded, we defer
		// if (co2ok_AB_test === null) {
		// 	setTimeout(function() { Co2okWidget.manualABSwitch() }, 50);
		// } else {
			if (co2ok_AB_param == 'show') {
				console.log('Co2ok ON manually!')
				return true;
			}
			// } else if (co2ok_AB_param == 'hide') {
			// 	console.log('Co2ok OFF mannually!')
			// 	return false;
			// } else if (co2ok_AB_test === 0) {
			// 	return false;
			// }
			// return true;
		// }
    return false;

	},

	jQueryLoadDefer: function() {
		if (window.jQuery) {
			Co2okWidget.insertHovercardHTML();
			Co2okWidget.uspInsertion();
			Co2okWidget.cfsTrustMarkInsertion();
			Co2okWidget.RegisterWidgetInfoBox();
			Co2okWidget.merchantCompensations();
		} else {
			setTimeout(function() { Co2okWidget.jQueryLoadDefer() }, 50);
		}
	}

}

Co2okWidget.manualABSwitch()
.then(abSwitch => {
  if (abSwitch === true) {
    Co2okWidget.loadResources();
		Co2okWidget.jQueryLoadDefer();
  } else {
    return
  }
})

