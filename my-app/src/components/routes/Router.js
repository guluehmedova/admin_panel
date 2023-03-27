import { Routes, Route, Navigate } from 'react-router-dom';
import { Bookings, Dashboard, SellCar, Settings } from '../../pages/index';
import { UserList, AddUser } from '../index';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/dashboard" element={<Dashboard />} />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/sell-car' element={<SellCar />} />
            <Route path='/settings' element={<Settings />} />


            {/* CRUD PAGES */}
            <Route path='/users' exact element={<UserList />} />
            <Route path='/addUser' element={<AddUser />} />
            <Route path='/editUser/:id' element={<AddUser />} />
        </Routes>
    )
}

export default Router;
