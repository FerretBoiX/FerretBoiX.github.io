var element = document.getElementById("Starter");

function updater2() {
    if (stat == 2.1) {
        element.innerHTML = "אתה מת!";
        stat = 1;
    } else if (stat == 2.2) {
        element.innerHTML = "כולם מתים.</br>אתה מסתכל למטה בהבנה שאין דרך אחורה.</br>כוחות המשטרה מציפים את המקום ותוך שניות אחדות נמחק לך העתיד.";
        stat = 1;
    }  else if (stat == 2.3) {
        element.innerHTML = "אתה ממשיך לכיוון הכיתה ורואה את כל החברים שלך. אתה נזכר שיש לך סכיזופרניה ונדמה לך כאילו הם כולם מייקל ריצארדס.";
        stat = 3;
    } else if (stat == 3.1) {
        element.innerHTML = "בעטת כל כך חזק שהדלת חזרה אליך וגרמה לזעזוע מוח ולרגל שבורה</br>חטפת שבץ ומתת.";
        stat = 1;
    } else if (stat == 3.2) {
        element.innerHTML = "אתה נכנס לכיתה ויושב.</br>השיעמום כל כך גדול שנשרפת לך כלייה.</br>למזלך שרדת את איבוד הכלייה.</br>אתה גיבור גדול!</br>אתה ממשיך לשיעור גיאוגרפיה.";
        stat = 4;
    }  else if (stat == 3.3) {
        element.innerHTML = "אתה נכנס לכיתה עם הבולבול הקטן שלך.</br>כולם צוחקים על כמה שהבולבול שלך קטן</br>הבושה כל כך גדולה שאתה שולף סכין ובוחר לסיים את זה.";
        stat = 1;
    } else if (stat == 4.1) {
        element.innerHTML = "אתה תוקף את המורה לגיאוגרפיה.</br>בתוך פחות משנייה אתה מבין את הטעות שעשית.</br>קרני הלייזר הרצחניות של המורה לגיאוגרפיה שורפות לך את האיברים.</br>אתה לא הגיבור שכולנו היינו צריכים.";
        stat = 1;
    } else if (stat == 4.2) {
        element.innerHTML = "אתה קופץ מהחלון בניסיון לברוח.</br>חתיכת מפגר מה חשבת לעצמך שתשרוד נפילה של בניין?";
        stat = 1;
    } else if (stat == 4.3) {
        element.innerHTML = "השיעמום כל כך גדול.</br>אתה לא יכול לסבול את זה והמוח שלך מתפוצץ.";
        stat = 1;
    } else if (stat == 4.4) {
        element.innerHTML = "אתה מבקש לצאת לשירותים.</br>המורה לגיאוגרפיה צורחת עליך כי לא עשית קקי בהפסקה.</br>למזלך רחמיה עלו בה והיא אישרה לך ללכת.</br>אתה נזכר שאכלת חמין בבוקר ואתה נתקע בשירותים עד סוף היום.";
        stat = 5;
    } else if (stat == 5.1) {
        element.innerHTML = "אתה עולה על האוטובוס.</br>האוטובוס נחטף על ידי פדופיליים סודניים.</br>הם יסיעו אותך למקום טוב יותר.</br>(קולות אקדח)";
        stat = 1;
    } else if (stat == 5.2) {
        element.innerHTML = "אתה הולך ברגל.</br>הדרך לא קצרה, אך היא היחידה שיש לך סיכוי לשרוד בה.</br>אתה מתחיל ללכת.</br>לפתע אתה מותקף על ידי הומלס אשר מנסה לגנוב לך את הדברים.</br>אתה מתחיל לרוץ בכל הכוח על מנת לברוח מההומלס.</br>אתה מצליח לברוח.";
        stat = 6;
    } else if (stat == 5.3) {
        element.innerHTML = "אתה מתקשר לאמא.</br>היא עונה.</br>היא לא מזהה אותך וצורחת שזאת טעות במספר.</br>נמאס לך מהחיים.</br>אתה הולך לנמנם על הכביש.";
        stat = 1;
    }
}