import "./Breadcrumb.css";
const Breadcrumb = ({ previous_list, current }) => {
  return (
    <div className="container mt-4 breadcrumb-container">
      <nav className="breadcrumb-svg-arrow" aria-label="breadcrumb">
        <ol className="breadcrumb">
          {previous_list &&
            previous_list.map((item, index) => (
              <li className="breadcrumb-item" key={index}>
                <a
                  className="text-decoration-none text-secondary"
                  href={item.link}
                >
                  {item.title}
                </a>
              </li>
            ))}
          <li className="breadcrumb-item active text-dark" aria-current="page">
            {current}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
