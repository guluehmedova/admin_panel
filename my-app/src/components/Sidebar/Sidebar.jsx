import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "../Sidebar/sidebar.css";
import { useNavigate } from 'react-router-dom';
import routes from "../../routesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRoles } from "../../redux/features/crud/roleSlice";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    navigate('/login');
  };

  const dispatch = useDispatch();
  const {roles} = useSelector((state)=>(state.role));

  useEffect(()=>{
    dispatch(getRoles());
  },[dispatch])

  const role = JSON.parse(localStorage.getItem('role'));
  const getPermmissions = roles.find((item) => item.name.toLowerCase() === role.toLowerCase());

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2><span><i className='ri-taxi-line'></i></span> UberX</h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className='nav__list'>
            {
              routes.map((route, index) => {
                if (getPermmissions?.permmissions?.includes(route?.permissions) || route?.permissions === "all") {
                  return (
                    <li key={index} className="nav__item">
                      <NavLink to={route.path} className={(navClass) => navClass.isActive ? "nav__active nav__link" : "nav__link"}>
                        {route.permissions !== "addUser" && route.permissions !== "addRole" && role && route.permissions !== "editUser" && route.permissions !== "editRole" &&  route.name}
                      </NavLink>
                    </li>
                  )
                }
              })
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