var element = document.getElementById("Starter");

function updater2() {
    if (stat == 2.1) {
        element.innerHTML = "אתה מת!";
        stat = 1;
    } else if (stat == 2.2) {
        element.innerHTML = "כולם מתים.</br>אתה מסתכל על הרצפה בהבנה שאין דרך אחורה.</br>כוחות המשטרה מציפים את המקום ותוך שניות אחדות נמחק לך העתיד.";
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
        element.innerHTML = "אתה מזיין את בלה.</br>איבר המין שלה כל כך נעים ורטוב/</br>האורגזמה כל כך טובה שאתה חוזר בזמן כמה דקות עם היכולת לסבול שיעמום גדול.";
        stat = 5;
    } else if (stat == 4.2) {
        element.innerHTML = "אתה קופץ מהחלון בניסיון לברוח.</br>חתיכת מפגר מה חשבת לעצמך שתשרוד נפילה של בניין?";
        stat = 1;
    } else if (stat == 4.3) {
        element.innerHTML = "השיעמום כל כך גדול.</br>אתה לא יכול לסבול את זה והמוח שלך מתפוצץ.";
        stat = 1;
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