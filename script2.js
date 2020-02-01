var element = document.getElementById("Starter");

function updater2() {
    if (stat == 2.1) {
        element.innerHTML = "You died!";
        stat = 1;
    } else if (stat == 2.2) {
        element.innerHTML = "You told the teacher you get bullied.</br>Everything went alright!</br>All the bullies were kicked out of school.";
        stat = 3;
    }  else if (stat == 2.3) {
        element.innerHTML = "You fought back!</br>One of the teachers caught you and you were kicked out of school.";
        stat = 1;
    }
}

setInterval(updater2, 2000);