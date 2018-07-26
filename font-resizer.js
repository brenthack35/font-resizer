function fontResizer() {

// Font Resize Customization
var text = $('#wrapContentInner');
if ($.cookie('FontSize')) {
	var currentFontSize = parseInt($.cookie('FontSize'));
	text.css('fontSize', currentFontSize + '%');
} else text.css('fontSize', '100%');
var maxSize = 150;
var minSize = 50;

// Increase Font
$('.increase').click(function() {
	var textWrapper = text[0];
	var size = textWrapper.style.fontSize;
	var sizeInt = size.replace('%', '');
	var newSize = parseInt(sizeInt) + 10;
	var fontSize = newSize + '%';
	if (newSize < maxSize) {
		$(textWrapper).css('fontSize', fontSize);
		$.cookie('FontSize', fontSize);
	};
	return false;
});

// Descrease Font
$('.decrease').click(function() {
	var textWrapper = text[0];
	var size = textWrapper.style.fontSize;
	var sizeInt = size.replace('%', '');
	var newSize = parseInt(sizeInt) - 10;
	var fontSize = newSize + '%';
	if (newSize > minSize) {
		$(textWrapper).css('fontSize', fontSize);
		$.cookie('FontSize', fontSize);
	};
	return false;
});

// Normal Font
$('.normal').click(function() {
	var textWrapper = text[0];
	var size = textWrapper.style.fontSize;
	var sizeInt = size.replace('%', '');
	if (newSize = minSize) {
		$(textWrapper).css('fontSize', '100%');
		$.cookie('FontSize', '100%');
	};
	return false;
});

};
