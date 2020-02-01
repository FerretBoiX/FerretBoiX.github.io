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
    } 
}

setInterval(updater, 2000);