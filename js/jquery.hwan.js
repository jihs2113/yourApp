(function($){
	$.fn.hwan=function(options){
		var settings=$.extend({
			msg:"안녕!",
			width:"200px",
			height:"200px",
			backgroundColor:"yellow",
			color:"blue"
		},options);
		this
		.text(settings.msg)
		.css("width",settings.width)
		.css("height",settings.height)
		.css("backgroundColor",settings.backgroundColor)
		.css("color",settings.color)
		.css("border","10px solid green")
		.click(function(){
			$(this).animate({marginLeft:"+=200px"});
		});
		return this;

	};

})(jQuery);