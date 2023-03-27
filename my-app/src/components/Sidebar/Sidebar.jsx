import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "../Sidebar/sidebar.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2><span><i className='ri-taxi-line'></i></span> UberX</h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className='nav__list'>
            {
              navLinks.map((item, index) => (
                <li key={index} className="nav__item">
                  <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active nav__link" : "nav__link"}>
                    <i className={item.icon}></i>
                    {item.display}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="sidebar__buttom">
          <button onClick={logout}><i className="ri-logout-circle-r-line"></i>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar