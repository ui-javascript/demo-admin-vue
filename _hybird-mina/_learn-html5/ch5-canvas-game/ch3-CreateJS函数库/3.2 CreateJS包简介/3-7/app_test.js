var preload;

	function init() {
		// Create a new queue.
		preload = new createjs.LoadQueue(false, "_assets/art/");

		// Use this instead to favor xhr loading
		//preload = new createjs.LoadQueue(true, "assets/");

		var plugin = {
			getPreloadHandlers: function () {
				return {
					types: ["image"],
					callback: function (item) {
						var id = item.src.toLowerCase().split("/").pop().split(".")[0];
						item.tag = document.getElementById(id);
					}
				};
			}
		}

		preload.installPlugin(plugin);
		preload.loadManifest(["Texas.jpg",
							  "BlueBird.png",
							  "Nepal.jpg",
							  "Autumn.png" //NOTE: Will not display
							 ]);
	}