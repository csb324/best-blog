$(document).ready(function() {

	var questionInfo = function (qname, question, optionYes, optionNo) {
		this.qname = qname;
		this.question = question;
		this.optionYes = optionYes;
		this.optionNo = optionNo;
	};

		var social = new questionInfo("social", "Do you want your blog to have a built in social network? Do you want to message friends and watch your follower count rise?", "Yeah!", "I don't care");
		var comments = new questionInfo("comments", "Do you want comments to be avaliable?", "Yes", "Whatever");
		var custom = new questionInfo("custom","Do you want to customize your blog's appearance?", "Definitely", "Nope");
		var tech = new questionInfo("tech","Do you have basic tech skills?", "Yes", "Not at all");
		var writing = new questionInfo("writing","Do you want a platform that puts writing first?", "Sure", "No way");
		var multimedia = new questionInfo ("multimedia","Do you want a platform that welcomes multimedia content?", "Definitely", "Not really");
		var free = new questionInfo ("free","Do you want a free platform?", "Yeah", "Doesn't matter");
		var personal = new questionInfo("personal","Are you going to start a personal blog?", "Yes", "Nope, I'm going to blog about a specific topic");

	var questions = [
		social,
		comments,
		custom,
		tech,
		writing,
		multimedia,
		free,
		personal
	];

	var myAnswers = [];

	var n = 0;

	var nextButton = function() {
		//alert("this is happening and n is " + n );
		if (n != 0) {
			myAnswers.push($('input:checked').val());
			//alert("yep still happening");
		};

		if (n < questions.length) {
			//alert("HI HELLO HI");
			$('.question').html(questions[n].question + '<br><form><input type="radio" name="' + questions[n].qname + '" value=1>' + questions[n].optionYes + '<br><input type="radio" name="' + questions[n].qname + '"value=0>' + questions[n].optionNo + '</form>');
			n++;
		} else {
			alert(myAnswers);
			showFinal();
		};
	};

	var showFinal = function() {
		$('.question').html(myAnswers);
	};

	$('button').click(function() {

		if ($('input').is(':checked')) {
			alert("I am happy for some reason");
			nextButton();
		} else {
			alert("CLICK SOMETHING MORON");
		};
	});

	nextButton();
});