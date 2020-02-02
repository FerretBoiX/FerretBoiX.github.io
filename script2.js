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
    } else if (stat == 3.1) {
        element.innerHTML = "You just broke up with her and continued your life.</br>Maybe you'll find a better girlfriend one day.";
        stat = 4;
    } else if (stat == 3.2) {
        element.innerHTML = "You just ignore the fact.</br>One day she asks you when will you marry her.</br>Tears drop and you have a mental breakdown.</br>You can't do it anymore so you die.";
        stat = 1;
    }  else if (stat == 3.3) {
        element.innerHTML = "You murdered her.</br>Police found you were the one who killed her.</br>What were you expecting would happen?!.";
        stat = 1;
    } else if (stat == 4.1) {
        element.innerHTML = "You get depressed.</br>Nothing matters to you anymore.</br>You go living in the streets and die because of hunger.";
        stat = 1;
    } else if (stat == 4.2) {
        element.innerHTML = "You don\'t need them.</br>If they can\'t understand you somebody else can.</br>Maybe one day you'll find a boyfriend..";
        stat = 5;
    } else if (stat == 5.1) {
        element.innerHTML = "Your friend was beaten hard..</br>He never wants to talk to you again.";
        stat = 1;
    } else if (stat == 5.2) {
        element.innerHTML = "You tell them to f*ck off.</br>They punch your face and break your nose.";
        stat = 1;
    }  else if (stat == 5.3) {
        element.innerHTML = "You call a teacher.</br>They stop the bullies and you get +5 points in the next test.";
        stat = 6;
    }
}

setInterval(updater2, 2500);