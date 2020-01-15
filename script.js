var stat = 0;

var element = document.getElementById("Starter");

function updater() {
    if (stat == 0) {
        element.innerHTML = ""
    }
    else if (stat == 1) {
        element.innerHTML = "You're a very sad hamus... </br>You think about commiting a suicide.. </br>What should you do?</br>" + '<input class ="btn" type="submit" value="Suicide" onclick="stat = 2;" /><input class ="btn" type="submit" value="S T O P" onclick="stat = 3;" />';
    }
    else if (stat == 2) {
        element.innerHTML = "GAME OVER </br>"
        stat = 0
    }
    else if (stat == 3) {
        element.innerHTML = "You need to go to school.. FUCK school... </br>Are you sure about not suiciding?.. </br>What should you do?</br>" + '<input class ="btn" type="submit" value="Suicide" onclick="stat = 2;" /><input class ="btn" type="submit" value="S T O P" onclick="stat = 3;" />';
        stat = 0
    }
}

setInterval(updater, 1500);