var stat = 0;

var buttons = '<input type="submit" value="Suicide" onclick="stat = 2;" /><input type="submit" value="S T O P" onclick="stat = 3;" />';

var element = document.getElementById("Starter");

function updater() {
    if (stat == 0) {
        element.innerHTML = ""
    }
    else if (stat == 1) {
        element.innerHTML = "You're a very sad hamus... </br>You think about commiting a suicide.. </br>What should you do?</br>" + buttons;
    }
    else if (stat == 2) {
        element.innerHTML = "GAME OVER </br>"
        stat = 0
    }
}

// setInterval(updater, 1000);