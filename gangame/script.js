var stat = 0;

var referrer = document.referrer;

if(referrer !== "") {
  document.getElementById("refea").innerHTML = "<a href="+ referrer + ">חזור אחורה</a>";
};

//if(localStorage.getItem("highscore") == null) {
//    localStorage.setItem("highscore", 1);
//}

var element = document.getElementById("Starter");
var level = document.getElementById("level");
var hiscore = document.getElementById("hiscore");

function updater() {
    if (stat == "0") {
        element.innerHTML = "<b>לחץ על התחל</b>"
    } else if (stat == "1") {
        element.innerHTML = "<b>המשחק נגמר. לך תזדיין</b>"
        stat = "0"
    } else if (stat == "2") {
        element.innerHTML = "אתה חמוס הגאנג באנג.</br>אתה זיינת סוס.</br><b>מה תעשה עכשיו?<b></br>" +
         '<input class ="btn" type="submit" value="לך לדאנגן" onclick="stat = \'2.1\';" /><input class ="btn" type="submit" value="תזיין עוד סוס" onclick="stat = \'2.2\';" /><input class ="btn" type="submit" value="תקפוץ קפיצת ראש מהגג" onclick="stat = \'2.3\';" />';
    } else if (stat == "2.12") {
        element.innerHTML = "<b>מה תעשה עכשיו?<b></br>" +
         '<input class ="btn" type="submit" value="תישאר בדאנגן ותקבל בתחת" onclick="stat = \'2.121\';" /><input class ="btn" type="submit" value="תעזוב הכול ולך למכולת" onclick="stat = \'2.122\';" />';
    } else if (stat == "2.1210") {
        element.innerHTML = "<b>מה תעשה עכשיו?<b></br>" +
         '<input class ="btn" type="submit" value="תדחוף דילדו לחור התחת בתקווה שהדימום יפסיק" onclick="stat = \'2.12101\';" /><input class ="btn" type="submit" value="תגנוב לאחת החמוסות בדאנגן את הפדים" onclick="stat = \'2.12102\';" /><input class ="btn" type="submit" value="תבקש מאחת הבנות ללקק לך את התחת" onclick="stat = \'2.12103\';" />';
    } else if (stat == "2.122") {
        element.innerHTML = "<b>מה תעשה עכשיו?<b></br>" +
         '<input class ="btn" type="submit" value="תוציא את תיק הקוקאין שלך ותתחיל להסניף שורות" onclick="stat = \'2.1221\';" /><input class ="btn" type="submit" value="שלוף את האיבר והתחל לנענע אותו מול כולם" onclick="stat = \'2.1222\';" /><input class ="btn" type="submit" value="תאונן על המוכרת" onclick="stat = \'2.1223\';" />';
    } else if (stat == "2.12210") {
        element.innerHTML = "<b>מה תעשה עכשיו?<b></br>" +
         '<input class ="btn" type="submit" value="תסרב" onclick="stat = \'2.122101\';" /><input class ="btn" type="submit" value="תאשר" onclick="stat = \'2.122102\';" />';
    } else if (stat == "3.1") {
        element.innerHTML = "ניתנת לך אפשרות לבחור לאיזה כלא תלך.</br><b>באיזה כלא תבחר?<b></br>" +
         '<input class ="btn" type="submit" value="תתאבד" onclick="stat = \'1\';" /><input class ="btn" type="submit" value="הכלא ברמלה" onclick="stat = \'3.13\';" /><input class ="btn" type="submit" value="כלא רוסי" onclick="stat = \'3.12\';" />';
    } else if (stat == "3.13") {
        element.innerHTML = "חברי ארגון טרור קטן פונים אליך.</br>הם ראו את הפשע שעשית והם רוצים שתהיה המנהיג שלהם.</br><b>מה תעשה?<b></br>" +
         '<input class ="btn" type="submit" value="תאשר" onclick="stat = \'3.31\';" /><input class ="btn" type="submit" value="תסרב" onclick="stat = \'3.32\';" />';
    } else if (stat == "4") {
        element.innerHTML = "<b>מה תעשה עכשיו?<b></br>" +
         '<input class ="btn" type="submit" value="תתכנן בריחה מהכלא" onclick="stat = \'4.1\';" /><input class ="btn" type="submit" value="תגדל זקן ותתחיל ללבוש בגדים ארוכים" onclick="stat = \'4.2\';" />';
    } else if (stat == "4.20") {
        element.innerHTML = "<b>מה תבקש?<b></br>" +
         '<input class ="btn" type="submit" value="תבקש חמוס" onclick="stat = \'4.201\';" /><input class ="btn" type="submit" value="תבקש שיפתיעו אותך" onclick="stat = \'4.202\';" />';
    }
    updater2();
}

//setInterval(() => {
//    if(stat > localStorage.getItem("highscore")) {
//        localStorage.setItem("highscore", Math.trunc(stat));
//    }
//    hiscore.innerHTML = "שיא נוכחי: " + String(parseInt(localStorage.getItem("highscore")) - 1);
//}, 1000);
