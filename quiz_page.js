p1_name=localStorage.getItem("player1_name")
p2_name=localStorage.getItem("player2_name")


p1_score=0
p2_score=0 
document.getElementById("p1_name_hdr").innerHTML=p1_name+" : "
document.getElementById("p2_name_hdr").innerHTML=p2_name+" : "
document.getElementById("p1_score_hdr").innerHTML=p1_score;
document.getElementById("p2_score_hdr").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="question turn -"+p1_name
document.getElementById("player_answer").innerHTML="answer turn -"+p2_name

function send(){
    console.log(" in send cal");
    number1=document.getElementById("number1").value ;
    number2=document.getElementById("number2").value ;
    actual_answer=parseInt(number1)*parseInt(number2);

var question_number="<h4>"+ number1 +"X"+ number2 +"</h4>";
var input_box="<br>Answer : <input type='text' id='input_check_box'>";
var check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_number + input_box + check_button;
document.getElementById("output").innerHTML+= row;
document.getElementById("number1").value ="";
document.getElementById("number2").value ="";
}

question_turn="player1";
 answer_turn="player2";
function check(){
    var get_answer=document.getElementById("input_check_box").value ;
    console.log(get_answer);
    if (Number(get_answer)==actual_answer){
        if(answer_turn=="player1"){
            p1_score=p1_score+1;
            document.getElementById("p1_score_hdr").innerHTML=p1_score;
        }
        else{
            p2_score=p2_score+1;
            document.getElementById("p2_score_hdr").innerHTML=p2_score;
        }
    }
    if (question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn - "+p2_name;
    }
    else
    {
        question_turn="player1";
    document.getElementById("player_question").innerHTML="question turn - "+p1_name;
}
if (answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer turn - "+p2_name;
}
else
{
    answer_turn="player1";
document.getElementById("player_answer").innerHTML="answer turn - "+p1_name;
}
document.getElementById("output").innerHTML="";

}
