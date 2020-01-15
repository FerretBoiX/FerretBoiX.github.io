var stat = 0;

var element = document.getElementById("Starter");

function updater() {
    if (stat == 0) {
        element.innerHTML = "<b>PRESS START</b>"
    }
    else if (stat == 1) {
        element.innerHTML = "You're a very sad hamus... </br>You think about commiting a suicide.. </br><b>What should you do?<b></br>" + '<input class ="btn" type="submit" value="Suicide" onclick="stat = 2;" /><input class ="btn" type="submit" value="S T O P" onclick="stat = 3;" />';
    }
    else if (stat == 2) {
        element.innerHTML = "GAME OVER </br>"
        stat = 0
    }
    else if (stat == 3) {
        element.innerHTML = "You need to go to school.. FUCK school... </br>Are you sure about not suiciding?.. </br><b>What should you do?<b></br>" + '<input class ="btn" type="submit" value="Suicide" onclick="stat = 2;" /><input class ="btn" type="submit" value="S T O P   I SAID   S T O P" onclick="stat = 4;" />';
    }
    else if (stat == 4) {
        element.innerHTML = "You're going to sleep.</br>You fell down the stairs while getting to bed...</br>";
        stat = 2;
    }
}

setInterval(updater, 2000);
