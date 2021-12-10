import React, {useState} from 'react';

const Header = () => {
  let [active, setActive] = useState('home');
  let handleClick = (event) => {
    setActive(event.target.id)
  }
  return (
    <div className="border-bottom custom-color-bg-header">
      <div className="container">
        <div className="row pt-2 pb-2">
          <div className="col-4 col-sm-6 col-md-4 p-0">
            <p className="fs-2 text-center text-sm-start m-auto custom-color">
              appo<span className="custom-color">&reg;</span>
            </p>
          </div>
          <div className="col-md-4 d-none text-white d-md-flex pt-1">
            <div className="col"><p className="text-center">Home</p></div>
            <div className="col"><p className="text-center">Features</p></div>
            <div className="col"><p className="text-center">Pricing</p></div>
          </div>
          <div className="col-8 col-sm-6 col-md-4 p-0 d-flex justify-content-end align-items-center">
            <button className="btn btn-sm px-3 me-2 fw-bolder custom-color-bg">
              Get The App
            </button>
            <button className="btn" type="button" id="dropdownMenu"
                    data-bs-toggle="dropdown" aria-expanded="false">
              <i
                className="bi bi-list fs-2 text-white"
                aria-label="burger-menu"
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenu"
              onClick={handleClick}>
              <li>
                <a
                  id="home"
                  className={`dropdown-item ${active === 'home' && 'active'}`}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  id="features"
                  className={`dropdown-item ${active === 'features' && 'active'}`}
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  id="pricing"
                  className={`dropdown-item ${active === 'pricing' && 'active'}`}
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;