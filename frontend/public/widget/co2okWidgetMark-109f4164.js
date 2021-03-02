//Woonliving trustmark
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
		//hovercard css
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-projects.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		//extra usp/cfs css
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-109f4164.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)

	  	var images = [`${this.SITE_HOST}/widget/cfs.png`,
			`${this.SITE_HOST}/widget/woonliving/WL_world.png`,
			`${this.SITE_HOST}/widget/woonliving/WL_box.png`,
			`${this.SITE_HOST}/widget/woonliving/WL_seedling.png`,
			`${this.SITE_HOST}/widget/woonliving/WL_trees.png`,
			`${this.SITE_HOST}/widget/woonliving/WL_logo.png`,
			`${this.SITE_HOST}/static/logo.png`,
			`${this.SITE_HOST}/widget/co2-projects.jpg`,
			`${this.SITE_HOST}/static/info.svg`,
			`${this.SITE_HOST}/widget/large-wiget-airplane.png`
		]

	  for (var img of images) {
			result = await this.preloadImage(img)
	  }
	},

	merchantCompensations: function (widgetContainer) {

		// get impact from cookie if available
		let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')

		if (co2ok_impact > 1) {
		  // console.log('Collaborate and listen')
		  Co2okWidget.widgetGenerator(widgetContainer, co2ok_impact)
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

				Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData)
				// Something is fishy, let's serve up the total
				} else {
					let totalTransactionData = 22300

					Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData)
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
		let cfsHtml = `
			<img class="cfs_hover_target_footer" src="https://co2ok.eco/widget/cfs.png" style="width: 100px; height: 48px">
		`
		jQuery(".bot_footer_svg").after(cfsHtml)

		let cfsfHtml = `
			<img class="cfs_hover_target" src="https://co2ok.eco/widget/cfs.png" style="width: 100px; height: 48px">
		`
		jQuery(".pr_trust_seal").append(cfsfHtml)
	},

	/** inserts globe icon into menu */
	menuIconInsertion: function () {
		if (Co2okWidget.isMobile()) {
			let menuIconHtml = `
			<li id="item_mb_wis" class="menu-item item-level-0 menu-item-btns menu-item-wishlist co2ok-usp-menu">
				<a class="js_link_wis co2ok-usp-menu">
					<span class="iconbtns co2ok-usp-menu" style="color:#78bb9d; display: flex;">
						<p class="co2ok-usp-menu" style="color: black; display:flex; flex-direction: row;">
							Shop Klimaatvriendelijk
						</p>
					</span>
				</a>
			</li>`
			jQuery("#item_mb_nav-0").after(menuIconHtml)
		} else {
			let menuIconHtml = `
				<li id="item_b3fd8670-f170-4425-9814-e36fdd7c7563" class="menu-item type_simple co2ok-usp-menu-hover co2ok-usp-menu co2ok-usp-desktop">
					<a class="lh__1 flex al_center pr co2ok-usp-menu" target="_self">
						<i class="las la-heart co2ok-usp-menu"></i>
						Shop klimaatvriendelijk
					</a>
				</li>
			`
			jQuery(".nt_menu").append(menuIconHtml)
		}
	},


	/** Retrieves total trees planted from WL site
	 *
	 * The tree total is filled in one by one and they is a a slight delay. In order to avoid
	 * a miss count, sleepers and checks are needed to ensure the total trees planted match in
	 * the hovercard and on the site.
	 */
	// getTreeTotal: function() {
	// 	let trees = -1;
	// 	let  treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
	// 	console.log("treeTotal ", treeTotal);
	// 	if (treeTotal > trees && treeTotal >= 0) {
	// 		trees = treeTotal;
	// 		if (treeTotal == 0) {
	// 			console.log("waiting and going again");
	// 			treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
	// 			setTimeout(Co2okWidget.getTreeTotal(), 3000);

	// 		}
	// 	}
	// 	return treeTotal;
	// },

	insertHovercardHTML: function () {

		//tree counter takes a bit to load, this loop waits to retrieve number of trees planted
		// let treeTotal = Co2okWidget.getTreeTotal();
		// // let  treeTotal = jQuery(".Counter__CounterComponent-ad46g3-0").text();
		// if (treeTotal === 0 ) {
		 let treeTotal = 159;
		// }

		var stepOne = "Woonliving werkt samen met de beste en onafhankelijke designers en meubelmakers. Geen tussenpersonen en geen winkels waardoor de keten duurzamer is.  Je kunt in de webshop zien hoe milieubewust een product is, zo helpen ze je een duurzame keuze te maken.";
		var stepTwo = `Jouw aankoop wordt met zo min mogelijk klimaatimpact verzonden, vaak zelfs zonder verpakking! De uitstoot die niet kan worden voorkomen, wordt volledig gecompenseerd door Woonliving. Daarnaast hebben ze nu al <strong>${treeTotal}</strong> bomen geplant met Trees for All!`;
		var stepThree = "Verder bieden wij (CO2ok) je de mogelijkheid om met één klik direct de CO2 uitstoot van je aankoop te compenseren. Het geld dat je hiervoor betaalt gaat naar CO2 compensatieprojecten van FairClimateFund en Atmosfair die Gold Standard gecertificeerd zijn.";
		var imageDesc = "Niet alleen het klimaat profiteert: we realiseren zo ook minder ontbossing en gezondheidsvoordelen door minder rook en giftige koolmonoxide"

    	let infoHoverHtml = `

			<div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-small co2ok-small" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

				<div class="mobile mobile-bar desktop-hidden co2ok-small" style="background-color: #00B67A;">
					<p class="mobile-header desktop-hidden co2ok-small">Woonliving's Planet Promise</p>
					<span class="exit-area-span co2ok-small">
						<p class="exit-area desktop-hidden co2ok-small"> X </p>
					</span>
				</div>

				<div class="co2ok-widget-content co2ok-small">
					<div class="card-main-header mobile-hidden co2ok-small">
						<img class="png-img-large mobile-hidden left-align-img header-img co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_world.png">
						<p class="co2ok-header mobile-hidden co2ok-small" style="color: #00B67A; margin-bottom: 0px;">Woonliving's Planet Promise</p>
					</div>

					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-one co2ok-small" style="padding-top: 4px;">
						<img class="png-img-large right-align-img co2ok-box co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_box.png">
						<p class="sub-header right co2ok-small" style="color: #239DCC;">Duurzame producten</p>
						<p class="widget-wrapper right widget-text-block left co2ok-small"> ${stepOne} </p>
					</div>


					<div class="co2ok-widget-wrapper co2ok-small">
						<p class="sub-header left co2ok-small" style="color: #239DCC;">Neutrale verpakking & verzending</p>
						<p class="widget-text-block left co2ok-small co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
						<img class="png-img-large left-align-img co2ok-plant co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_seedling.png">
					</div>

					<div class="co2ok-widget-wrapper co2ok-small">
						<img class="png-img-large right-align-img co2ok-tree co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_trees.png">
						<p class="sub-header right co2ok-small" style="color: #239DCC;">Neutraliseren van de productie</p>
						<p class="widget-text-block right co2ok-small"> ${stepThree} </p>
					</div>

					<div class="co2-compensation-projects co2ok-small">
						<img class="co2-project-img co2ok-small" src="${this.SITE_HOST}/widget/co2-projects.jpg">
						<p class="co2-project-img-text co2ok-small"> ${imageDesc} </p>
					</div>

					<div class="co2ok-logos co2ok-small">
						<img src="${this.SITE_HOST}/static/logo.png" href="https://www.co2ok.eco/projects" class="co2ok-logo co2ok-small">
					</div>

				</div>
			</div>

		`
		jQuery('footer').before(infoHoverHtml)
	},

	widgetGenerator: function (widgetContainer, totalCompensatedData) {

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

		var reductietekst = 'CO₂ reductie';
		let widgetmark = `
			<div>

				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
				<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
				<span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
				</div>

			</div>

		`

	  let widgetcontainer = document.getElementById(widgetContainer)

	  // Don't try to place widget if there is no container
	  if(widgetcontainer == null){
			return
	  }

	  widgetcontainer.innerHTML = widgetmark
	  this.RegisterWidgetInfoBox();

		//if on product page, insert XL widget as well
		// if (window.location.toString().includes('products')) {
		// 	Co2okWidget.widgetXLGenerator(totalCompensatedData);

		// }
	},

	/** Inserts pharagraph and impact calc on product page */
	widgetXLGenerator: function(totalCompensatedData) {
		var decimalsCompensation = 1;
		if (totalCompensatedData < 100)
			var compensationAmount  = 0.1;
		else {
			if (totalCompensatedData > 99999)
				decimalsCompensation = 0;
			var compensationAmount  = totalCompensatedData / 1000;
		}

		var compensatietekst = `Deze webshop heeft <br><span id="large-widget-text-large" class="co2ok-large">${compensationAmount .toFixed(decimalsCompensation)}t CO<sub>2</sub></span><br> uitstoot voorkomen`;
    var vliegen = "vliegen";

		let paragraph1 = `
			<p>
				Onze vrienden van CO2ok helpen ons met het bereiken van onze duurzame doelstellingen;
				klimaatverandering bestrijden doen we samen!
				Wij compenseren bij iedere bestelling de uitstoot van de verpakking en bezorging via CO2ok. 
			</p>`

		let paragraph2 = `
			<div class='co2ok-usp-section' style="display: flex; width: 95%; padding-bottom: 16px;" >
				<p class="co2ok-paragraph" style="display: flex;">
					We bieden jou de kans om met één klik op de knop direct de productie uitstoot van je aankoop te compenseren. 
					Het geld dat je hiervoor betaalt gaat naar CO2 compensatieprojecten van oa FairClimateFund. 
					Klik <a style="display:contents;"href="https://www.atmosfair.de/en/climate-protection-projects" target=_\"blank\">hier</a> als je wilt weten waar je geld naar toe gaat. In de tool hiernaast kun je zien hoe groot onze gezamenlijke impact al is!
				</p>
				<div id='widgetContainerXL' class="co2ok-impact-calc" style='margin-top:-30px;margin-left: 50px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>
			</div>
		`
		let widgetmark = `
			<div class="large-widget">
			<span class ="large-widget-right-green"></span>
			<svg id= "half-circle" style="width: 160px;" > <circle cx="95" cy="64.6" r="62.6" fill="white">/></svg>
			<p id="large-widget-text">${compensatietekst}</p>
			<p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
			<img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo.png">
			<img id="info-button-widget" class="info-button-widget" src= "${this.SITE_HOST}/static/info.svg">
			<img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
			</div>
		`


		let insertPoint = jQuery(".sp-tab-content").eq(2).children().prev().eq(6);
		// console.log("hello there love", jQuery(".sp-tab-content").eq(2).children().prev().eq(6));
		jQuery(paragraph1).insertBefore(insertPoint);
		jQuery(paragraph2).insertAfter(insertPoint);
		// jQuery("<div id='widgetContainerXL' style='margin-top:-8px;margin-left: 50px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").append(paragraph2);

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
		var infoHoverBox = jQuery(".widget-hovercard-small");
		var offset = elementBox.offset();
		var windowWidth = jQuery(window).width();
		var y = event.clientY;

	  	infoHoverBox.remove();
		jQuery("body").append(infoHoverBox);
		if (element_id == '.widget-small') {
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
		} else if (element_id == '.co2ok-usp-menu') {
			offset.left -= elementBox.width() / 2;
			offset.top += 10;
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
		else if (jQuery(e.target).hasClass("co2ok-usp-menu"))
			return ('.co2ok-usp-menu')
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
		if (co2ok_AB_test === null) {
			setTimeout(function() { Co2okWidget.manualABSwitch() }, 50);
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

	jQueryLoadDefer: function() {
		if (window.jQuery) {
			Co2okWidget.insertHovercardHTML();
			Co2okWidget.menuIconInsertion();
			Co2okWidget.cfsTrustMarkInsertion();
			Co2okWidget.RegisterWidgetInfoBox();
			Co2okWidget.merchantCompensations('widgetContainermark');
		} else {
			setTimeout(function() { Co2okWidget.jQueryLoadDefer() }, 50);
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
