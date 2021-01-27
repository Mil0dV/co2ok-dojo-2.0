//Woonliving

let Co2okWidget = {

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
	  var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-109f4164.css`)
	  document.getElementsByTagName("head")[0].appendChild(fileref)

	  images = [`${this.SITE_HOST}/widget/cfs.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_world.png`,
	  `${this.SITE_HOST}/static/info-dz.svg`,
	  `${this.SITE_HOST}/widget/douche.svg`,
	  `${this.SITE_HOST}/widget/DZ-heart-earth_2.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_box.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_seedling.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_trees.png`,
	  `${this.SITE_HOST}/widget/woonliving/WL_logo.png`]

	  for (img of images){
		this.preloadImage(img)
	  }

	},

	merchantCompensations: function (widgetContainer, merchantId, widgetSize, widgetColor, lang) {

		// get impact from cookie if available
		let co2ok_impact = Co2okWidget.getCookieValue('co2ok_impact')

		if (co2ok_impact > 1) {
		  // console.log('Collaborate and listen')
		  Co2okWidget.widgetGenerator(widgetContainer, co2ok_impact, widgetSize, widgetColor, lang)
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
				Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)

				// Something is fishy, let's serve up the total
				} else {
				  let totalTransactionData = 22300
				  Co2okWidget.widgetGenerator(widgetContainer, totalTransactionData, widgetSize, widgetColor, lang)
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
		let cfs_html = `
			<img class="cfs_hover_target_footer" src="https://co2ok.eco/widget/cfs.png" style="width: 100px; height: 48px">
		`
		jQuery(".bot_footer_svg").after(cfs_html)
		let cfsf_html = `
			<img class="cfs_hover_target" src="https://co2ok.eco/widget/cfs.png" style="width: 100px; height: 48px">
		`
		jQuery(".pr_trust_seal").append(cfsf_html)
		console.log("cfs inserted")
	},

	insertWidget: async function() {
	  let widget_div = `<div class="widgetContainermark" style="margin-top:25px; margin-bottom:25px; margin-left:18px;width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>`

	  let pagetype = window.location.pathname.split("/")[1]
	  if (pagetype == "product" || pagetype == "product-categorie" || pagetype == "werken-bij-douchezaak" || pagetype == "badkamer-blog" || pagetype == "badkamer-showroom" || pagetype.split("-")[0] == "vacature") {
			for (var x = 0; x < 15; x++) {
		  	if (jQuery('.__fbcw__widget').length) {
					var FBCWElementArray = document.querySelectorAll(".__fbcw__widget");
					for (var element of FBCWElementArray) {
			  		if (element.offsetLeft > 0) {
							jQuery(element).after(widget_div);
							Co2okWidget.merchantCompensations('widgetContainermark', '0', 'XL', 'default');
							return
			  		}
					}
		  	}
		  await new Promise(r => setTimeout(r, 200));
			}
	  } else {
			return ;
		}
	},

	widgetGenerator: function (widgetContainer, totalCompensatedData, widgetSize, widgetColor, lang) {
	//   let color = "#D0C918"

		//css for trustmark
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)
		//css for hovercard
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", `${this.SITE_HOST}/widget/co2okWidgetMark-109f4164.css`)
		document.getElementsByTagName("head")[0].appendChild(fileref)

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
		var stepOne = "Woonliving biedt hoogwaardige producten die een leven lang meegaan, en daardoor minder afval opleveren!";
		var stepTwo = "Wij neutraliseren de verpakking én de verzending van uw bestelling door geld te investeren in klimaat-positieve programma's. Kortom: we planten bomen voor elke aankoop!";
		var stepThree = "Verder bieden we u de optie om de CO₂ die wordt uitgestoten bij de productie van uw aankoop te compenseren. Eenvoudig gezegd, plant u uw eigen bomen direct naast de onze, met slechts één druk op de knop!";

		let widgetmark = `
			<div>

				<div class="btn_co2ok_widget co2ok_widget_info widget-small" href="#">
				<span class="btn_co2ok_widget co2ok_widget_info trustmark-border widget-small">SHOP<img class="logo_co2ok_widget widget-small" src="${this.SITE_HOST}/static/logo.png"></span>
				</div>
				<div class="caption_co2ok_widget co2ok_widget_info widget-small">
				<span> <strong>${(compensatiewidget.toFixed(1))}</strong>t ${reductietekst} </span>
				</div>

			</div>

			<div class="co2ok_widget_infobox_container co2ok-popper infobox-hidden co2ok-small" id="infobox-view" style="top: 76px; left: 44.35px; margin: 0px; transform: none;">

        <div class="card-main-header co2ok-small">
          <img class="png-img-large left-align-img header-img co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_world.png">
          <p class="header co2ok-small">Our Planet Promise</p>
        </div>

        <div class="co2ok-widget-content co2ok-small">

          <div class="card-sub-header left co2ok-small">
            <p class="sub-header co2ok-small">Duurzame producten</p>
          </div>
          <div class="inner-wrapper co2ok-small">
            <img class="png-img-large right-align-img box co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_box.png">
              <p class="text-block left co2ok-small"> ${stepOne} </p>
          </div>

          <div class="card-sub-header right co2ok-small">
            <p class="sub-header co2ok-small">Neutrale verpakking & verzending</p>
          </div>
          <div class="inner-wrapper co2ok-small">
            <img class="png-img-large left-align-img plant co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_seedling.png">
              <p class="text-block right co2ok-small" style="min-height: 58px;"> ${stepTwo} </p>
          </div>

          <div class="card-sub-header left co2ok-small">
            <p class="sub-header co2ok-small">Neutraliseren van de productie</p>
          </div>
          <div class="inner-wrapper co2ok-small">
            <img class="png-img-large right-align-img tree co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_trees.png">
              <p class="text-block left co2ok-small" style="min-height: 88px;"> ${stepThree} </p>
          </div>

          <a class="hover-link co2ok-small" href="#!"><img src="${this.SITE_HOST}/static/logo.png" class="co2ok_logo_default_info hover-link co2ok_logo_default_info"></a>
          <span class="hover-link co2ok-small">
            <a class="hover-link co2ok-small" style="margin-left: 36px; margin-top: 36px;" href="#!"></a>
          </span>
          <img class="woonliving_logo co2ok-small" src="${this.SITE_HOST}/widget/woonliving/WL_logo.png">
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
	  if (element_id == '.widget-small')
	  {
			offset.left -= infoHoverBox.width() / 4;
			if (windowWidth <= 800)
		  	offset.top += elementBox.height() * 4;
			if (windowWidth <= 800)
		  	offsetMobile.left = -10;
			else
		  	offsetMobile.left -= infoHoverBox.width();
			offsetMobile.top += elementBox.height();
			if (offset.top < jQuery(window).height()) {
				offset.top += infoHoverBox.height();
			}
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
		} else if (element_id == '.cfs_hover_target') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
			}
			offset.top += 40;
			offsetMobile.top  -= infoHoverBox.height();
			offsetMobile.left -= infoHoverBox.width() - 10;
		} else if (element_id == '.cfs_hover_target_footer') {
			offset.left -= infoHoverBox.width() / 2;
			if (offset.left < 0) {
				offset.left = 5;
			}
			offset.top -= infoHoverBox.height();
			offsetMobile.top  -= infoHoverBox.height();
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
		else if (jQuery(e.target).hasClass("cfs_hover_target_footer"))
			return ('.cfs_hover_target_footer');
	  else if (jQuery(e.target).hasClass("usp_hover_target"))
			return ('.usp_hover_target');
	  else if (jQuery(e.target).hasClass("co2ok-small"))
			return ('.co2ok-small')
		else if (jQuery(e.target).hasClass("widget-small"))
			return ('.widget-small')
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

	  jQuery('body').click(function(e) {
			element_id = _this.modalRegex(e, element_id);
		  if (!element_id) {
				_this.hideWidgetInfoBox();

			} else {
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
				if (!element_id) {
					_this.hideWidgetInfoBox();
				} else {
					_this.ShowWidgetInfoBox();
					_this.placeWidgetInfoBox(element_id);
				}
			});
	  }
	},

}

function co2okInit() {
	jQuery(document).ready(function() {
		console.log("CO2ok is fighting climate change!")

		Co2okWidget.loadResources()

		// Manual AB-switch
		var urlParams = new URLSearchParams(window.location.search);
		var co2ok_AB_param = urlParams.get('co2ok_ab');
		if (co2ok_AB_param == 'show') {
			console.log('Co2ok ON manually!')
		} else if (co2ok_AB_param == 'hide') {
			console.log('Co2ok OFF mannually!')
			return
		} else if (Co2okWidget.getCookieValue('co2ok_ab_hide') == '0') {
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
		};
	//   Co2okWidget.insertWidget();
	//   Co2okWidget.uspInsertion();
		Co2okWidget.cfsTrustMarkInsertion();
		Co2okWidget.RegisterWidgetInfoBox();
	})
}

function jQueryLoadDefer(number, co2okInit) {
	if (number == 50 && window.jQuery) {
		console.log("jQuery Loaded")
		co2okInit();
	} else {
		number = number + 1;
		console.log("waiting for jQuery to load", number)
		setTimeout(function() { jQueryLoadDefer(number, co2okInit) }, 50);
	}
}

jQueryLoadDefer(0, function Co2okInit() {
	console.log("jQueryLoadDefer finished")
});
