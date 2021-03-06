/* Quizz logic 
The quiz starts when click on "start"
Array of question and mulitple choice with 1 correct answer
We have 15 - 20 questions and answers
*/

    //score
    let score = 0;
    let page=0;
    let finalscore = 0;
    //questions
    let myQuestions = [
    { 
    //Question1
    question: "What is the biggest lake in Ireland",
    answers: {
      a: 'Lough Derg',
      b: 'Lough Neagh',
      c: 'Lough Corrib'
    },
    correctAnswer: 'b'
  },
  {
    //Question2
    question: "Which Province has the lowest counties?",
    answers: {
      a: 'Ulster',
      b: 'Munster',
      c: 'Connacht'
    },
    correctAnswer: 'c'
  },
  {
    //Question3
    question: "What is the second smallest county in Ireland?",
    answers: {
      a: 'Carlow',
      b: 'Louth',
      c: 'Connacht'
    },
    correctAnswer: 'a'
  },
  {
    //Question4
    question: "Which of these counties has the biggest population?",
    answers: {
      a: 'Galeway',
      b: 'Lamerick',
      c: 'Cork'
    },
    correctAnswer: 'c'
  },
   {
    //Question5
    question: "In what year did George Bernard Shaw die?",
    answers: {
      a: '1950',
      b: '1955',
      c: '1040'
    },
    correctAnswer: 'a'
  },
  //Question6
  {
  question: "The Book of Kells is written in what language?",
  answers: {
      a: 'Latin',
      b: 'English',
      c: 'Irish'
    },
    correctAnswer: 'a'
  
  },
  //Question7
  {
  question: "What is the real name of U2's frontman, better known as Bono?",
  answers: {
        a: "Keith O'Flaherty", 
        b: 'Paul Hewson',
        c: 'Michael Walton'
  },
  correctAnswer: 'b'
  }
];
    function incrementScore(){
        //Get score from the DOM and increment by 1
        let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;
        finalscore = oldScore;
        return finalscore;
}
    function incrementPage(){
        page = ++page;
        return page;
    }
    function showHide() {
            let newPage = incrementPage();
            $("#" + (newPage-1)).addClass("hide");
            $( "#" + newPage ).removeClass("hide");
            if(newPage === myQuestions.length)
            {
                //alert("quizz is finished! newPage=" + newPage + "lenght " + myQuestions.length + "score " + score);
                document.getElementById('final-score').innerText = finalscore + " out " + myQuestions.length;
                $("#finish").removeClass("hide");

            }

    };
    //Start
    function start(){
        $("#welcome").addClass("hide");
        $("#question").removeClass("hide");
        $("#finish").addClass("hide");
        runquizz();
    }
    
    $("#start").on("click",function() {
        //$("#welcome").addClass("hide");
        //$("#question").removeClass("hide");
        start();
    });
    
    
    //create quiz questions based on the allQuestions object
    function runquizz(){
    $.each(myQuestions, function (i) {
        let appendHtml = "";
        let nb = i + 1;
        let order = 'Q ' + nb.toString() + '/' + myQuestions.length + ' - ';
        let correct = myQuestions[i].correctAnswer;
        $('#question').append('<div id=' + i + ' class="hide"><h4 class="question-text">' + order + myQuestions[i].question + '</h4></div>');
         $.each(this.answers, function (j) {
            currentAnswer = myQuestions[i].answers[j];
            $('#' + i).append('<button class="answer ' + j + '">' + currentAnswer + '</button>');
        });
        if ( i===page){
            $( "#" + i ).removeClass("hide");
        }
    });
    
    // Check answers 
   
    $(".answer").on("click",function() {
        
        //all btn the group disabled
        //check answers and add text box
        let mess = "";
        let thisQuestion = $(this).closest("div").attr('id'); //id of div - index of Q
        let checkAnswer = myQuestions[thisQuestion].answers; //return array
        let correctA = myQuestions[thisQuestion].correctAnswer; //return a b c
        let fullAnswer = checkAnswer[correctA];
        
        if ($(this).text() === fullAnswer)
        {   
            $(this).addClass("correct")
            incrementScore();
        }
        else{
            $(this).addClass("wrong");
            
            let correctString = '<span class="txt--green">' + ' ' + '<i class="far fa-check-circle"></i></span>'
            $(this).siblings('button:contains(' + fullAnswer + ')').append(correctString);
            mess = "Boo !!! you need to dance!";
            //
            //alert(mess);
            } ; 
            $(this).closest("div").children().attr('disabled', true);//disabled
            //let newPage = incrementPage();
            //showHide (newPage);
            setTimeout(function(){
            showHide();
            }, 850);  
    });
    };
    
   //play again  
    $("#playagain").on("click",function(){
        score=0;
        page=0;
         $("#score").text('0');
         $("#question").empty();
         $("#finish").addClass("hide");
        runquizz();
    });
