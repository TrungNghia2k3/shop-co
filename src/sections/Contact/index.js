import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container-fluid">
        <div className="w-1292 bg-black mx-auto rounded-5 p-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-contact">
                Stay upto date about our latest offers
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <form className="contact-form w-100">
                <div className="row ">
                  <div className="col-12 d-flex gap-3 flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center w-75 rounded-5 bg-light p-2">
                      <i className="bi bi-envelope ps-3 pe-2 text-secondary fs-5"></i>

                      <input
                        type="text"
                        placeholder="Enter your email address"
                        className="form-control me-2 border-0 bg-transparent no-outline"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-light w-75 rounded-5 py-2 px-4"
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
