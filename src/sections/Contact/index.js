import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section px-3">
      <div className="container ">
        <div className="bg-black mx-auto rounded-5 p-5">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <p className="text-contact fs-1 fw-bold">
                Stay upto date about our latest offers
              </p>
            </div>
            <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <form className="contact-form w-100">
                <div className="row ">
                  <div className="col-12 d-flex gap-3 flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center w-100 rounded-5 bg-light p-2">
                      <i className="bi bi-envelope ps-3 pe-2 text-secondary fs-5"></i>

                      <input
                        type="text"
                        placeholder="Enter your email address"
                        className="form-control me-2 border-0 bg-transparent no-outline"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-light w-100 rounded-5 py-2 px-4"
                    >
                      Subscribe to Newsletter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
