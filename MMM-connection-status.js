/* Magic Mirror
 * Module: MMM-connection-status
 *
 * By Itay Shechter https://github.com/itay47/MMM-connection-status
 * Based on Sheya Bernstein https://github.com/sheyabernstein/MMM-connection-status
 * MIT Licensed.
 */

Module.register('MMM-connection-status', {

	// Default module config.
	defaults: {
        updateInterval: 1000 * 60, // every minute
		initialLoadDelay: 0,
		animationSpeed: 1000 * 0.25,
	},

  // Define required translations.
	getTranslations: function() {
    return {
      'en': 'translations/en.json',
      'id': 'translations/id.json',
      'es': 'translations/es.json',
      'fi': 'translations/fi.json'
    };
	},

	// Define start sequence.
	start: function() {
        Log.info("Starting module: " + this.name);
        // Loop infinitely
		this.loop();
	},

	// Override dom generator.
	getDom: function() {
				var wrapper = document.createElement('img');
		if (window.navigator.onLine) {
			wrapper.className = 'small';
			wrapper.id = 'wifiUp';
			wrapper.width = '50';
			wrapper.height = '50';
			wrapper.src = "../modules/MMM-connection-status/img/wifi-up.png";
			
			//wrapper.src = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/wifi-1613601-1368727.png'
			//wrapper.innerHTML = "/img/wifi-signal.png"; //this.translate("INET_CONN_CONNECTED");
		} else {
			wrapper.className = 'normal bright';
			wrapper.id = 'wifiDown';
			wrapper.width = '50';
			wrapper.height = '50';
			wrapper.src = "../modules/MMM-connection-status/img/wifi-down.png";
			
			//wrapper.src = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/no-wifi-1471925-1246106.png'
			//wrapper.innerHTML = "/img/no-wifi.png"; //this.translate("INET_CONN_NOTCONNECTED");
		}

		return wrapper;
		
		/*var wrapper = document.createElement('div');
		if (window.navigator.onLine) {
			wrapper.className = 'small';
			wrapper.innerHTML = this.translate("INET_CONN_CONNECTED");
		} else {
			wrapper.className = 'normal bright';
			wrapper.innerHTML = this.translate("INET_CONN_NOTCONNECTED");
		}

		return wrapper;*/
	},

	// Infinite loop
	loop: function() {
        var self = this;
		setTimeout(function() {
			setInterval(function() {
				// Refreshes the dom, using the getDom() function
				self.updateDom(self.config.animationSpeed);
			}, self.config.updateInterval); // Loop interval
		}, self.config.initialLoadDelay); // First delay
	}
});
