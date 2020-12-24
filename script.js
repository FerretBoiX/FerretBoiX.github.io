var stat = 0;

var element = document.getElementById("Starter");
var level = document.getElementById("level");

function updater() {
    if (stat == 0) {
        element.innerHTML = "<b>לחץ על התחל</b>"
    } else if (stat == 1) {
        element.innerHTML = "<b>המשחק נגמר. לך תזדיין</b>"
        stat = 0
    } else if (stat == 2) {
        level.innerHTML = "Level 1";
        element.innerHTML = "אתה מגיע לבית הספר</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="תתאבד" onclick="stat = 2.1;" /><input class ="btn" type="submit" value="תרסס את כל התלמידים והמורים עם מקלע מדגם M249" onclick="stat = 2.2;" /><input class ="btn" type="submit" value="תתקדם לכיוון הכיתה" onclick="stat = 2.3;" />';
    } else if (stat == 3) {
        level.innerHTML = "Level 2";
        element.innerHTML = "אתה ממשיך ללכת לשיעור מתמטיקה</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="אתה נכנס לכיתה ובועט בדלת באגרסיביות." onclick="stat = 3.1;" /><input class ="btn" type="submit" value="תיכנס לכיתה ושב בשקט" onclick="stat = 3.2;" /><input class ="btn" type="submit" value="תנסה להרשים את הבנות ותיכנס לכיתה עם הבולבול בחוץ" onclick="stat = 3.3;" />';
    } else if (stat == 4) {
        level.innerHTML = "Level 3";
        element.innerHTML = "אתה נכנס לשיעור עם בלה לא חבר. </br>השיעמום כל כך גדול ואתה לא יכול לעמוד בזה.</br>אתה חייב לפעול.</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="תקוף את בלה" onclick="stat = 4.1;" /><input class ="btn" type="submit" value="תקפוץ מהחלון בניסיון לברוח מהשיעור" onclick="stat = 4.2;" /><input class ="btn" type="submit" value="תשב בשקט כמו ילד טוב ותקשיב לשיעור" onclick="stat = 4.3;" />';
    } else if (stat == 5) {
        level.innerHTML = "Level 4";
        element.innerHTML = "You see some kids bullying your best friend</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="Just watch it" onclick="stat = 5.1;" /><input class ="btn" type="submit" value="Stand for them once and for all" onclick="stat = 5.2;" /><input class ="btn" type="submit" value="Tell a teacher" onclick="stat = 5.3;" />';
    } 
    updater2();
}