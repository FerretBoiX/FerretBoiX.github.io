var stat = 0;

var referrer = document.referrer;

if(referrer !== "") {
  document.getElementById("refea").innerHTML = "<a href="+ referrer + ">חזור אחורה</a>";
};

if(localStorage.getItem("highscore") == null) {
    localStorage.setItem("highscore", 1);
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

var element = document.getElementById("Starter");
var level = document.getElementById("level");
var hiscore = document.getElementById("hiscore");

function updater() {
    if (stat == 0) {
        element.innerHTML = "<b>לחץ על התחל</b>"
    } else if (stat == 1) {
        element.innerHTML = "<b>המשחק נגמר. לך תזדיין</b>"
        stat = 0
    } else if (stat == 2) {
        level.innerHTML = "שלב 1";
        element.innerHTML = "אתה מגיע לבית הספר</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="תתאבד" onclick="stat = 2.1;" /><input class ="btn" type="submit" value="תרסס את כל התלמידים והמורים עם מקלע מדגם M249" onclick="stat = 2.2;" /><input class ="btn" type="submit" value="תתקדם לכיוון הכיתה" onclick="stat = 2.3;" />';
    } else if (stat == 3) {
        level.innerHTML = "שלב 2";
        element.innerHTML = "אתה ממשיך ללכת לשיעור מתמטיקה</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="אתה נכנס לכיתה ובועט בדלת באגרסיביות." onclick="stat = 3.1;" /><input class ="btn" type="submit" value="תיכנס לכיתה ושב בשקט" onclick="stat = 3.2;" /><input class ="btn" type="submit" value="תנסה להרשים את הבנות ותיכנס לכיתה עם הבולבול בחוץ" onclick="stat = 3.3;" />';
    } else if (stat == 4) {
        level.innerHTML = "שלב 3";
        element.innerHTML = "אתה נכנס לשיעור עם המורה לגיאוגרפיה. </br>השיעמום כל כך גדול ואתה לא יכול לעמוד בזה.</br>אתה חייב לפעול.</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="תקוף את המורה לגיאוגרפיה" onclick="stat = 4.1;" /><input class ="btn" type="submit" value="תקפוץ מהחלון בניסיון לברוח מהשיעור" onclick="stat = 4.2;" /><input class ="btn" type="submit" value="תשב בשקט כמו ילד טוב ותקשיב לשיעור" onclick="stat = 4.3;" /><input class ="btn" type="submit" value="תבקש לצאת לשירותים" onclick="stat = 4.4;" />';
    } else if (stat == 5) {
        level.innerHTML = "שלב 4";
        element.innerHTML = "סיימת לחרבן.</br>יום הלימודים נגמר.</br>אתה בדרכך הביתה.</br>הדרך מלאה סכנות.</br><b>באיזו דרך תלך הביתה?<b></br>" +
        '<input class ="btn" type="submit" value="קח אוטובוס" onclick="stat = 5.1;" /><input class ="btn" type="submit" value="לך ברגל" onclick="stat = 5.2;" /><input class ="btn" type="submit" value="התקשר לאמא" onclick="stat = 5.3;" />';
    } else if (stat == 6) {
        level.innerHTML = "שלב 5";
        element.innerHTML = "נשאר רק עוד כביש אחד בינך לבין הבית.</br><b>אך לפתע..<b></br>" +
        '<a class ="btn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" style="text-decoration: none; color:black">המשך יבוא</a>';
    } 
    updater2();
}

setInterval(() => {
    if(stat > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", Math.trunc(stat));
    }
    hiscore.innerHTML = "שיא נוכחי: " + String(parseInt(localStorage.getItem("highscore")) - 1);
}, 1000);
