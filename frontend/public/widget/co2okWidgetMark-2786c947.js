/* eslint-disable no-console */
/* global ga, jQuery*/
//VELA
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
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-defaultUsp.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-2786c947.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)

	  	var images = [`${this.SITE_HOST}/widget/vela/cfsButtonEN-VL.svg`,
			`${this.SITE_HOST}/widget/cfsButtonEN.svg`,
			`${this.SITE_HOST}/widget/hovercard/CO_world.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_box.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_seedling.png`,
			`${this.SITE_HOST}/widget/hovercard/CO_trees.png`,
			`${this.SITE_HOST}/static/logo.png`,
			`${this.SITE_HOST}/widget/hovercard/co2-projects.jpg`,
			`${this.SITE_HOST}/static/info.svg`,
			`${this.SITE_HOST}/widget/large-wiget-airplane.png`,
			`${this.SITE_HOST}/widget/vela/VL_heart.png`,
			`${this.SITE_HOST}/widget/vela/VL_info_white.png`

		]

    for (var img of images) {
      result = this.preloadImage(img)
	  }
	},

	merchantCompensations: function (merchantId) {
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
		xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=${merchantId}`, true)
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
    // position: relative;
    // top: 3px;
    // margin-right: 3px;
		//bottom footer
		let cfsHtml = `
			<img class="cfs_hover_target_footer" style="position: relative; top: 20px;" src="${this.SITE_HOST}/widget/vela/cfsButtonEN-VL.svg">
		`
		jQuery(".footer__credits").append(cfsHtml)

		//cart page by payment icons
	// 	if (window.location.toString().includes('cart')) {
	// 		var cfsHtmlCart = `
	// 		<br><img class="cfs_hover_target_cart" src="${this.SITE_HOST}/widget/cfsButtonEN.svg" style="width: 160px; height: 60px; margin-left: 25%; margin-top: 0px;">
	// 	`
	// 	} else {
	// 		var cfsHtmlCart = `
	// 			<br><img class="cfs_hover_target_cart" src="${this.SITE_HOST}/widget/cfsButtonEN.svg" style="width: 160px; height: 60px; margin-left: 25%;">
	// 		`
	// 	}
	// 	//place cfs only on ajax cart not in footer again

	// 	if (jQuery(".payment-icons").parent().eq(0).hasClass('cart-popup-inner')) {
	// 		jQuery(".payment-icons").parent().eq(0).append(cfsHtmlCart)
	// 	}
	},

	/** inserts UPS's for VELA */
	uspInsertion: function () {

		//product page specific ups
		if (window.location.toString().includes('/product')) {
			//green heart
			let productUsp = `
				<img class="co2ok-usp-product" src="${this.SITE_HOST}/widget/vela/VL_heart.png">
			`
			jQuery(".swym-fave-count").after(productUsp);
    }
		// 	//product description
		// 	let productDesc = jQuery(".product-short-description")[0].childNodes
		// 	let productText = `
    //         <br><u class="product-climate-friendly"><i class="wishlist-icon icon-heart" style="color: #26B43D"></i> Climate friendly product 🛈</u>
		// 	`
		// 	productDesc[1].innerHTML += productText
		// }

		//added marquee text
    jQuery('p.navbar-item')[0].innerHTML += ` 💚 Always climate friendly <i class="wishlist-icon icon-heart" style="color: #26B43D"></i> <img class="co2ok-marquee-info" style="height: 20px; margin-left: 5px;" src="${this.SITE_HOST}/widget/vela/VL_info_white.png">`
    jQuery('#shopify-section-header__top-bar p').css("margin-top", "16px");
        // setTimeout(function(){
        //     let marquee = jQuery("#fs-progress");
        //     if (marquee[0].innerHTML == "You Get Free Shipping!") {
        //         let marqueeText = ` Always climate friendly <i class="wishlist-icon icon-heart" style="color: #26B43D"></i>`
        //         marquee[0].innerHTML += marqueeText
        //     } else {
        //         let marqueeText = `, always climate friendly <i class="wishlist-icon icon-heart" style="color: #26B43D"></i>`
        //         marquee[0].innerHTML += marqueeText
        //     }
        // }, 2000);
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
					<p class="co2ok-mobile-header desktop-hidden co2ok-small">Our Planet Promise</p>
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


					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-two">
						<p class="sub-header left co2ok-small">${titleTwo}</p>
						<p class="widget-text-block left co2ok-small co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
						<img class="png-img-large left-align-img co2ok-plant co2ok-small" src="${this.SITE_HOST}/widget/hovercard/CO_seedling.png">
					</div>

					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-three">
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
		jQuery('footer').before(infoHoverHtml)
	},

	widgetGenerator: function (totalCompensatedData) {

	  if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0') {
			console.log('hammer time!')
			return
	  }

    var decimalsCompensation = 1;
		if (totalCompensatedData < 100)
			var compensationAmount  = 2.3;
		else {
			if (totalCompensatedData > 99999)
				decimalsCompensation = 0;
			var compensationAmount  = totalCompensatedData / 1000;
		}

		var compensatietekst = `VELA Apparel cares <br>about the climate<br>  This shop prevented <br><span style="line-height: 100%;" id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br><span style="margin-top:-5px!important;">emissions</span>`;
    var vliegen = "flying";

		let widgetmark = `
			<div class="large-widget">
			<span class ="large-widget-right-green"></span>
			<svg id= "half-circle" style="width: 160px;" > <circle cx="95" cy="64.6" r="62.6" fill="white">/></svg>
			<p id="large-widget-text-vela">${compensatietekst}</p>
			<p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
			<img id="co2ok-logo" style="margin-top: 95px;" src= "${this.SITE_HOST}/static/logo-gray.png">
			<img id="info-button-widget" style="margin-top: 95px;" class="info-button-widget widget-large" src= "${this.SITE_HOST}/static/info-gray.svg">
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
		if (window.location.toString() === "https://velaapparel.com/" || window.location.toString() === "https://velaapparel.com/?co2ok_ab=show") {
			Co2okWidget.widgetTrustmarkGenerator(compensationAmount);
		}
	},

	/** Inserts pharagraph and impact calc on product page */
	widgetTrustmarkGenerator: function(compensationAmount) {

		let widgetmark = `
			<div class="btn_shop_co2ok">

				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
				<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
				<span> <strong>${(compensationAmount.toFixed(1))}</strong>t CO₂ reduction </span>
				</div>

			</div>

		`
		let newRowHtml;

		var sectionCss = jQuery("#main").find('section:eq(1)').find('div:eq(1)');
        if (!Co2okWidget.isMobile()) {
            sectionCss.css({display: "flex", "flex-direction": "row", "width": "90%", "margin": "auto"});
            newRowHtml = `
			<div class="row" id="row-co2ok" style="width: 55%">
				<div id="col-co2ok" class="col small-12 large-12">
					<div class="col-inner">
						<h3 class="lead" data-padding="5px"><em><span style="font-weight: 400; font-family: tofino; font-size: 65%;" data-line-height="1rem">
							Vela is comitted to minimizing their climate impact by offering sustainable, climate friendly solutions for their products.
							To further their commitment, your purchase will be shipped with as little climate impact as possible!</span></em></h3>
						<div id='widgetContainer' style='width:180px;height:auto;display:flex;flex-direction:row;justify-content:center;float: right;'></div>
					</div>
				</div>
			</div>`
        } else {
            sectionCss.css({display: "flex", "flex-direction": "column", "width": "100%", "margin": "auto"});
            newRowHtml = `
			<div class="row" id="row-co2ok" style="width: 100%">
				<div id="col-co2ok" class="col small-12 large-12">
					<div class="col-inner">
						<h3 class="lead" data-padding="5px"><em><span style="font-weight: 400; font-family: tofino; font-size: 65%;" data-line-height="1rem">
							Vela is comitted to minimizing their climate impact by offering sustainable, climate friendly solutions for their products.
							To further their commitment, your purchase will be shipped with as little climate impact as possible!</span></em></h3>
						<div id='widgetContainer' style='width:360px;height:auto;display:flex;flex-direction:row;justify-content:center;float: right;'></div>
					</div>
				</div>
			</div>`;
        }
        
		var trustMarkInsertion = jQuery("#main").find('section:eq(1)').find('div:eq(1)').find('div:eq(0)');
        
	    jQuery(newRowHtml).insertAfter(trustMarkInsertion)
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

    googleAnalyticsEvent : function(element_id) {
        if (element_id == '.widget-large')
            ga('CO2ok_widget.send', 'event', 'interaction', 'widget_large_'+Co2okWidget.platform);
        else if (element_id == '.widget-small')
            ga('CO2ok_widget.send', 'event', 'interaction', 'widget_small_'+Co2okWidget.platform);
        else if (element_id == '.product-climate-friendly')
            ga('CO2ok_widget.send', 'event', 'interaction', 'product_climate_friendly_'+Co2okWidget.platform);
        else if (element_id == '.co2ok-usp-product')
            ga('CO2ok_widget.send', 'event', 'interaction', 'product_heart_'+Co2okWidget.platform);
        else if (element_id == '.cfs_hover_target_footer')
            ga('CO2ok_widget.send', 'event', 'interaction', 'cfs_footer_'+Co2okWidget.platform);
        else if (element_id == '.cfs_hover_target_cart')
            ga('CO2ok_widget.send', 'event', 'interaction', 'cfs_cart_'+Co2okWidget.platform);
        else if (element_id == '.co2ok-marquee-info')
            ga('CO2ok_widget.send', 'event', 'interaction', 'marquee_'+Co2okWidget.platform);
    },

	placeWidgetInfoBox : function(element_id) {
		var elementBox = jQuery(element_id);
		var infoHoverBox = jQuery(".widget-hovercard-small");
		var offset = elementBox.offset();
		var windowWidth = jQuery(window).width();

    infoHoverBox.remove();
		jQuery("body").append(infoHoverBox);
    if (element_id === ".widget-large") {
      offset.left -= infoHoverBox.width() / 2;
      if ( offset.left < 0) offset.left = 10;
      offset.top = offset.top - infoHoverBox.height() + 6;
      if (offset.top < 0) {
        offset.top = offset.top + (infoHoverBox.height() + elementBox.width() / 2) + 6;
      }
    } else if (element_id == '.widget-small' || element_id == '.co2ok-marquee-info') {
            offset.left -= infoHoverBox.width() / 2;
            offset.top -= infoHoverBox.height();
		} else if (element_id == '.cfs_hover_target_footer') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
			}
		} else if (element_id == '.co2ok-usp-product') {
			offset.left -= infoHoverBox.width() / 2 - elementBox.width() / 2;
			offset.top -= infoHoverBox.height();
		} else if (element_id == '.product-climate-friendly') {
			offset.left -= infoHoverBox.width() / 3;
			offset.top -= infoHoverBox.height() - 300;
		} else if (element_id == '.cfs_hover_target_cart') {
				offset.left -= 155;
				offset.top = offset.top - infoHoverBox.height();
		}
		else
			return ;

	  var e = window.event;
	  var posX = e.clientX;

	  if (offset.left < 0 && posX < windowWidth / 2) offset.left = 10;
	  if (offset.left < 0 && posX > windowWidth / 2) offset.left = windowWidth - 360;
	  if (offset.top < 0) offset.top = 10;
	  if (offset.top > screen.height - infoHoverBox.height()) offset.top = (screen.height - 200) - infoHoverBox.height();
		infoHoverBox.css({
			top: offset.top,
			left: offset.left,
			margin: "0",
			transform: "none"
		  });
	},

	ShowWidgetInfoBox  : function(element_id) {
        // Prevents analytics event from triggering more than once
        if (jQuery('.widget-hovercard-small').hasClass('infobox-hidden')) {
            Co2okWidget.googleAnalyticsEvent(element_id);
        }
	  jQuery(".widget-hovercard-small").removeClass('infobox-hidden')
	  jQuery(".widget-hovercard-small").addClass('ShowWidgetInfoBox')
	},

	hideWidgetInfoBox : function() {
	  jQuery(".widget-hovercard-small").removeClass('ShowWidgetInfoBox')
	  jQuery(".widget-hovercard-small").addClass('infobox-hidden')
	},

	modalRegex: function(e)
	{
	  if (jQuery(e.target).hasClass("cfs_hover_target_footer"))
			return ('.cfs_hover_target_footer');
		else if (jQuery(e.target).hasClass("exit-area"))
			return ('.exit-area')
		else if (jQuery(e.target).hasClass("exit-area-span"))
			return ('.exit-area-span')
	  	else if (jQuery(e.target).hasClass("co2ok-small"))
			return ('.co2ok-small')
		else if (jQuery(e.target).hasClass("widget-small"))
			return ('.widget-small')
		else if (jQuery(e.target).hasClass("product-climate-friendly"))
				return ('.product-climate-friendly')
		else if (jQuery(e.target).hasClass("cfs_hover_target_cart"))
				return ('.cfs_hover_target_cart')
    else if (jQuery(e.target).hasClass("widget-large"))
      return ('.widget-large')
		else if (jQuery(e.target).hasClass("co2ok-usp-product"))
			return ('.co2ok-usp-product')
		else if (jQuery(e.target).hasClass("co2ok-marquee-info"))
			return ('.co2ok-marquee-info')
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
				Co2okWidget.ShowWidgetInfoBox(element_id);
		  	}
	  });

      let documentClick;
      jQuery('body').on('touchstart', function() {
          documentClick = true;
      });
      jQuery('body').on('touchmove', function() {
          documentClick = false;
      });
      jQuery('body').on('click touchend', function(e) {
          if (e.type == "click") documentClick = true;
          if (documentClick){
              element_id = Co2okWidget.modalRegex(e);
              if (element_id === '.exit-area') {
                  //prevents opening of cart on closing of hovercards
                  if (e.detail === 1) {
                      e.stopImmediatePropagation();
                      Co2okWidget.hideWidgetInfoBox();
                  }
                } else if (element_id) {
                  Co2okWidget.ShowWidgetInfoBox(element_id);
                  Co2okWidget.placeWidgetInfoBox(element_id);
                }
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
					Co2okWidget.ShowWidgetInfoBox(element_id);
					Co2okWidget.placeWidgetInfoBox(element_id);
				}
			});
	  }
	},

	manualABSwitch: async function() {
		// Manual AB-switch
		var urlParams = new URLSearchParams(window.location.search);
		var co2ok_AB_param = urlParams.get('co2ok_ab');
		let co2ok_AB_test = localStorage.getItem('co2okAB');

		if (co2ok_AB_test === null) {
			setTimeout(function() { Co2okWidget.manualABSwitch() }, 50);
		} else if (co2ok_AB_param == 'show') {
				console.log('Co2ok widget ON manually!')
				return true;
			} else if (co2ok_AB_param == 'hide') {
				console.log('Co2ok widget OFF manually!')
				return false;
			} else if (co2ok_AB_test == 'hide') {
				return false;
			}
			return true;
	},

    initializeGA: function() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-108940950-8', 'auto', 'CO2ok_widget');
		ga('CO2ok_widget.send', 'pageview');
        Co2okWidget.platform = (Co2okWidget.isMobile()) ? "mobile" : "desktop";
	},

	jQueryLoadDefer: function() {
		if (window.jQuery) {
			Co2okWidget.insertHovercardHTML();
			Co2okWidget.uspInsertion();
			Co2okWidget.cfsTrustMarkInsertion();
			Co2okWidget.RegisterWidgetInfoBox();
            Co2okWidget.initializeGA();
			Co2okWidget.merchantCompensations('2786c947');
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
		Co2okWidget.loadResources()
    return
  }
})