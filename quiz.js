/* Quizz logic 
The quiz starts when click on "start"
Array of question and mulitple choice with 1 correct answer
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
    question: "Which Province has the lowest population?",
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
      c: 'Westmeath'
    },
    correctAnswer: 'a'
  },
  {
    //Question4
    question: "Which of these counties has the biggest population?",
    answers: {
      a: 'Galway',
      b: 'Limerick',
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
  },

  //Question8
  {
  question: "Who was the first High King of Ireland? ",
  answers: {
        a: 'Niall Noígíallach', 
        b: 'Máel Sechnaill',
        c: 'Brian Boru'
  },
  correctAnswer: 'c'
  },

  //Question9
  {
  question: "In Ireland, the word 'grand' means what?",
  answers: {
        a: '€1000', 
        b: 'Fine/Good/Ok',
        c: 'Very Large'
  },
  correctAnswer: 'b'
  },

  //Question10
  {
  question: "During which years did the Irish Potato Famine take place?",
  answers: {
        a: '1845 – 49', 
        b: '1840 – 44',
        c: '1842 - 47'
  },
  correctAnswer: 'a'
  },

  //Question11
  {
  question: "Who was known as the Liberator?",
  answers: {
        a: 'Michael Collins', 
        b: 'Pádraig Pearse',
        c: "Daniel O'Connell"
  },
  correctAnswer: 'c'
  },

  //Question12
  {
  question: "What is another way name for Guinness?",
  answers: {
        a: 'Porter', 
        b: 'The Black Stuff',
        c: "The Cure"
  },
  correctAnswer: 'b'
  },

  //Question13
  {
  question: "To which county can Barack Obama trace his Irish roots?",
  answers: {
        a: 'Offaly', 
        b: 'Westmeath',
        c: 'Donegal'
  },
  correctAnswer: 'a'
  },

  //Question14
  {
  question: "Colm Meaney starred in a 1996 funny film as an unemployable middle aged man just before the Celtic Tiger period. What was the name of the film?",
  answers: {
        a: 'The Man', 
        b: 'The Van',
        c: 'Tip The Can'
  },
  correctAnswer: 'b'
  },

  //Question15
  {
  question: "Which fruity sounding band had hits with 'Linger' and 'Zombie'?",
  answers: {
        a: 'Eagle Eye Cherry', 
        b: 'The Lemons',
        c: 'The Cranberries'
  },
  correctAnswer: 'c'
  },

  //Question16
  {
  question: "Which Irish poet was awarded the Nobel Prize in 1923?",
  answers: {
        a: 'W.B Yeats', 
        b: 'Brendan Behan',
        c: 'George Bernard Shaw'
  },
  correctAnswer: 'a'
  },

  //Question17
  {
  question: "What name is given to the ball in hurling?",
  answers: {
        a: 'An asal', 
        b: 'A sliotar',
        c: 'A rothar'
  },
  correctAnswer: 'b'
  },

  //Question18
  {
  question: "Who was the giant of Northern Ireland's Giant's Causeway?",
  answers: {
        a: 'Cú Chulainn', 
        b: 'Finn McCool',
        c: 'Fir Bolg'
  },
  correctAnswer: 'b'
  },

   //Question19
  {
  question: "Which Irish town name means 'Ford of the Kings'?",
  answers: {
        a: 'Athenry', 
        b: 'Clontarf',
        c: 'Clonmel'
  },
  correctAnswer: 'a'
  },

  //Question19
  {
  question: "What type of course was created by Christy O'Conner Jr. in Tullow, Co. Carlow? ",
  answers: {
        a: 'Ultimate Frisbee', 
        b: 'Race',
        c: 'Golf '
  },
  correctAnswer: 'c'
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
