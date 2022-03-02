import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Home
            <br />
            {/* Web <i class="bi bi-egg"></i> os */}
          </>
        }
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              className="headerHomeImage d-block w-100"
              src="https://source.unsplash.com/random/1480x595?puppy"
              alt="random Photo"
            />

            <p className="textDirection">
              מקלחת ותספורת זה לא לכולם פרוות הכלב מהווה חסימה מפני קרני השמש
              הצורבות, כסות מפני הרוח המייבשת ובידוד מפני לחות וגשם. העור מכוסה
              בשכבת שומן. אם מסירים אותה בחפיפה תדירה עם שמפו, למעשה אנו פוגעים
              במו ידינו בהגנה הטבעית היחידה של הכלב מפני פגעי מזג האוויר. לכן,
              כדאי שכלבים יקבלו תספורת וחפיפה בתדירות שאינה עולה על פעם בשלושה
              חודשים, ושהתספורת תהיה מותאמת לגזע. גזעים מסויימים דוגמת סמוייד
              ופומרניאן, שהפרווה שלהם מורכבת מ 4 שכבות, דורשים דילול במברשות
              מיוחדות. עבור רוב הספרים, מדובר בעבודה קשה והם מעדיפים לגלח את
              הכלב – מה שכאמור פוגע בו. לכן, אפילו שזו “רק תספורת”, ואפילו שטבעו
              של שיער לצמוח מחדש, חשוב לוודא שהכלב שלכם נמצא בידיים טובות.
            </p>
            <br />
            <br />
          </div>
          <div className="col-md-6 col-lg-6 textDirection">
            <h5>איך לעבוד עם כלב אגרסיבי והדרכים להתמודד איתו..</h5>
            <img
              className="d-block w-100 mt-3"
              src="https://source.unsplash.com/random/1380x595?bulldog"
              alt="random Photo"
            />
            <p className="textDirection">
              ברומטר בדמות זנב, תרמוסטט בדמות אזניים בעלים רבים מדברים עם
              כלביהם. מן הסתם הכלבים לא מבינים את המלים, אבל כן יכולים להבין
              <br />
              <span>
                <a href="#">
                  <b>להמשך קריאה... </b>
                </a>
              </span>
            </p>
          </div>

          <div className="col-md-6 col-lg-6 textDirection">
            <h5>הדרך הנכונה להתמודד עם חרדות ופחדים.. </h5>
            <img
              className="d-block w-100 mt-3"
              src="https://source.unsplash.com/random/1380x595?dog"
              alt="random Photo"
            />
            <p className="textDirection">
              ברומטר בדמות זנב, תרמוסטט בדמות אזניים בעלים רבים מדברים עם
              כלביהם. מן הסתם הכלבים לא מבינים את המלים, אבל כן יכולים להבין
              נימה, וגם צליל של פקודות שונות.
              <br />
              <span>
                <a href="#">
                  <b>להמשך קריאה... </b>
                </a>
              </span>
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <img
              className="d-block w-100 mt-3"
              src="https://source.unsplash.com/random/1380x595?puppy,love"
              alt="random Photo"
            />
            <p className="textDirection">
              הצרכים הבסיסיים של כלבנו הם באחריותנו. הוא תלוי בנו ואין לו יכולת
              לשלוט על השגת צרכיו בעצמו, לכן אנו צריכים ללמוד ולהכיר את הצרכים
              הללו והמענה עליהם מראש. אם אנו מחסירים מהם, אנו עלולים ללא כוונה
              רעה לגרום נזק: בעיות התנהגות שנובעות מחרדה, בידוד, מחסור בגירויים
              ומחסור בחשיפה הן מחזה נפוץ ואנו רוצים להקדים רפואה למכה.
              <br />
              <span>
                <a href="#">
                  <b>להמשך קריאה... </b>
                </a>
              </span>
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <img
              className="d-block w-100 mt-3"
              src="https://source.unsplash.com/random/1380x595?dog,toys"
              alt="random Photo"
            />
            <p className="textDirection">
              הקולר צריך להיות צמוד לצווארו של הכלב, אך בשום אופן לא הדוק או
              חונק. עלינו לוודא שהקולר לא רופף מדי ואינו מאפשר לראש הכלב להשתחל
              ממנו, בדרך-כלל מומלץ מרווח של שתי אצבעות בין הקולר לצוואר הכלב.
              <br />
              <span>
                <a href="#">
                  <b>להמשך קריאה... </b>
                </a>
              </span>
            </p>
          </div>
          {/* ad banner */}
          <div className="col-md-12 col-lg-12">
            <img
              className="d-block w-100 mt-3"
              src="https://source.unsplash.com/random/1380x595?dog"
              alt="random Photo"
            />
            <p className="textDirection">
              כלבים לא באמת רואים בשחור ולבן ראיית הצבעים של כלבים עובדת באופן
              שונה מזו של בני האדם, והספקטרום שלהם שונה משלנו, אבל שחור ולבן הם
              לא הצבעים היחידים שהם רואים. בנוסף, בלילה, הם רואים הרבה יותר טוב
              מאיתנו.
              <span>
                <a href="#">
                  <b>להמשך קריאה... </b>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
