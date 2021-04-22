// custom for Hutspot

let Co2okWidget = {

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

		//xl widget
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)

		//trustmark && hovercard
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
    document.getElementsByTagName("head")[0].appendChild(fileref)

		images = [
      `${this.SITE_HOST}/widget/hovercard/green_truck.png`,
      `${this.SITE_HOST}/static/logo.png`,
      `${this.SITE_HOST}/widget/hovercard/branch.png`,
      `${this.SITE_HOST}/widget/hovercard/heart_plant.png`,
      `${this.SITE_HOST}/widget/hovercard/renewable_energy.png`
  	]

		for (img of images){
			this.preloadImage(img)
		}

	},

	merchantCompensations: function (widgetContainer) {

			// get impact from cookie if available
			console.log("merchantCompensation")
			let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')

			console.log("co2ok_impact", co2ok_impact);
			if (co2ok_impact > 1) {
				console.log('Collaborate and listen')
				if (window.location.toString().includes('sustainability')) {
					Co2okWidget.widgetGenerator('widgetContainerXL', co2ok_impact)
				}
				Co2okWidget.trustmarkGenerator('widgetContainer', co2ok_impact);
				Co2okWidget.insertInfoHoverHtml(co2ok_impact);
				return ;
			}

			// get impact from API
			var xhr = new XMLHttpRequest();

			// let host = 'http://127.0.0.1:8000'
			let host = 'https://app.co2ok.eco'
			xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=5fd605ff`, true)
			//    xhr.withCredentials = true;
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200){
					// For the near future: detect large numbers, then divide and adjust kilo to ton
					// let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
					let totalTransactionData = xhr.responseText
					// let totalTransactionData = 491

					document.cookie = 'co2ok_impact=' + totalTransactionData + ';max-age=86400;path="/"'
					if (window.location.toString().includes('sustainability')) {
						Co2okWidget.widgetGenerator('widgetContainerXL', totalTransactionData)
					}
					Co2okWidget.trustmarkGenerator('widgetContainer', totalTransactionData);

					// Something is fishy, let's serve up the total
					} else {
						let totalTransactionData = 22300
						if (window.location.toString().includes('sustainability')) {
							Co2okWidget.widgetGenerator('widgetContainerXL', totalTransactionData)
						}
						Co2okWidget.trustmarkGenerator('widgetContainer', totalTransactionData);
					}
				}
			Co2okWidget.insertInfoHoverHtml(totalTransactionData);
			xhr.send()
			//   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
	},

	cfsPopupMutation: function() {
			var target = document.querySelector('.wl-ajax-cart-popup');
			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					var newDiv = document.getElementsByClassName('wl-ajax-cart-popup-required-for-free-shipping-amount');
					if (newDiv) {
						newDiv[0].innerText = `Enjoy climate friendly shipping 💚, free over €70 in NL`;
					}
				});
			});
			var config = {
				attributes: true,
				attributeFilter: ['style']
			};
			observer.observe(target, config);
		},

	//product shipping page insertion
	cfsProductInsertion: function () {
		element = Array.from(document.querySelectorAll('div')).find(el => el.textContent === 'Shipping cost & schedule');
		console.log(element);
		if (element) {
			document.querySelector('.content > p').innerHTML = `Enjoy climate friendly shipping, free above €70 in NL </br>Delivery in 1-3 working days in NL</br>Free 14-day returns in NL`;
		}
	},

	//marquee insertion
	cfsMarqueeInsertion: function () {
		var listItems = document.querySelector('.js-marquee').getElementsByTagName("li");
		for (var i = 0; i < listItems.length; i++) {
			if (listItems[i].innerText.startsWith('Free NL')) {
				listItems[i].innerHTML = `NL: climate friendly shipping <img src="${this.SITE_HOST}/widget/hutspot/cfs-hs-truck.png" style="width: 30px; margin-top: -6px; margin-left: 4px;"> in 3-5 workings days, free over €70`;
			}
		}
	},

	//infohovercard to fall widgets
	insertInfoHoverHtml: function(compensationAmount) {
    var stepOne = "You are empowered to fight climate change by neutralising emissions from production of your purchase";
    var stepTwo = "This shop has committed to climate friendly delivery; all emissions are neutralised through carbon offsetting projects";
    var stepThree = `Together we've offset <strong class="co2ok-widget-card">${compensationAmount} </strong>tonnes of CO₂ emissions. This is equal to <strong class="co2ok-small">${(compensationAmount * 5000).toFixed(0)} </strong>km of flying`;
    var works = 'How do do this';

		var infoHoverHtml =
		`
			<div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-large co2ok-widget-card" id="widget-infobox-view">

        <div class="co2ok-widget-card hovercard-wrapper">
          <img alt="Production emissions" title="Production emissions" src="${this.SITE_HOST}/widget/hovercard/renewable_energy.png" class="co2ok-widget-card widget-info-hover-png widget-png-left">
          <p class="co2ok-widget-card widget-steps step-one widget-right"> ${stepOne} </p>
        </div>

        <div class="co2ok-widget-card hovercard-wrapper" style="margin: 20px 0px;">
          <img alt="Shipping emissions" title="Shipping emissions" src="${this.SITE_HOST}/widget/hovercard/green_truck.png" class="co2ok-widget-card widget-info-hover-png widget-png-right">
          <p class="co2ok-widget-card widget-steps step-two widget-left"> ${stepTwo} </p>
        </div>

        <div class="co2ok-widget-card hovercard-wrapper">
          <img alt="Production emissions" title="Production emissions" src="${this.SITE_HOST}/widget/hovercard/heart_plane.png" class="co2ok-widget-card widget-info-hover-png widget-png-left">
          <p class="co2ok-widget-card widget-steps step-one widget-right"> ${stepThree} </p>
        </div>

        <span class="co2ok-widget-card widget-hovercard-links">
          <a class="co2ok-widget-card widget-compensation" target="_blank" href="http://www.co2ok.eco/co2-compensatie"> ${works} </a>
        </span>
        <img class="co2ok-widget-card widget-branch-png" src="${this.SITE_HOST}/widget/hovercard/branch.png">

      </div>
		`
		jQuery('footer').before(infoHoverHtml)
	},


	//XL Gray widget
	widgetGenerator: function (widgetContainer, totalCompensatedData) {
		var decimalsCompensation = 1;
		if (totalCompensatedData < 100)
			var compensationAmount  = 0.1;
		else {
			if (totalCompensatedData > 99999)
				decimalsCompensation = 0;
			var compensationAmount  = totalCompensatedData / 1000;
		}

    var compensatietekst = `This shop prevented <br><span id="large-widget-text-large" class="co2ok-widget-card">${compensationAmount .toFixed(decimalsCompensation)} ton CO<sub>2</sub></span><br> emission`;
    var vliegen = "flying";

		let paragraph = `
		<div id='co2ok-paragraph'>
			<p>Lowering carbon emissions is a high priority for Hutspot, together with CO₂ok we are reducing our impact. 
			Our shipping is climate friendly because Hutspot neutralises all emissions related to parcel delivery. 
			Also, we empower you to choose to neutralise the carbon emissions related to production of your order. 
			By limiting our carbon footprint together, we can fight climate change!</p>
		</div>
		`
		let widgetmark = `
			<div class="large-widget">
				<span class ="large-widget-right-hutspot"></span>
				<svg id= "half-circle" style="width: 160px;"> <circle cx="95" cy="64.6" r="62.6" fill="white"> /></svg>
				<p id="large-widget-text">${compensatietekst}</p>
				<p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
				<img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo-gray.png">
				<img id="info-button-widget" class="info-button-widget" src= "${this.SITE_HOST}/static/info-gray.svg">
				<img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
			</div>
		`

		jQuery(paragraph).appendTo(document.getElementsByClassName("article-content"))
		jQuery("<div id='widgetContainerXL' style='margin-top:25px; margin-bottom:25px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementsByClassName("article-content"))
		let widgetcontainer = document.getElementById(widgetContainer)
		widgetcontainer.innerHTML = widgetmark;
	},


	//trustmark generator
	trustmarkGenerator : function(widgetContainer, totalCompensatedData) {
		if (totalCompensatedData < 100) {
			var compensatiewidget  = 0.1;
		}
		else {
			var compensatiewidget  = totalCompensatedData / 1000;
		}

		var reductietekst = 'CO₂ reduction';
		colorSuffix = '-gray';

		let widgetmark = `
			<div>

				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
					<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo${colorSuffix}.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
					<span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
				</div>

			</div>
		`

		jQuery("<div id='widgetContainer' style='width:180px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementsByClassName("col-md-pull-4")[0])
		let widgetcontainer = document.getElementById(widgetContainer)
		widgetcontainer.innerHTML = widgetmark;
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

	placeWidgetInfoBox : function(e) {
    // console.log('Platz? Lebensraum!')
    if (jQuery(e.target).hasClass("widget-small")) {
      var widgetInfoButton = jQuery(".co2ok_widget_info");
    } else {
      var widgetInfoButton = jQuery(".info-button-widget")
    }
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
  		offset.left = offset.left - (widgetInfoBox.outerWidth() / 2 - widgetInfoButton.outerWidth()/ 2);
  		if ( offset.left < 0) offset.left = 10;
  		offset.top = offset.top - (widgetInfoButton.height()) - widgetInfoBox.height() + 10;
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
		return jQuery(e.target).hasClass("co2ok-small") ||
		jQuery(e.target).hasClass("widget-small") ||
    jQuery(e.target).hasClass("co2ok_widget_info") ||
    jQuery(e.target).hasClass("info-button-widget") ||
		jQuery(e.target).hasClass("co2ok_widget_infobox_container") ||
		jQuery(e.target).hasClass("co2ok-widget-card");
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
				else if (jQuery(e.target).hasClass("widget-small") ||
        jQuery(e.target).hasClass("info-button-widget")) {
					_this.ShowWidgetInfoBox();
					_this.placeWidgetInfoBox(e);
				}
		});

		if(!this.isMobile())
		{
			jQuery("info-button-widget, widget-small").mouseenter(function() {
				_this.placeWidgetInfoBox();
			});

			jQuery(document).mouseover(function(e) {
        element_id = _this.modalRegex(e, element_id);
				if (!element_id)
					_this.hideWidgetInfoBox();
				else if (jQuery(e.target).hasClass("widget-small") ||
        jQuery(e.target).hasClass("info-button-widget")) {
					_this.ShowWidgetInfoBox();
					_this.placeWidgetInfoBox(e);
				}
			});
		}
	}
}

jQuery(document).ready(function() {
console.log("CO2ok is fighting climate change!")

Co2okWidget.loadResources()

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
else if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0')
{
	console.log('hammer time!')
	return
}

var co2ok_fileswap_param = urlParams.get('co2ok_fileswap');
if (co2ok_fileswap_param == 'patch' || Co2okWidget.getCookieValue('co2ok_fileswap') == 'swapped') {
	jQuery.getScript('http://localhost:8080/widget/co2ok_local_file.js');

	var now = new Date();
	now.setTime(now.getTime() + 1 * 3600 * 1000);

	document.cookie = 'co2ok_fileswap=swapped;expires=Thu,'+ now +';path="/"'
	return
} else if (co2ok_fileswap_param == 'unpatch') {
	document.cookie = 'co2ok_fileswap=;expires = Thu, 01 Jan 1970 00:00:00 GMT;'
}
// Co2okWidget.insertInfoHoverHtml();
Co2okWidget.cfsMarqueeInsertion();
Co2okWidget.cfsProductInsertion();
Co2okWidget.cfsPopupMutation();
Co2okWidget.merchantCompensations();
Co2okWidget.RegisterWidgetInfoBox();
})
