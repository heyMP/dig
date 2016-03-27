module.exports = function() {

	$('*[data-typed]').each(function() {
		var strings = [];
		var element = $(this);

		element.find('*[data-typed-text]').each(function() {
			var text = $(this).html();
			$(this).remove();
			strings.push(text);
		});

		element.typed({
			strings: strings,
			typeSpeed: 50,
			startDelay: 2000,
			contentType: 'html' // or 'text'
		});

		console.log(strings);
  });
};
