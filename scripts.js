function formExpand() {
	var form = document.getElementById('form');

	var visibility =
		form.currentStyle ? form.currentStyle.display :
	                          getComputedStyle(form, null).display;

	if(visibility==="block") {
		form.style.display="none";
	}
	if(visibility==="none") {
		form.style.display="block";
	}
	else {
		console.log("oops");
	}
}