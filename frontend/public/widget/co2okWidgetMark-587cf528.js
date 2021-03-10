//Pockies

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
		//css for impact calc / XL widget
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${Co2okWidget.SITE_HOST}/widget/co2okWidgetXL.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
    //css for trustmark
		var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${Co2okWidget.SITE_HOST}/widget/co2okWidgetMark-gray.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		//hovercard css
	  var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${Co2okWidget.SITE_HOST}/widget/co2okWidgetMark-projects.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)
		var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${Co2okWidget.SITE_HOST}/widget/co2okWidgetMark-587cf528.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)

	  images = [`${Co2okWidget.SITE_HOST}/widget/cfs.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_world.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_box.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_seedling.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_trees.png`,
		`${Co2okWidget.SITE_HOST}/widget/pockies/PK_logo.png`,
    `${Co2okWidget.SITE_HOST}/widget/pockies/PK_cloud.png`,
		`${Co2okWidget.SITE_HOST}/widget/pockies/PK_heart_globe_white.png`,
		`${Co2okWidget.SITE_HOST}/widget/pockies/PK_heart_globe_black.png`,
		`${Co2okWidget.SITE_HOST}/widget/static/logo-gray.png`,
		`${Co2okWidget.SITE_HOST}/static/logo.png`,
		`${Co2okWidget.SITE_HOST}/static/logo-gray.png`


		]

	  for (img of images) {
			result = await Co2okWidget.preloadImage(img)
	  }
	},

	merchantCompensations: function (lang) {

		// get impact from cookie if available
		let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')

		if (co2ok_impact > 1) {
		  // console.log('Collaborate and listen')
      Co2okWidget.trustmarkGenerator('widgetContainermark', co2ok_impact, lang)
		  return
		}

		// get impact from API
		var xhr = new XMLHttpRequest();

		// let host = 'http://127.0.0.1:8000'
		let host = 'https://app.co2ok.eco'
		xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=519dc2a3`, true)
		//    xhr.withCredentials = true;
		  xhr.onreadystatechange = function(){
			  if (Co2okWidget.readyState == 4 && Co2okWidget.status == 200){
				// For the near future: detect large numbers, then divide and adjust kilo to ton
				// let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
				let totalTransactionData = xhr.responseText
				// let totalTransactionData = 491

				document.cookie = 'co2ok_impact=' + totalTransactionData + ';max-age=86400;path="/"'
				Co2okWidget.trustmarkGenerator('widgetContainermark', totalTransactionData, lang)

				// Something is fishy, let's serve up the total
				} else {
				  let totalTransactionData = 22300
				  Co2okWidget.trustmarkGenerator('widgetContainermark', totalTransactionData, lang)
			}
		}
		xhr.send()
		//   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
	},

	/** insert CFSmark in footer and product page
	 *
	 * CFSmark inserted in footer in front of first pay icon
	 */
	cfsTrustMarkInsertion: function () {
    //payment icons in footer
		let cfsfHtml = `
    <img class="cfs_hover_target_footer" src="https://co2ok.eco/widget/cfs.png" style="height: 30px;">
		`
		jQuery(".paymentCall").prepend(cfsfHtml)
	},

	/**inserts USP
	 * USP inserted on landing page in black strip mid-way down page
	 */
  uspInsertion: function(lang) {

		var title = 'CLIMATE FRIENDLY';
		var sentence = 'We are a proud Climate Friendly Shop';
		if (lang === 'NL') {
			title = 'KLIMAATVRIENDELIJK'
			sentence = 'Wij zijn een trotse klimaatvriendelijke winkel'
		}

		let uspLandingPage = `
      <li class="item co2ok-usp-landing">
        <a class="flex text-left co2ok-usp-landing" style="width: 275px;">
          <img class="co2-usp-img co2ok-usp-landing" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_heart_globe_white.png">
          <div class="text co2ok-usp-landing"><h5>${title}</h5>
          <span class="sub-text co2ok-usp-landing">
            <p class="co2ok-usp-landing">${sentence}</p>
          </span>
          </div>
        </a>
      </li>
    `
    jQuery(".store-info").append(uspLandingPage)
  },

	/** inserts UPS on product page
	 * USP on shipping tab under product and under site USP next to product
	*/
  insertUspProductPage: function(lang) {

		let titleText = 'Climate Friendly Shipping'
		let paragraphText = 'Your purchase is shipped with as little impact on the climate as possible! The emissions that cannot be avoided are fully compensated by Pockies.'
		let productDescipt = 'Climate friendly shipping'
		if (lang === 'NL') {
			// titleText = 'Klimaatvriendelijke verzenden'
			// paragraphText = 'Met CFD worden uw pakketleveringen Klimaatvriendelijk omdat de neutralisatie van de uitstoot in onze service is inbegrepen! Als klant heeft u de mogelijkheid om de meest milieuvriendelijke leveringsoptie te kiezen. Verantwoordelijk e-commerce is nog nooit zo eenvoudig geweest!'
			productDescipt = 'Klimaatvriendelijke verzending'
		}

    //shipping tab on product pag
		let paragraph = `<p>${paragraphText}</p>`
		jQuery("#tab1551070955235").prepend(paragraph)

    let title = `
			<img class="co2-product-usp-img" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_heart_globe_black.png">
			<h4>
				${titleText}
			</h4>
			`
    jQuery("#tab1551070955235").prepend(title)


    //next to product under their own USPs
    let productIcon = `
      <div class="htusb-ui-section_0 htusb-ui-prod-static_0 co2ok_product_usp">
				<div class="htusb-ui-inline co2ok_product_usp">
					<img class="co2-truck-product-usp" src="${Co2okWidget.SITE_HOST}/widget/co2_truck.png">
				</div>
      	<div class="htusb-ui-inline co2ok_product_usp" style="text-decoration: underline;">${productDescipt}</div>
			</div>
    `
    jQuery(".product__policies").prepend(productIcon)

  },

	/** Edits text of marquee at top of webpage */
	marqueeInsertion: function () {
    newMarqueeText = "CLIMATE FRIENDLY SHIPPING 💚: free over €50, otherwise €4.99 (all countries)"
    jQuery(".middle-hdr").html(newMarqueeText)
	},

	insertHovercardHTML: function (lang) {

		let stepOne = 'Pockies is committed to minimizing the climate impact of their products by offering sustainable, climate friendly solutions for their products. We (CO2ok) help Pockies to reduce CO2 emissions as much as possible.';
		let stepTwo = 'To further their commitment, your purchase is shipped with as little climate impact as possible! The emissions that cannot be avoided are fully compensated by Pockies.';
		let stepThree = 'Furthermore, CO2ok offers you the possibility to directly offset the CO2 emissions of your purchase with one click. The compensated money goes to CO2 compensation projects of FairClimateFund and Atmosfair that are Gold Standard certified.';
		let imageDesc = 'Not only the climate benefits: we also realize less deforestation and health benefits through less smoke and toxic carbon monoxide.';
		let button = 'How we do this'
		if (lang === 'NL') {
			stepOne = "Pockies zet zich in om de impact van hun producten op het klimaat te minimaliseren door duurzame, klimaatvriendelijke oplossingen voor hun producten aan te bieden. Wij (CO2ok) helpen ze om de overblijvende CO2-uitstoot nog verder te verminderen.";
			stepTwo = "Ook wordt je aankoop verzonden met zo weinig mogelijk impact op het klimaat! De uitstoot die niet vermeden kan worden, wordt volledig gecompenseerd door Pockies.";
			stepThree = "Verder bieden we je de mogelijkheid om de CO2-uitstoot van uw aankoop met één klik direct te compenseren. Het gecompenseerde geld gaat naar CO2 compensatieprojecten van FairClimateFund en Atmosfair die Gold Standard gecertificeerd zijn.";
			imageDesc = "Niet alleen het klimaat profiteert: we realiseren zo ook minder ontbossing en gezondheidsvoordelen door minder rook en giftige koolmonoxide"
			button = 'Hoe we dit doen'
		}

    let infoHoverHtml = `

			<div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-small co2ok-small" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

				<div class="mobile mobile-bar desktop-hidden co2ok-small" style="background-color: #43b364;">
					<p class="mobile-header desktop-hidden co2ok-small">Pockies's Planet Promise</p>
					<span class="exit-area-span co2ok-small">
						<p class="exit-area desktop-hidden co2ok-small"> X </p>
					</span>
				</div>

				<div class="co2ok-widget-content co2ok-small">
					<div class="card-main-header mobile-hidden co2ok-small">
						<img class="png-img-large mobile-hidden left-align-img header-img co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_world.png">
						<p class="header mobile-hidden co2ok-small" style="color: #43b364;">Pockies's Planet Promise</p>
					</div>

					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-one co2ok-small">
						<img class="png-img-large right-align-img co2ok-box co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_box.png">
						<p class="sub-header right co2ok-small" style="color: #239DCC;">Duurzame producten</p>
						<p class="widget-wrapper right widget-text-block left co2ok-small"> ${stepOne} </p>
					</div>


					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-two">
						<p class="sub-header left co2ok-small" style="color: #239DCC;">Neutrale verpakking & verzending</p>
						<p class="widget-text-block left co2ok-small co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
						<img class="png-img-large left-align-img co2ok-plant co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_seedling.png">
					</div>

					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-three">
						<img class="png-img-large right-align-img co2ok-tree co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_trees.png">
						<p class="sub-header right co2ok-small" style="color: #239DCC;">Neutraliseren van de productie</p>
						<p class="widget-text-block right co2ok-small"> ${stepThree} </p>
					</div>

					<div class="co2-compensation-projects co2ok-small">
						<img class="co2-project-img co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/co2-projects.jpg">
						<p class="co2-project-img-text co2ok-small"> ${imageDesc} </p>
					</div>

					<span class="usp-button-hovercard-links co2ok-small" style="height:28px">
						<img class="usp-logo-hovercard co2ok-small"  target=blank href="http://www.co2ok.eco/co2-compensatie" src="${Co2okWidget.SITE_HOST}/static/logo.png">
						<a class="usp-co2ok-hovercard-button co2ok-small"  target=blank href="http://www.co2ok.eco/co2-compensatie"> ${button}
							<img class="usp-branch-png co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/hovercard/branch.png">
						</a>
				</span>

				</div>
			</div>

		`
		jQuery('footer').before(infoHoverHtml)
	},

	//trustmark widget
	trustmarkGenerator: function (widgetContainer, totalCompensatedData, lang) {

	  if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0') {
			console.log('hammer time!')
			return
	  }

	  // Dit moet nog ff mooier als we dit nog willen gebruiken, anders kan het weg.
	  if (totalCompensatedData < 100) {
			var compensatiewidget  = 0.1;
	  } else {
			var compensatiewidget  = totalCompensatedData / 1000;
	  }

		if (lang === 'NL') {
			var reductietekst = 'CO₂ reductie';
		} else {
			var reductietekst = 'CO₂ reduction';
		}
		let widgetmark = `
			<div>
				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
          <span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo-gray.png"></span>
        </div>
        <div class="caption_co2ok_widget co2ok_widget_info widget-small">
          <span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
        </div>
			</div>
		`
	  // let widgetcontainer = document.getElementById(widgetContainer)

		jQuery("<div id='widgetContainermark' style='width:180px;height:auto;display:flex;flex-direction:row;align-items:center; margin-top: 10px;'></div>").appendTo(document.getElementById("nav_menu-1561010286273"))
		let widgetcontainer = document.getElementById(widgetContainer)
		widgetcontainer.innerHTML = widgetmark;
		this.RegisterWidgetInfoBox();

	  // Don't try to place widget if there is no container
	  if(widgetcontainer == null){
			return
	  }

	  widgetcontainer.innerHTML = widgetmark
	  Co2okWidget.RegisterWidgetInfoBox();

		//places impact cal on mvo page
		if (window.location.toString().includes('mvo')) {
			Co2okWidget.widgetGenerator(totalCompensatedData, lang)
		}
	},

	//XL impact calc widget
	widgetGenerator: function (totalCompensatedData, lang) {

		var decimalsCompensation = 1;
    if (totalCompensatedData < 100) {
      var compensationAmount  = 0.1;

    } else {
      if (totalCompensatedData > 9999) {
        decimalsCompensation = 0;
      }
      var compensationAmount  = totalCompensatedData / 1000;
    }
		if (lang === 'NL') {
			var compensatietekst = `geeft om het klimaat! We hebben voorkomen <br><span id="large-widget-text-large" class="co2ok-widget-card">${compensationAmount .toFixed(decimalsCompensation)} t CO<sub>2</sub></span><br> uitstoot`;
			var vliegen = "van wasgoed";
		} else {
			var compensatietekst = `cares about the climate! We prevented <br><span id="large-widget-text-large" class="co2ok-widget-card">${compensationAmount .toFixed(decimalsCompensation)} t CO<sub>2</sub></span><br> emissions`;
			var vliegen = "of laundry";
		}

		let widgetmark = `
			<div class="large-widget">
				<span class ="large-widget-right-pockies"></span>
				<svg id= "half-circle" style="width: 160px;"> <circle cx="95" cy="64.6" r="62.6" fill="white"> /></svg>
				<img class="co2-widget-company-logo" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_logo.png">
				<p id="large-widget-text">${compensatietekst}</p>
				<p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
				<img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo-gray.png">
				<img id="info-button-widget" class="widget-large" src="${this.SITE_HOST}/static/info-PK.svg">
				<img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/pockies/PK_laundry.png">
			</div>
		`

		jQuery("<div id='widgetContainerXL' style='margin-top:25px; margin-bottom:25px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementsByClassName("rte"))
		let widgetcontainer = document.getElementById('widgetContainerXL')
		widgetcontainer.innerHTML = widgetmark;
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
    var infoHoverBox = jQuery(".widget-hovercard-small")
	  var offset = elementBox.offset();
		var windowWidth = jQuery(window).width();
		var y = event.clientY;

	  infoHoverBox.remove();

		jQuery("body").append(infoHoverBox);
    if (element_id == '.widget-large' || element_id == '.co2ok_product_usp') {
      offset.left -= infoHoverBox.width() / 2;
    } else if (element_id == '.widget-small') {
			offset.left -= infoHoverBox.width() / 4;
			if (windowWidth <= 800)
		  	offset.top += elementBox.height() * 4;
			if ((offset.top + infoHoverBox.height()  < jQuery(window).height())) {
				offset.top += infoHoverBox.height();
			} else {
        offset.top -= infoHoverBox.height();
      }
	  } else if (element_id == '.cfs_hover_target') {
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
		// } else if (element_id == '.cfs_hover_target_footer') {
		// 	offset.left -= infoHoverBox.width() / 2;
		// 	if (offset.left < 0) {
		// 		offset.left = 5;
		// 	}
		// 	offset.top -= infoHoverBox.height();
		}  else if (element_id === '.co2ok-usp-landing') {
			var offsetHold = offset.top;
			offset.top -= infoHoverBox.height() / 2;
			if (y + infoHoverBox.height() / 2 > jQuery(window).height()) {
				offset.top = offsetHold - infoHoverBox.height();
			}
			if (y - infoHoverBox.height() / 2  < 0) {
				offset.top -= (y - infoHoverBox.height() / 2) - 80;
			}
			if (offset.left + infoHoverBox.width() > jQuery(window).width()) {
				offset.left -= ((offset.left + infoHoverBox.width()) - jQuery(window).width() + 35) ;
			}
		} else
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
	  else if (jQuery(e.target).hasClass("co2ok-small"))
			return ('.co2ok-small')
		else if (jQuery(e.target).hasClass("widget-small"))
			return ('.widget-small')
    else if (jQuery(e.target).hasClass("widget-large"))
      return ('.widget-large')
		else if (jQuery(e.target).hasClass("co2ok_product_usp"))
			return ('.co2ok_product_usp')
		else if (jQuery(e.target).hasClass("co2ok-usp-landing")) {
			return ('.co2ok-usp-landing')
		}
	},

	RegisterWidgetInfoBox : function()
	{
	  var _Co2okWidget = Co2okWidget;
	  var element_id = null;

	  jQuery('body').click(function(e) {
			element_id = _Co2okWidget.modalRegex(e);
		  if (!element_id || element_id === '.exit-area'|| jQuery(e.target).hasClass("exit-area")) {
				_Co2okWidget.hideWidgetInfoBox();

			} else {
				_Co2okWidget.ShowWidgetInfoBox();
		  }
	  });

	  jQuery('body').on("touchstart",function(e){
		element_id = _Co2okWidget.modalRegex(e);
		  if (!element_id || element_id === '.exit-area'|| jQuery(e.target).hasClass("exit-area"))
			_Co2okWidget.hideWidgetInfoBox();
		  else {
			_Co2okWidget.ShowWidgetInfoBox();
			_Co2okWidget.placeWidgetInfoBox(element_id);
		  }
	  });

	  if(!Co2okWidget.isMobile())
	  {
			jQuery(".co2ok_widget_info , .co2ok_widget_info_hitarea").mouseenter(function() {
				_Co2okWidget.placeWidgetInfoBox();
			});

			jQuery(document).mouseover(function(e) {
				element_id = _Co2okWidget.modalRegex(e);
				if (!element_id || element_id === '.exit-area'|| jQuery(e.target).hasClass("exit-area")) {
					_Co2okWidget.hideWidgetInfoBox();
				} else {
					_Co2okWidget.ShowWidgetInfoBox();
					_Co2okWidget.placeWidgetInfoBox(element_id);
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
		if (co2ok_AB_test === null) {
			setTimeout(function() { Co2okWidget.manualABSwitch() }, 50);
		} else {
			if (co2ok_AB_param == 'show') {
				console.log('Co2ok ON widget manually!')
				return true;
			} else if (co2ok_AB_param == 'hide') {
				console.log('Co2ok OFF widget manually!')
				return false;
			} else if (co2ok_AB_test === 0) {
				return false;
			}
			return true;
		}

	},

	jQueryLoadDefer: function() {
    if (window.jQuery) {
			Co2okWidget.marqueeInsertion();
			let lang = 'EN'
			if (window.location.toString().includes('nl')) {
				lang = 'NL';
			}
      if (window.location.toString().includes('products')) {
				Co2okWidget.insertUspProductPage(lang);
      }
      Co2okWidget.uspInsertion(lang);
			// Co2okWidget.cfsTrustMarkInsertion();
      Co2okWidget.insertHovercardHTML(lang);
			Co2okWidget.RegisterWidgetInfoBox();
			Co2okWidget.merchantCompensations(lang);
    } else {
      setTimeout(function() { Co2okWidget.jQueryLoadDefer(script) }, 50);
    }
  }

}

Co2okWidget.manualABSwitch()
.then(abSwitch => {
  if (abSwitch === true) {
    Co2okWidget.loadResources()
		.then(_  => Co2okWidget.jQueryLoadDefer())
  } else {
    return
  }
})

