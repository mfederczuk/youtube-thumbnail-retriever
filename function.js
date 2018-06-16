javascript:(function(){
	var i = 0;
	var ytUrl = "https://www.youtube.com/watch?v=";
	var url = window.location.href;
	
	/* Checking if the current URL is a YouTube video */
	for(; i < ytUrl.length; i++) {
		if(url.charAt(i) != ytUrl.charAt(i)) {
			alert("This website is not YouTube video!");
			return;
		}
	}
	
	var id = "";
	
	/* Getting the video id */
	for(; i < url.length && url.charAt(i) != '&'; i++) {
		id += url.charAt(i);
	}
	
	/* Opening a new tab with the video thumbnail */
	window.open("https://img.youtube.com/vi/" + id + "/maxresdefault.jpg", "_blank");
	
})();
