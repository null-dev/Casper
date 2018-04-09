(function() {
	var marks = document.querySelectorAll('code[class*=language-],pre[class*=language-]'), i;

	for (i = 0; i < marks.length; ++i) {
		var mark = marks[i];
		var newHtml = mark.innerHTML.replace(/&lt;==MARK==&gt;/g, '<mark>').replace(/&lt;==\/MARK==&gt;/g, '</mark>');

		if(newHtml !== mark.innerHTML) {
			mark.innerHTML = newHtml;
		}
	}
})();
