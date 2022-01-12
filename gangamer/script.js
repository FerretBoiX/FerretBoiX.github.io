var stat = 0;

var referrer = document.referrer;

if(referrer !== "") {
  document.getElementById("refea").innerHTML = "<a href="+ referrer + ">חזור אחורה</a>";
};

if(localStorage.getItem("highscore") == null) {
    localStorage.setItem("highscore", 1);
}

var info = document.getElementById("infob");
var btns = document.getElementById("buttonb");
var cont = document.getElementById("beren");
var level = document.getElementById("level");
var hiscore = document.getElementById("hiscore");

function updater() {
    if (stat == "0") {
        info.innerHTML = "<oof2>לחץ על התחל</b>"
        cont.innerHTML = ''
    } else if (stat == "1") {
        info.innerHTML = "<oof2>המשחק נגמר. לך תזדיין</b>"
        cont.innerHTML = '<input id="continue" class="btn" type="submit" value="המשך" onclick="updater()" />';
        stat = "0"
    } else if (stat == "2") {
        info.innerHTML = "נשאר רק עוד כביש אחד בינך לבין הבית, אך לפתע..</br>שער בין יקומי נפתח אל מול עינך.</br>מתוך השער יוצא אדם זר אשר לא ראית קודם.</br>הוא אומר לך לבוא איתו אך אתה מסרב.</br>הוא אומר לך שאתה חייב לבוא איתו ושאין לו זמן להסביר, </br>אך אתה עדיין מסרב.</br>"
        btns.innerHTML = '';
        cont.innerHTML = '<input id="continue" class="btn" type="submit" value="המשך" onclick="updater()" />'
        stat = "3"
    } else if (stat == "3") {
        info.innerHTML = "לפתע אתה רואה את ההומלס מתפתח לסופר סאייה ושט לכיוונך.</br><oof2>מה תעשה עכשיו?<oof2></br>"
        btns.innerHTML = '<input class ="btn" type="submit" value="תיכנס לשער הבין מימדי" onclick="stat = \'4\'; updater2()" /><input class ="btn" type="submit" value="תסרב" onclick="stat = \'3.1\'; updater2()" />';
        cont.innerHTML = ''
    }  else if (stat == "3.11") {
        info.innerHTML = "לאחר יום, מירב מיכאלי מגלה על כך ומשתמשת בך בתור קמפיין לבחירות.</br>מה תעשה עכשיו?</br><oof2>מה תעשה עכשיו?<oof2></br>"
        btns.innerHTML = '<input class ="btn" type="submit" value="תבחר בה" onclick="stat = \'3.111\'; updater2()" /><input class ="btn" type="submit" value="לא תבחר בה" onclick="stat = \'3.112\'; updater2()" />';
        cont.innerHTML = ''
    }   else if (stat == "3.1111") {
        info.innerHTML = "לפתע, האדם המסתורי מופיע אל מול עינייך.</br>הוא מציע לך לחזור בך בבחירתך.</br><oof2>מה תעשה עכשיו?<oof2></br>"
        btns.innerHTML = '<input class ="btn" type="submit" value="תאשר" onclick="stat = \'4\'; updater2()" /><input class ="btn" type="submit" value="תסרב" onclick="stat = \'3.11111\'; updater2()" />';
        cont.innerHTML = ''
    }
    updater2();
}

setInterval(() => {
    if(stat > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", Math.trunc(stat));
    }
    hiscore.innerHTML = "שיא נוכחי: " + String(parseInt(localStorage.getItem("highscore")) - 1);
}, 1000);
