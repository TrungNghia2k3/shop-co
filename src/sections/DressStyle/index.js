import "./DressStyle.css";

const DressStyle = () => {
  return (
    <section className="dress-style-section">
      <div className="container p-2">
        <div className="bg-light rounded-5 dress-style-container">
          <h2 className="section-title">BROWSE BY DRESS STYLE</h2>

          <div className="row g-3 mb-4">
            <div className="col-lg-4 col-sm-6">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/casual.png"
                  alt="Casual Style"
                  className="rounded-5 w-100 h-100 object-fit-cover"
                />
                <h3>Casual</h3>
              </div>
            </div>
            <div className="col-lg-8 col-sm-6">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/formal.png"
                  alt="Formal Style"
                  className="rounded-5 w-100 h-100 object-fit-cover"
                />
                <h3>Formal</h3>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8 col-sm-6">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/party.png"
                  alt="Party Style"
                  className="rounded-5 w-100 h-100 object-fit-cover"
                />
                <h3>Party</h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/gym.png"
                  alt="Gym Style"
                  className="rounded-5 w-100 h-100 object-fit-cover"
                />
                <h3>Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
