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

function DEVDARK_WIDE() {
	var inners = document.querySelectorAll(".inner"), i;

	for (i = 0; i < inners.length; ++i) {
		inners[i].style.maxWidth = "1240px";
	}

	var mCards = document.querySelectorAll(".kg-card-markdown");
	
	for (i = 0; i < mCards.length; ++i) {
		mCards[i].style.maxWidth = "initial";
	}
}
