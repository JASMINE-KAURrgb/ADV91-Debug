player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
console.log(player1_name);
console.log(player2_name);

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case= "+word);

    char1=word.charAt(1);
    console.log(char1);

    midvalue= Math.floor(word.length/2);
    char2=word.charAt(midvalue);
    console.log(char2);

    char3=word.charAt(word.length-1);
    console.log(char3);

    word1=word.replace(char1,"_");
    word2=word1.replace(char2,"_");
    finalword=word2.replace(char3,"_");
    console.log(finalword);

    question="<h4 id='word_display'> Question-"+finalword+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_box'>";
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>Check!</button>";
    row=question+input_box+check_btn;
    document.getElementById("output").innerHTML=row;
}