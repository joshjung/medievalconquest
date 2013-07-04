requirejs.config({
	baseURL : "lib",
	paths : {
	}
});

requirejs([], function() {
	console.log("test from main.js");
});