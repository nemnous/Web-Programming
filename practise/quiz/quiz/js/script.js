var quiz = {
    questions : [
        {
            text : "Qestion 1",
            choice : [
                {
                    text : "True",
                    isCorrect : false,
                    feedback : "feedback"
                },
                {
                    text : "False",
                    isCorrect : true,
                    feedback : "feedback"
                }
            ],
            hints : ["hint 1", "hint 2"],
            count : 0
        },
        {
            text : "Qestion 2",
            choice : [
                {
                    text : "True",
                    isCorrect : true,
                    feedback : "feedback"
                },
                {
                    text : "Flase",
                    isCorrect : false,
                    feedback : "feedback"
                }
            ],
            hints : ["hint 1", "hint 2"],
            count : 0
        }
    ]
};

var optionCliked = function(i,j) {
    var code = '';
    var msg = 'message'+i;
    var update = document.getElementById(msg);
    update.innerHTML = quiz.questions[i].choice[j].feedback;

    if(quiz.questions[i].choice[j].isCorrect){
        code += '<div class="row alert alert-success" role="alert">';
            code += '<div class="col-md-12">';
                code += '<span class="glyphicon glyphicon-ok"></span>';
                code += '<strong>Correct!! '+quiz.questions[i].choice[j].feedback+'</strong>';
            code += '</div>'
        code += '</div>';
        update.innerHTML = code;
    }
    else {
        code += '<div class="row alert alert-danger" role="alert">';
            code += '<div class="col-md-12">'
                code += '<span class="glyphicon glyphicon-remove"></span>'
                code += '<strong>wrong!! '+quiz.questions[i].choice[j].feedback+'</strong>'
            code += '</div>'
        code += '</div>'
        update.innerHTML = code;
    }
}




var update = document.getElementById("quizTitle");

var code, name, question, val;

code = '';

for (var i = 0; i < quiz.questions.length; i++) {
    question = 'question'+i;
    name = 'input'+i;
    code += '<div class="row question well spacer '+question+'">'
        code += '<div class="row">';
            code += '<div class="column cs-md-12">';
                code += '<button type="button" class="btn btn-info btn-xs" onclick = hintClicked('+ i +')>';
                    code += 'Hint';
                code += '</button>';
            code += '</div>';
        code += '</div>';
        code += '<div id="hintBody'+i+'"></div>';
        code += '<div class="row">';
            code += '<div class="column cs-md-12">';
                code += '<span>&nbsp&nbsp&nbsp</span>';
                code += '<span>'+quiz.questions[i].text+'</span>';
                code += '<p>&nbsp</p>';
            code += '</div>';
        code += '</div>';
        code += '<div class="row options">';
    for(var j = 0; j < quiz.questions[i].choice.length; j++){
            code += '<div class="col-mdp-12">';
                code += '<div class>';
                    code += '<label>';
                        code += '<span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>';
                        code += '<input type="radio" name="'+name+'" '+'value="'+quiz.questions[i].choice[j].text+'" onclick = "optionCliked('+i+','+j+')">';
                        code += '<span>&nbsp&nbsp</span>';
                        code += quiz.questions[i].choice[j].text;
                    code += '</label>';
                code += '</div>';
            code += '</div>';
    }
        code += '</div>';
        code += '<div id = "message'+i+'">';
        code += '</div>';
    code += '</div>';

}

code += '<div class="row spacer">';
    code += '<div class="col-md-12">';
        code += '<input type="button" class="btn btn-primary" value="Reset" onclick = "reset()">';
    code += '</div>';
code += '</div>';

code = update.innerHTML + code;
update.innerHTML = code;

function reset(){
    update.innerHTML = code;
}

function hintClicked(i){
    var update = document.getElementById('hintBody'+i);
    var code = '';
    code += '<div class="row alert alert-warning" role="alert">';
        code += '<div class="col-md-12">';
            code += '<span class="glyphicon glyphicon-info-sign"></span>';
            code += '<strong>Hint!!</strong>This is hint 1';
        code += '</div>';
    code += '</div>';
    update.innerHTML = code;
}

