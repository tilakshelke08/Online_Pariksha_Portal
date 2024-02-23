import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import { Link } from "react-router-dom";
import exam_1 from "../images/exam_1.png";
import exam_2 from "../images/exam_2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-color">
            <h1>Welcome to Online Pariksha  Portal</h1>
            <p>
              Step Into The Future Of Academic Ecellence With Our Cutting-Edge
              Online Pariksha Portal, Where Educational Empowerment Meets
              Technological Innovation. Effortlessly Traverse Your Academic
              Journey With Ease As You Embark On Secure Assessments,
              Conveniently Submit Your Exams, And Effortlessly Access Your
              Results.
            </p>
            <p>
              Our User-Friendly Interface Guarantees A Seamless And Intuitive
              Experience, Providing You Complete Control Over Your Academic
              Endeavors From The Convenience Of Your Own Device. With Robust
              Measures In Place, Rest Assured That Your Personal Information Is
              Secure Throughout Every Interaction. Join Us On This Digital
              Academic Expedition And Unlock A New Era Of Examination
              Convenience And Confidence. Welcome To A Portal That Redefines The
              Way You Experience Online Exams, Making Learning And Assessment
              Smarter, Safer, And More Accessible Than Ever Before.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={exam_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={exam_2}
              alt="Logo"
              width="350"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8 text-color">
            <h1 className="ms-5">Simplify Your Exam Experience</h1>
            <p className="ms-5">
              Welcome To A Hassle-Free Academic Journey With Our Online Pariksha
              Portal, Where Navigating Assessments Is A Breeze. Say Goodbye To
              Complexities As You Effortlessly Manage Your Exams In A
              User-Friendly Environment. With A Straightforward Interface,
              Submitting Exams And Accessing Results Become a Seamless Process,
              All From The Comfort Of Your Device.
            </p>
            <p className="ms-5">
              Experience The Convenience Of Streamlined Academic Assessments.
              Our Platform Is Designed For Simplicity, Ensuring You Can Focus On
              Your Exams Without Unnecessary Stress. From Straightforward
              Submissions To Easy Result Retrieval, We've Made Online Exams A
              Straightforward And User-Friendly Experience, Redefining How You
              Approach Assessments.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
