//user interface logic.
$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("[name=ans1]:checked").val());
    var q2 = parseInt($("[name=ans2]:checked").val());
    var q3 = parseInt($("[name=ans3]:checked").val());
    var q4 = parseInt($("[name=ans4]:checked").val());
    var q5 = parseInt($("[name=ans5]:checked").val());
    var q6 = parseInt($("[name=ans6]:checked").val());
    var q7 = parseInt($("[name=ans7]:checked").val());
    var q8 = parseInt($("[name=ans8]:checked").val());
    var q9 = parseInt($("[name=ans9]:checked").val());
    var q10 = parseInt($("[name=ans10]:checked").val());
    var q11 = parseInt($("[name=ans11]:checked").val());
    var q12 = parseInt($("[name=ans12]:checked").val());
// business logic.
    var score = parseInt(q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11+q12);
    if (score>70) {
      $("#input").text("Your score is: " + score + " you have qualified to be a TM");
    } else {
      $("#input").text("Your score is: " + score + " up you game!");
    }
  });
});
