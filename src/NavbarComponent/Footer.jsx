import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div  class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">
                    Online Pariksha Portal
                  </h5>

                  <p>
                    Step Into The Future Of Academic Excellence With Our
                    Cutting-Edge Online Pariksha Portal, Where Educational
                    Empowerment Meets Technological Innovation.
                  </p>
                </div>
               
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login From Here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log In
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            Copyrights @ OnlineParikshaPortal 2024
            
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
