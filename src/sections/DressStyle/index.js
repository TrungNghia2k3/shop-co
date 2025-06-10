import "./DressStyle.css";

const DressStyle = () => {
  return (
    <section className="dress-style-section">
      <div className="container-fluid">
        <div className="w-1292 bg-light mx-auto rounded-5 p-5">
          <h2 className="section-title">BROWSE BY DRESS STYLE</h2>

          {/* Hàng đầu: Casual (nhỏ) + Formal (lớn) */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-5">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/casual.png"
                  alt="Casual Style"
                  className="img-fluid rounded-5"
                />
                <h3>Casual</h3>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/formal.png"
                  alt="Formal Style"
                  className="img-fluid rounded-5"
                />
                <h3>Formal</h3>
              </div>
            </div>
          </div>

          {/* Hàng dưới: Party (lớn) + Gym (nhỏ) */}
          <div className="row g-3">
            <div className="col-12 col-md-7">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/party.png"
                  alt="Party Style"
                  className="img-fluid rounded-5"
                />
                <h3>Party</h3>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="dress-style-item rounded-5">
                <img
                  src="../assets/images/dress-style/gym.png"
                  alt="Gym Style"
                  className="img-fluid rounded-5"
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
