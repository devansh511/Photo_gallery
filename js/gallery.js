function upDate(previewPic){
	var imgLocation = document.getElementById("image")
	imgLocation.innerHTML = previewPic.alt;
	imgLocation.style.backgroundImage="url("+previewPic.src+")";
}
function unDo(){
	var imgLocation = document.getElementById("image")
	imgLocation.innerHTML = "Hover over an image below to display here.";
	imgLocation.style.backgroundImage="url(' ')";
}