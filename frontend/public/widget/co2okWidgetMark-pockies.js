//Pockies

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
		fileref.setAttribute("href", `${Co2okWidget.SITE_HOST}/widget/co2okWidgetMark.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		//hovercard css
	  var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${Co2okWidget.SITE_HOST}/widget/co2okWidgetMark-projects.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)

	  images = [`${Co2okWidget.SITE_HOST}/widget/cfs.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_world.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_box.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_seedling.png`,
	  `${Co2okWidget.SITE_HOST}/widget/pockies/PK_trees.png`,
		`${Co2okWidget.SITE_HOST}/widget/pockies/PK_logo.png`,
    `${Co2okWidget.SITE_HOST}/widget/pockies/PK_cloud.png`,
		]

	  for (img of images) {
			result = await Co2okWidget.preloadImage(img)
	  }
	},

	merchantCompensations: function (widgetContainer) {

		// get impact from cookie if available
		let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')

		if (co2ok_impact > 1) {
		  // console.log('Collaborate and listen')
      Co2okWidget.trustmarkGenerator(widgetContainer, totalTransactionData)
      //places impact cal on mvo page
      if (window.location.toString().includes('mvo')) {
        Co2okWidget.widgetGenerator('widgetContainerXL', totalTransactionData)
      }

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
				Co2okWidget.trustmarkGenerator(widgetContainer, totalTransactionData)
        //places impact cal on mvo page
        if (window.location.toString().includes('mvo')) {
          Co2okWidget.widgetGenerator('widgetContainerXL', totalTransactionData)
        }

				// Something is fishy, let's serve up the total
				} else {
				  let totalTransactionData = 22300
				  Co2okWidget.trustmarkGenerator(widgetContainer, totalTransactionData)
          //places impact cal on mvo page
          if (window.location.toString().includes('mvo')) {
            Co2okWidget.widgetGenerator('widgetContainerXL', totalTransactionData)
          }
			}
		}
		xhr.send()
		//   xhr.setRequestHeader("Authorization", `token ${window.localStorage.getItem('userToken')}`)
	},

	uspInsertion: function () {
	  let product_usp_html = `<li class="list__item">
			<div class="layout layout--x-small layout--center">
				<div class="layout__item layout__item--fixed usp_hover" style="width: 18px">
					<img src=https://co2ok.eco/widget/DZ-globe.png width=18px>
				</div>
				<div class="layout__item usp_hover_target">
					Shop klimaatvriendelijk
				</div>
			</div>
		</li>`

	  let home_usp_html = `<li class="grid__item">
			<div class="layout layout--x-small layout--center">
				<div class="layout__item layout__item--fixed usp_hover" style="width: 24px">
					<img src=https://co2ok.eco/widget/DZ-globe.png width=24px>
				</div>
				<div class="layout__item usp_hover_target">
					Shop klimaatvriendelijk
				</div>
			</div>
		</li>`

	  if (window.location.pathname == "/") {
			jQuery('a[href$="snellelevering"]').parent().after(home_usp_html)
		} else {
			jQuery('a[href$="snellelevering"]').parent().after(product_usp_html)
		}

	},

	/** insert CFSmark in footer and product page
	 *
	 * CFSmark inserted in footer next to last pay icon and on product page next to last pay icons
	 */
	cfsTrustMarkInsertion: function () {
    // let cfsHtml = `
		// 	<img class="cfs_hover_target_footer" src="https://co2ok.eco/widget/cfs.png" height: 48px">
		// `
		// jQuery(".bot_footer_svg").after(cfsHtml)

    //payment icons in footer
		let cfsfHtml = `
    <img class="cfs_hover_target_footer" src="https://co2ok.eco/widget/cfs.png" style="height: 30px;">
		`
		jQuery(".paymentCall").prepend(cfsfHtml)
	},

  uspInsertion: function() {
    let uspLandingPage = `
      <li class="item" style="padding-left: 0px;">
        <a class=" flex text-left" style="width: 275px;">
          <img style="font-size:40px;width:50px; margin: 0 15px 0 0;" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_cloud_white.png">
          <div class="text"><h5>SHOP CLIMATE FRIENDLY</h5>
          <span class="sub-text">
            <p>We are a proud Climate Friendly Shop</p>
          </span>
          </div>
        </a>
      </li>
    `
    jQuery(".store-info").append(uspLandingPage)
  },

  insertOnProductPage: function() {
    //shipping tab on product pag
    let title = `<p><strong>Climate Friendly Shipping<strong></p>`
    jQuery("#tab1551070955235").append(title)

    let paragraph = `<p>With CFD your parcel deliveries will become Climate Friendly as neutralisation of the emissions is included in our service!
     As a customer, you have the option to choose the most environmentally friendly delivery option. Responsible e-commerce has never been this simple!</p>`
    jQuery("#tab1551070955235").append(paragraph)

    //insert under truck icons
    let productIcon = `
      <div class="htusb-ui-section_0 htusb-ui-prod-static_0">
        <div class="htusb-ui-inline">💚</div>
        <div class="htusb-ui-inline">Climate friendly shiping</div>
      </div>
    `
    // let productIcon = `
    //   <div class="htusb-ui-section_0 htusb-ui-prod-static_0"><div class="htusb-ui-inline">
    //     <img style="height: 16px; margin-top: -9px;"src="${Co2okWidget.SITE_HOST}/widget/co2_truck.png">
    //   </div>
    //   <div class="htusb-ui-inline">Climate friendly shiping</div></div>
    // `
    jQuery("#htusb_container_html_prod_generic_pricing").append(productIcon)

    //insert above ATC button
    let productCfs = `
      <img class="cfs_hover_target_footer" src="https://co2ok.eco/widget/cfs.png" style="height: 44px; margin-top: -15px;">
    `
    jQuery(".infolinks").append(productCfs)
  },

	/** inserts green heart and edit text of marquee */
	marqueeInsertion: function () {
    newMarqueeText = "FREE CLIMATE FRIENDLY SHIPPING 💚 over €50. Standard shipping: €4.99 (all countries).";
    jQuery(".middle-hdr").html(newMarqueeText)

    // newMarqueeText = `<div class="header-txt middle-hdr text-center"><i class="ad ad-telegram-plane"></i>FREE CLIMATE FRIENDLY SHIPPING <img style="height: 22px; margin-top: -9px;" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_cloud.png"> over €50. Standard shipping: €4.99 (all countries).</div>`
    // jQuery(".middle-hdr").remove()
		// jQuery(".left-hdr").after(newMarqueeText)
	},

	insertHovercardHTML: function () {

		var stepOne = "Pockies werkt samen met de beste en onafhankelijke designers en meubelmakers. Geen tussenpersonen en geen winkels waardoor de keten duurzamer is.  Je kunt in de webshop zien hoe milieubewust een product is, zo helpen ze je een duurzame keuze te maken.";
		var stepTwo = `Pockies denkt goed na over hoe ze jouw producten verzenden, ze doen dit met zo min mogelijk klimaat impact, vaak zelfs zonder verpakking! Daarnaast hebben ze nu al <strong>148</strong> bomen geplant met Trees for All!`;
		var stepThree = "Verder bieden wij (CO2ok) je de mogelijkheid om met één klik de CO2 uitstoot van je aankoop direct te compenseren. Het geld dat je hiervoor extra betaalt gaat naar CO2 compensatieprojecten van Fair Climate Fund en Atmosfair die Gold Standard gecertificeerd zijn.";
		var imageDesc = "Niet alleen het klimaat profiteert: we realiseren zo ook minder ontbossing en gezondheidsvoordelen door minder rook en giftige koolmonoxide"

    let infoHoverHtml = `

			<div class="co2ok_widget_infobox_container co2ok-popper widget-hovercard-small co2ok-small" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

				<div class="mobile mobile-bar desktop-hidden co2ok-small" style="background-color: #00B67A;">
					<p class="mobile-header desktop-hidden co2ok-small">Pockies's Planet Promise</p>
					<span class="exit-area-span co2ok-small">
						<p class="exit-area desktop-hidden co2ok-small"> X </p>
					</span>
				</div>

				<div class="co2ok-widget-content co2ok-small">
					<div class="card-main-header mobile-hidden co2ok-small">
						<img class="png-img-large mobile-hidden left-align-img header-img co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_world.png">
						<p class="header mobile-hidden co2ok-small" style="color: #00B67A;">Pockies's Planet Promise</p>
					</div>

					<div class="co2ok-widget-wrapper co2ok-small co2ok-header-one co2ok-small" style="padding-top: 4px;">
						<img class="png-img-large right-align-img co2ok-box co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_box.png">
						<p class="sub-header right co2ok-small" style="color: #239DCC;">Duurzame producten</p>
						<p class="widget-wrapper right widget-text-block left co2ok-small"> ${stepOne} </p>
					</div>


					<div class="co2ok-widget-wrapper co2ok-small">
						<p class="sub-header left co2ok-small" style="color: #239DCC;">Neutrale verpakking & verzending</p>
						<p class="widget-text-block left co2ok-small co2-neutrale" style="min-height: 58px;"> ${stepTwo} </p>
						<img class="png-img-large left-align-img co2ok-plant co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_seedling.png">
					</div>

					<div class="co2ok-widget-wrapper co2ok-small">
						<img class="png-img-large right-align-img co2ok-tree co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_trees.png">
						<p class="sub-header right co2ok-small" style="color: #239DCC;">Neutraliseren van de productie</p>
						<p class="widget-text-block right co2ok-small"> ${stepThree} </p>
					</div>

					<div class="co2-compensation-projects co2ok-small">
						<img class="co2-project-img co2ok-small" src="${Co2okWidget.SITE_HOST}/widget/co2_projects.jpg">
						<p class="co2-project-img-text co2ok-small"> ${imageDesc} </p>
					</div>

					<div class="co2ok-logos co2ok-small">
						<img src="${Co2okWidget.SITE_HOST}/static/logo.png" href="https://www.co2ok.eco/projects" class="co2ok-logo co2ok-small">
						<img class="feat-company-logo co2ok-small" style="width: 18%;" src="${Co2okWidget.SITE_HOST}/widget/pockies/PK_logo.png">
					</div>

				</div>
			</div>

		`
		jQuery('footer').before(infoHoverHtml)
	},

  //XL impact calc widget
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

    // let paragraph = `
    // `
    let widgetmark = `
      <div class="large-widget">
        <span class ="large-widget-right-pockies"></span>
        <svg id= "half-circle" style="width: 160px;"> <circle cx="95" cy="64.6" r="62.6" fill="white"> /></svg>
        <p id="large-widget-text">${compensatietekst}</p>
        <p id="large-widget-xvliegen">= ${(compensationAmount * 5000) .toFixed(0)} km<br>${vliegen}</p>
        <img id="co2ok-logo" src= "${this.SITE_HOST}/static/logo-gray.png">
        <img id="info-button-widget" class="widget-large" src="${this.SITE_HOST}/static/info-PK.svg">
        <img id="large-widget-airplane" src= "${this.SITE_HOST}/widget/large-wiget-airplane.png">
      </div>
    `

    // jQuery(paragraph).appendTo(document.getElementsByClassName("article-content"))
    jQuery("<div id='widgetContainerXL' style='margin-top:25px; margin-bottom:25px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;'></div>").appendTo(document.getElementsByClassName("rte"))
    let widgetcontainer = document.getElementById('widgetContainerXL')
    widgetcontainer.innerHTML = widgetmark;
  },


  //trustmark widget
	trustmarkGenerator: function (widgetContainer, totalCompensatedData) {

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
				<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${Co2okWidget.SITE_HOST}/static/logo.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
				<span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
				</div>

			</div>

		`
	  // let widgetcontainer = document.getElementById(widgetContainer)

		jQuery("<div id='widgetContainer' style='width:180px;height:auto;display:flex;flex-direction:row;align-items:center; margin-top: 10px;'></div>").appendTo(document.getElementById("nav_menu-1561010286273"))
		let widgetcontainer = document.getElementById("widgetContainer")
		widgetcontainer.innerHTML = widgetmark;
		this.RegisterWidgetInfoBox();

	  // Don't try to place widget if there is no container
	  if(widgetcontainer == null){
			return
	  }

	  widgetcontainer.innerHTML = widgetmark
	  Co2okWidget.RegisterWidgetInfoBox();
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
    if (element_id == '.widget-large') {
      offset.left -= infoHoverBox.width() / 2;
    } else if (element_id == '.widget-small') {
      console.log("what we ding?")
			offset.left -= infoHoverBox.width() / 4;
			if (windowWidth <= 800)
		  	offset.top += elementBox.height() * 4;
			if ((offset.top + infoHoverBox.height()  < jQuery(window).height())) {
				offset.top += infoHoverBox.height();
			} else {
        offset.top -= infoHoverBox.height();
      }
			//protection for hovercard clipping off window
      if (y - infoHoverBox.height() < 0 && element_id == '.widget-large') {
				offset.top = y;
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
		} else if (element_id == '.cfs_hover_target_footer') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
			}
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
	  else if (jQuery(e.target).hasClass("co2ok-small"))
			return ('.co2ok-small')
		else if (jQuery(e.target).hasClass("widget-small"))
			return ('.widget-small')
    else if (jQuery(e.target).hasClass("widget-large"))
      return ('.widget-large')
	},

	RegisterWidgetInfoBox : function()
	{
	  var _Co2okWidget = Co2okWidget;
	  var element_id = null;

	  jQuery(".co2ok_widget_info_keyboardarea").focus(function(){
		  _Co2okWidget.ShowWidgetInfoBox();
		  jQuery(".first-text-to-select").focus();
	  });

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
      Co2okWidget.marqueeInsertion();
      if (window.location.toString().includes('products')) {
        Co2okWidget.insertOnProductPage();
      }
      Co2okWidget.uspInsertion();
			Co2okWidget.cfsTrustMarkInsertion();
      Co2okWidget.insertHovercardHTML();
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
