var displayStatus;
displayStatus = document.getElementById("status");
src = "1.mp3";
createjs.Sound.alternateExtensions=["mp3"];
createjs.Sound.addEventListener("fileload",playSound);
createjs.Sound.registerSound(src);

displayStatus.innerHTML = "Waiting for load to complete";

function playSound(event){
	sounceIntance = createjs.Sound.play(event.src);
	displayStatus.innerHTML = "Playing Source:" + event.src;
}