var data=({
	"questions":[
	{
	"q1":"Each Computer has a built in instruction set that it knows how to execute by design.",
	"option1":"true",
	"option2":	"false",
	"hint1":"Recall that we use the term computation to mean the execution of a sequence of instructions by a computer with the intention od solving a given problem",
    "feedback1" : "Recall that we use the term computation to mean the execution of a sequence of instructions by a computer with the intention od solving a given problem",
	},
	{
	"q2":"The computer uses intelligence to execute instructions.",
	"option1":"true",
	"option2":	"false",

	},
	]
})

function display() {
	document.getElementById("q1").innerHTML = data.questions[0].q1;
	document.getElementById('option1').innerHTML = data.questions[0].option1;
	document.getElementById('option2').innerHTML = data.questions[0].option2;
	// document.getElementById('hint1').innerHTML = data.questions[0].hint1;
	// document.getElementById('feedback1').innerHTML = data.questions[0].feedback1;

	document.getElementById("q2").innerHTML = data.questions[1].q2;
	document.getElementById('option3').innerHTML = data.questions[1].option1;
	document.getElementById('option4').innerHTML = data.questions[1].option2;
	// document.getElementById('hint2').innerHTML = data.questions[1].hint2;



}