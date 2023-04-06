import { Routes, Route } from 'react-router-dom';
import routes from '../../routesList';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRoles } from "../../redux/features/crud/roleSlice";
import UserList from '../users/UserList';
import CarList from '../cars/CarList';
import AddCar from '../cars/AddCar';

const Router = () => {
    const dispatch = useDispatch();
    const role = JSON.parse(localStorage.getItem('role'));
    const {roles} = useSelector((state)=>(state.role));
    const getPermmissions = roles.find((item) => item.name.toLowerCase() === role.toLowerCase());
    
    useEffect(()=>{
      dispatch(getRoles());
    },[dispatch])

    return (
        <Routes>
            {routes.map((route, index) => {
                if (getPermmissions?.permmissions?.includes(route?.permissions) || route?.permissions === "all") {
                    return <Route key={index} exact={route?.exact} path={route?.path} element={route?.element}
                    />
                }
            })}
            <Route path='/cars' element={<CarList/>}/>
            <Route path='/addCar' element={<AddCar/>}/>
        </Routes>
    )
}

export default Router;
