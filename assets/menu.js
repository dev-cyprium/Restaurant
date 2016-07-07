var diet = "<h1>Diet pancakes</h1><p>Diet pancakes are our special glutten free pancakes with low calories intended for diets</p>"
var special = "<h1>Today's special is Strawbery dream</h1><p>Starwbery dream are our special made pancakes with perfect flavour of strawbery</p>"
var chocolate = "<h1>Chocolate pancakes</h1><p>Chocolate pancakes use 5 flavours of chocolate to get that perfect flavour</p>"
var online = "<h1>Order Online:</h1><p>You can order online by visiting our <a href='#'>store</a></p>"

var addContent = function(id) {
	$("#info").hide();
	switch(id) {
		case 'diet':
			$("#info").html(diet);
			break;
		case 'special':
			$("#info").html(special);
			break;
		case 'chocolate':
			$("#info").html(chocolate);
			break;
		case 'online':
			$("#info").html(online);
			break;
	}
	$("#info").slideDown(300);
}

$(document).ready(function() {
	$(".btn").click(function(e) {
		e.preventDefault();
		$('#info').html("");
		addContent(this.id);
	});
});