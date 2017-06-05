/**
 * @author pammi
 */
(function($){
$.fn.spotlight=function(hue){
	var hue=hue||"yellow";
					$(this).css("background-color",hue);
					return this;
				}
$.fn.alternateColor=function(hue){
	var hue=hue||"orange";
	return this.each(function(index){
		if(index%2===0){
			$(this).css("background-color",hue);
		}
	});
}
$.fn.hello=function(){
	alert(hello);
}
$.fn.chooseColor=function(options){
	var defs={
		bg:"blue",fg:"white" };
	var opts=$.extend(defs,options);
	return this.each(function(index){
		if(index%2===0){
			$(this).css({"background-color":opts.bg,"color":opts.fg});
		}
	});
}
$.fn.extOpen=function(){
var myURL=location.protocol+'//'+location.hostname;
$('a[href^="http://"]').not('[href^="'+myURL+'"]').attr('target','_blank');
}

}(jQuery));
