var info = document.getElementById("infob");
var btns = document.getElementById("buttonb");
var cont = document.getElementById("beren");

function updater2() {
    if (stat == "3.1") {
        info.innerHTML = "ההומלס תופס אותך ואונס אותך.";
        btns.innerHTML = "";
        cont.innerHTML = '<input id="continue" class="btn" type="submit" value="המשך" onclick="updater()" />';
        stat = "3.11";
    } else if (stat == "3.112") {
        info.innerHTML = "ביבי עולה לשלטון וישראל ניצלת מאבדון.</br>אתה ממשיך את החיים שלך כאילו לא קרה דבר.</br>הכול בסדר.";
        btns.innerHTML = "";
        cont.innerHTML = '<input id="continue" class="btn" type="submit" value="המשך" onclick="updater()" />';
        stat = "1";
    } else if (stat == "3.111") {
        info.innerHTML = "אתה היית הקול האחרון שהיא הייתה צריכה בשביל לנצח בבחירות.</br>ברכות חמות, בזכותך ארץ ישראל, היא עכשיו פלסטין.</br>בנוסף, שוררת בארץ ישראל מלחמת אזרחים.</br>אתה מרגיש שהכול בגללך ואתה מחליט לסיים את זה.";
        btns.innerHTML = "";
        cont.innerHTML = '<input id="continue" class="btn" type="submit" value="המשך" onclick="updater()" />';
        stat = "3.1111";
    } else if (stat == "3.11111") {
        info.innerHTML = "אתה נאלץ להמשיך לחיות בגיהנום המכונה \"כדור הארץ\".</br>החיים ממשיכים כרגיל, אבל הסבל גדול מתמיד.</br>פספסת את ההזדמנות שלך לגאולה.";
        btns.innerHTML = "";
        cont.innerHTML = '<input id="continue" class="btn" type="submit" value="המשך" onclick="updater()" />';
        stat = "1";
    }
}