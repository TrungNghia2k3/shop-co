

const Brands = () => {
  return (
    <div className="brands-section bg-black">
      <div className="w-1440 px-4">
        <ul className="list-unstyled d-flex justify-content-between align-items-center flex-wrap">
          <li className="p-5">
            <img src="../assets/images/brands/versace.png" alt="Versace" className="img-fluid" />
          </li>
          <li className="p-5">
            <img src="../assets/images/brands/zara.png" alt="Zara" className="img-fluid" />
          </li>
          <li className="p-5">
            <img src="../assets/images/brands/gucci.png" alt="Gucci" className="img-fluid" />
          </li>
          <li className="p-5">
            <img src="../assets/images/brands/prada.png" alt="Prada" className="img-fluid" />
          </li>
          <li className="p-5">
            <img src="../assets/images/brands/calvin-klein.png" alt="Calvin Klein" className="img-fluid" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Brands;
