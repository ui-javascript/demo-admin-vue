var preload;
preload = new createjs.LoadQueue(false,"assets/");
var plugin={
	getPreloadHandlers:function(){
		return{
			types:["image"],
			callback:function(src){				 	  		
				var id = src.toLowerCase().split("/").pop().split(".")[0];				
				var img = document.getElementById(id);
				window.alert(img.getAttribute("id"));
				return {tag:img};
			  }
			}
	 }
}
preload.installPlugin(plugin);
preload.loadManifest([
   "Autumn.png",
   "BlueBird.png",
   "Nepal.jpg",
    "Texas.jpg"
 ]);

