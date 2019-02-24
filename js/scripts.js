$(document).ready(funtion(){
  $("#quiz").submit(funtion(event){
    event.preventDefault();
    var q1=parseInt($"[name=answer1]:checked").val());
    var q2=parseInt($"[name=answer2]:checked").val());
    var q3=parseInt($"[name=answer3]:checked").val());
    var q4=parseInt($"[name=answer4]:checked").val());
    var q5=parseInt($"[name=answer5]:checked").val());
    var q6=parseInt($"[name=answer6]:checked").val());
    var q7=parseInt($"[name=answer7]:checked").val());
    var q8=parseInt($"[name=answer8]:checked").val());
    var q9=parseInt($"[name=answer9]:checked").val());
    var q10=parseInt($"[name=answer10]:checked").val());
    var q11=parseInt($"[name=answer11]:checked").val());
    var q12=parseInt($"[name=answer12]:checked").val());
    var score=parseInt(q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11+q12);
    if (result>60) {
      $("#input").text("Your score is: "+ score + " you have qualified to be a TM");
    } else {
      $("#input").text("Your score is: "+ score + " up you game");
    }
  });
});
