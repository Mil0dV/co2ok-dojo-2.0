let Co2okWidgetXL = {

	// SITE_HOST: "https://co2ok.eco",
	SITE_HOST: "http://localhost:8080",

	getCookieValue: function (a) {
		var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
		return b ? b.pop() : '';
	},

	preloadImage: function (url) {
		var img=new Image();
		img.src=url;
	},

	loadResources: function () {

		//hovercard
		var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		
		//xl widget
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetXL-HS.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)

		//trustmark
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${SITE_HOST}/widget/co2okWidgetMark-gray.css`)
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

	merchantCompensations: function (widgetContainer, merchantId, widgetSize, widgetColor, lang) {

			// get impact from cookie if available
			let co2ok_impact = Co2okWidgetXL.getCookieValue('co2ok_impact')

			if (co2ok_impact > 1){
				// console.log('Collaborate and listen')
				if (window.location.toString().includes('sustainability')) {
					Co2okWidgetXL.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)
				} else {
					Co2okWidgetXL.trustmarkGenerator(widgetContainer, totalTransactionData);
				}
				Co2okWidgetXL.insertInfoHoverHtml(compensationAmount);
				return;
			}

			// get impact from API
			var xhr = new XMLHttpRequest();

			// let host = 'http://127.0.0.1:8000'
			let host = 'https://app.co2ok.eco'
			xhr.open('GET', `${host}/user/totalCompensationData/?merchantId=5fd605ff`, true)
			//    xhr.withCredentials = true;
				xhr.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
							// For the near future: detect large numbers, then divide and adjust kilo to ton
							// let totalTransactionData = (xhr.responseText / 1000).toFixed(1)
							let totalTransactionData = xhr.responseText
							// let totalTransactionData = 491

							document.cookie = 'co2ok_impact=' + totalTransactionData + ';max-age=86400;path="/"'
							if (window.location.toString().includes('sustainability')) {
								Co2okWidgetXL.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)
							} else {
								Co2okWidgetXL.trustmarkGenerator(widgetContainer, totalTransactionData);
							}

							// Something is fishy, let's serve up the total
							} else {
								let totalTransactionData = 22300
								if (window.location.toString().includes('sustainability')) {
									Co2okWidgetXL.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)
								} else {
									Co2okWidgetXL.trustmarkGenerator(widgetContainer, totalTransactionData);
								}
						Co2okWidgetXL.insertInfoHoverHtml(compensationAmount);
					}
			}
			xhr.send()
			//   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
	},


	//marquee insertion
	cfsMarqueeInsertion: function () {
		console.log("inside insertMarquee");
		document.querySelector('.js-marquee li:nth-child(1)').innerHTML = `NL: climate friendly shipping <img class="cfs_hover_target" src="https://co2ok.eco/widget/hutspot/cfs-hs-truck.png" style="width: 30px"> in 3-5 workings days, free over €70`;
		// var lItems = document.getElementsByClassName("js-marquee").getElementsByTagName("li");
		// var listItem.innerHTML =
		// jQuery(".js-marquee").parent().after(cfs_html)
	},

	//impact calculator widget
	insertWidget: async function() {
		console.log("inside insertWidget");
		let widget_div = `<div class="widgetContainerHS" style="margin-top:25px; margin-bottom:25px; margin-left:18px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>`

		let pagetype = window.location.pathname.split("/")[1]
		if (pagetype == "sustainability")
		{
			for (var x = 0; x < 15; x++)
			{
				//need to update this
				if (jQuery('.__fbcw__widget').length)
				{
					var FBCWElementArray = document.querySelectorAll(".__fbcw__widget");
					for (var element of FBCWElementArray) {
						if (element.offsetLeft > 0) {
							jQuery(element).after(widget_div);
							Co2okWidgetXL.merchantCompensations('widgetContainerHS', '0', 'XL', 'EN');
							return
						}
					}
				}
				await new Promise(r => setTimeout(r, 200));
			}
		}
		else
			return ;
	},

	//infohovercard to fall widgets
	insertInfoHoverHtml: function(compensationAmount) {
    var stepOne = "You are empowered to fight climate change by neutralising emissions from production of your purchase";
    var stepTwo = "This shop has committed to climate friendly delivery; all emissions are neutralised through carbon offsetting projects";
    var stepThree = `Together we offset <strong class="co2ok-widget-card">${compensationAmount .toFixed(1)} </strong>tons of CO₂ emission. This is equal to <strong class="co2ok-small">${(compensationAmount * 5000).toFixed(0)} </strong>km of flying`;
    var works = 'How do do this';

		var infoHoverHtml =
		`
			<div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-large co2ok-widget-card" id="widget-infobox-view">

        <div class="co2ok-widget-card hovercard-wrapper">
          <img alt="Production emissions" title="Production emissions" src="${SITE_HOST}/widget/hovercard/renewable_energy.png" class="co2ok-widget-card widget-info-hover-png widget-png-left">
          <p class="co2ok-widget-card widget-steps step-one widget-right"> ${stepOne} </p>
        </div>

        <div class="co2ok-widget-card hovercard-wrapper" style="margin: 20px 0px;">
          <img alt="Shipping emissions" title="Shipping emissions" src="${SITE_HOST}/widget/hovercard/green_truck.png" class="co2ok-widget-card widget-info-hover-png widget-png-right">
          <p class="co2ok-widget-card widget-steps step-two widget-left"> ${stepTwo} </p>
        </div>

        <div class="co2ok-widget-card hovercard-wrapper">
          <img alt="Production emissions" title="Production emissions" src="${SITE_HOST}/widget/hovercard/heart_plane.png" class="co2ok-widget-card widget-info-hover-png widget-png-left">
          <p class="co2ok-widget-card widget-steps step-one widget-right"> ${stepThree} </p>
        </div>

        <span class="co2ok-widget-card widget-hovercard-links">
          <a class="co2ok-widget-card widget-compensation" target="_blank" href="http://www.co2ok.eco/co2-compensatie"> ${works} </a>
        </span>
        <img class="co2ok-widget-card widget-branch-png" src="${SITE_HOST}/widget/hovercard/branch.png">

      </div>
		`
		jQuery('footer').before(infoHoverHtml)
	},

	//XL Gray widget
	widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor, lang) {
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
		var colorSuffix = "gray";

		let widgetmark = `
			<div class="large-widget">
				<span class ="large-widget-right-hutspot"></span>
				<svg id= "half-circle" style="width: 160px;"> <circle cx="95" cy="64.6" r="62.6" fill="white"> /></svg>
				<p id="large-widget-text">${compensatietekst}</p>
				<p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
				<img id="co2ok-logo" src= "${SITE_HOST}/static/logo${colorSuffix}.png">
				<img id="info-button-widget" class="info-button-widget" src= "${SITE_HOST}/static/info${colorSuffix}.svg">
				<img id="large-widget-airplane" src= "${SITE_HOST}/widget/large-wiget-airplane.png">
			</div>
		`
		var widgetContainerArray = document.getElementsByClassName('widgetContainerHS')

		// Don't try to place widget if there is no container
		if(widgetContainerArray == null){
			return
		}

		Array.from(widgetContainerArray).forEach(element => {
			if (element.offsetLeft > 0) {
				element.innerHTML = widgetmark;
			}
		});
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

		let widgetmark = `
			<div>

				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
					<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${SITE_HOST}/static/logo${colorSuffix}.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
					<span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
				</div>

			</div>
		`
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
		var windowWidth = jQuery(window).width();

		infoHoverBox.remove();
		jQuery("body").append(infoHoverBox);
		if (element_id == '.large-widget')
		{
			offset.left -= infoHoverBox.width() / 4;
			if (windowWidth <= 800)
				offset.top += elementBox.height() * 4;
			if (windowWidth <= 800)
				offsetMobile.left = -10;
			else
				offsetMobile.left -= infoHoverBox.width();
			offsetMobile.top += elementBox.height();
		}
		else if (element_id == '.usp_hover_target')
		{
			if (windowWidth >= 1121 && windowWidth < 1400)
				offset.left = windowWidth - 370;
			else
				offset.left -= 25;
			offset.top += 20;
			offsetMobile.left -= 45;
			offsetMobile.top += 20;
		}
		else if (element_id == '.cfs_hover_target')
		{
			offset.left = windowWidth - 400;
			if (offset.left < 0)
				offset.left = 5;
			offset.top -= 430;
			offsetMobile.top -= 430;
			offsetMobile.left -= infoHoverBox.width() - 10;
		}
		else
			return ;

		var e = window.event;
		var posX = e.clientX;

		if (offset.left < 0 && posX < windowWidth / 2) offset.left = 10;
		if (offset.left < 0 && posX > windowWidth / 2) offset.left = windowWidth - 360;
		if (offset.top < 0) offset.top = 10;
		if (offsetMobile.left < 0) offsetMobile.left = 5;
		if (offsetMobile.top < 0) offsetMobile.top = 10;
		if (windowWidth <= 800 && windowWidth > 480 && element_id != ".large-widget") {
			infoHoverBox.css({
				top: offsetMobile.top,
				margin: "0 auto",
				left: windowWidth - 360,
				transform: "none"
			});
		} else if (windowWidth < 480) {
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
		else if (jQuery(e.target).hasClass("info-button-widget"))
			return ('.large-widget')
		else if (jQuery(e.target).hasClass("co2ok-widget-card"))
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

// Manual AB-switch
var urlParams = new URLSearchParams(window.location.search);
var co2ok_AB_param = urlParams.get('co2ok_ab');
if (co2ok_AB_param == 'show')
{
	console.log('Co2ok ON manually!')
}
else if (co2ok_AB_param == 'hide')
{
	console.log('Co2ok OFF mannually!')
	return
}
else if (Co2okWidgetXL.getCookieValue('co2ok_ab_hide') == '0')
{
	console.log('hammer time!')
	return
}

var co2ok_fileswap_param = urlParams.get('co2ok_fileswap');
if (co2ok_fileswap_param == 'patch' || Co2okWidgetXL.getCookieValue('co2ok_fileswap') == 'swapped') {
	jQuery.getScript('http://localhost:8080/widget/co2ok_local_file.js');

	var now = new Date();
	now.setTime(now.getTime() + 1 * 3600 * 1000);

	document.cookie = 'co2ok_fileswap=swapped;expires=Thu,'+ now +';path="/"'
	return
} else if (co2ok_fileswap_param == 'unpatch') {
	document.cookie = 'co2ok_fileswap=;expires = Thu, 01 Jan 1970 00:00:00 GMT;'
}
// Co2okWidgetXL.insertInfoHoverHtml();
Co2okWidgetXL.insertWidget();
Co2okWidgetXL.insertTrustMark();
Co2okWidgetXL.cfsMarqueeInsertion();
Co2okWidgetXL.RegisterWidgetInfoBox();
})
