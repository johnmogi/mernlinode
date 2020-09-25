import Carousel from "../components/Carousel";
import ReactImage from "../assets/mdb-react-small.png";
import { getSortedPostsData } from "../lib/posts";
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBView,
  
  
} from "mdbreact";


import Head from "next/head";
import ProjectsDemo from "../components/projectsDemo";

const WelcomePage = () => (
  <>
    <Head>
      <title>
        ריאקט, נקסט, עיצוב אתרים חכמים ומהירים - ג'ון מוגי - 0509382456
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:description"
        content="כל מה שרציתם בפיתוח פרונטאנד חכם ומדויק ולא העזתם לבקש... מתמחה באתרי וורדפרס ובעיצוב והגשה חכמה ומהירה"
      />
    </Head>
  
    <MDBContainer fluid id="stage">

    <div id='parallaxintro'>
   
        <MDBView
          src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
          fixed
        >
          <MDBMask className='rgba-black-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
              כדי ליצור אתר מוצלח
<br/> 
                  <span className='orange-text font-weight-bold'>                צריך להתכונן לאתגר....
</span>
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
רוצים לשמוע עוד ולהכיר אותי לעומק? צרו קשר                 </h5>
                <MDBBtn
                  className='btn-orange'
                  size='lg'
                  href='https://mdbootstrap.com/docs/react/css/parallax/'
                  target='_blank'
                >
רוצים להתחיל
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className='py-5'>
              <MDBCol md='12' className='text-center'>
                <p>
           שלום, שמי יונתן מוגי ואני מעצב אתרים רב תחומי,
           אני מעוניין לתת לכם שירות, לייעץ, ללוות ולקדם את הפרוייקטים שלכם עד גמר.
                </p>
 
          <MDBCol lg="6" md="12" className="mb-5">
          <MDBCol md="8" lg="6" className="float-left">
          <p>
           להביא פרוייקטים מורכבים לגמר זו מימנות שדורשת לא מעט, בראש ובראשונה עלינו לפצח את הבריף שלכם- מי קהל היעד? ומה אנחנו הערך המוסף שהוא מקבל במפגש שלו עם האתר שלנו?
                </p>
                <p>
              מעבר לייעוץ שוטף אני גם מסוגל להוציא את העבודה שלכם אל הפועל - חישבו על כך - אני גם מסוגל לתקשר עם ספקים חיצוניים וגם ניתן לעשות הכל דרכי.
                </p>
</MDBCol>
            <MDBCol md="4" lg="6" className="float-right">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
              </MDBCol>
              </MDBCol>

              </MDBRow>

          </MDBContainer>
        </main>
      </div>

      <MDBView src="/images/chess-3791454_1920.jpg">
        <MDBMask className="stylish-strong" />
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center">
          <h1 className="display-5 font-weight-bold mb-0 pt-md-5">
שכלול האתר שלכם בהצלחה                 
                 זו המשימה שלי....
                </h1>
            <hr className="hr-light my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
              איפיון וחשיבה על יעדים ומהות
            </h4>
            <h4 className="subtext-header mt-2 mb-4">
              חילוץ פרוייקטים ותחזוקה של נכסים באינטרנט{" "}
            </h4>
            <h4 className="subtext-header mt-2 mb-4">
              תכנון, עיצוב ובנייה - כלים שלובים.
            </h4>
            <MDBBtn outline rounded color="white">
              בואו ונתחיל <MDBIcon icon="home" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <h2 className="display-4 font-weight-bold mb-0 pt-md-5 text-center white-text">
          טיזר עבודות
        </h2>

        <Carousel />
      </MDBView>
    </MDBContainer>
    <MDBContainer fluid>
    <MDBView src='https://images.pexels.com/photos/1660753/pexels-photo-1660753.jpeg?cs=srgb&dl=pexels-schach-1660753.jpg&fm=jpg'>
    <MDBContainer>
        <MDBMask className="rgba-black-strong" />
        <MDBRow>
          <h3 className="display-3 font-weight-bold mb-0 pt-md-5 text-center white-text">
            תיק עבודות
          </h3>
          <hr className="hr-light my-4 w-75" /> 

          <ProjectsDemo />
          <ProjectsDemo />

        </MDBRow>
      </MDBContainer> 
      </MDBView>
    </MDBContainer>
  </>
);

export default WelcomePage;
