$(document).ready(function() {

	//alert("I'm ready!");

	var myAnswers = new Array();

	function question(divId, inputName) {
		this.divId = divId;
		this.inputName = inputName;
	}

	var allQuestions = new Array();
	allQuestions[0] = new question ($("#q-media"), $("input[name='media']:checked"));
	allQuestions[1] = new question ($("#q-social"), $("input[name='social']:checked"));
	allQuestions[2] = new question ($("#q-customizable"), $("input[name='custom']:checked"));

	var n = 0;

	$(".questions").hide();

	allQuestions[n].divId.show();

	var NextButton = function () {
		allQuestions[n].divId.hide();
		if (n < allQuestions.length()) {
			n = n+1;
			allQuestions[n].divId.show();			
		} else {
			alert(myAnswers.toString());
		};

	};

	$('.next').click(function() {


		// this isn't working.
		alert(allQuestions[n].toString());

		if (allQuestions[n].inputName.val() == "true") {
			alert("you said true");
			myAnswers[n] = 1;
			NextButton();
		} else if (allQuestions[n].inputName.val() == "false") {
			alert("you said false");
			myAnswers[n] = 0;
			NextButton();
		} else {
			//alert("click something");
		};

	});

});