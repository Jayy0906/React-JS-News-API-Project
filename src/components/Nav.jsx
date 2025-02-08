const Nav = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NewsAPI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {[
              "business",
              "entertainment",
              "general",
              "health",
              "science",
              "sports",
              "technology",
            ].map((category) => (
              <li key={category} className="nav-item">
                <a className="nav-link" onClick={() => setCategory(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
