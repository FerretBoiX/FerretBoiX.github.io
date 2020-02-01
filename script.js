var stat = 0;

var element = document.getElementById("Starter");

function updater() {
    if (stat == 0) {
        element.innerHTML = "<b>PRESS START</b>"
    } else if (stat == 1) {
        element.innerHTML = "<b>GAME OVER</b>"
        stat = 0
    } else if (stat == 2) {
        element.innerHTML = "You are the class's quiet kid and you are being bullied</br><b>What should you do?<b></br>" +
         '<input class ="btn" type="submit" value="Suicide" onclick="stat = 2.1;" /><input class ="btn" type="submit" value="Tell the teacher" onclick="stat = 2.2;" /><input class ="btn" type="submit" value="Fight back" onclick="stat = 2.3;" />';
    } else if (stat == 3) {
        element.innerHTML = "You were just told your girlfriend cheated on you..</br><b>What should you do?<b></br>" +
         '<input class ="btn" type="submit" value="Break up with her" onclick="stat = 3.1;" /><input class ="btn" type="submit" value="Ignore the fact and pretend it didn\'t happen" onclick="stat = 3.2;" /><input class ="btn" type="submit" value="Murder her" onclick="stat = 3.3;" />';
    } else if (stat == 4) {
        element.innerHTML = "You told your family you are gay.</br>They want to kick you out of the family</br><b>What should you do?<b></br>" +
         '<input class ="btn" type="submit" value="Be sad about it" onclick="stat = 4.1;" /><input class ="btn" type="submit" value="F*ck them. I don\'t need a family" onclick="stat = 4.2;" />';
    } else if (stat == 5) {
        element.innerHTML = "You see some kids bullying your best friend</br><b>What should you do?<b></br>" +
         '<input class ="btn" type="submit" value="Just watch it" onclick="stat = 5.1;" /><input class ="btn" type="submit" value="Stand for them once and for all" onclick="stat = 5.2;" /><input class ="btn" type="submit" value="Tell a teacher" onclick="stat = 5.3;" />';
    } 
}

setInterval(updater, 2000);