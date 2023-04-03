import RoleList from './components/roles/RoleList';
import AddEditRole from './components/roles/AddEditRole';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import Bookings from './pages/Bookings';
import Dashboard from './pages/Dashboard';
import SellCar from './pages/SellCar';
import Settings from './pages/Settings';

const routes = [
    { path: '/', name: "Dashboard", exact: true, element: <Dashboard />, permissions: "all" },

    { path: '/sell-car', name: "SellCar", exact: false, element: <SellCar />, permissions: "sell-car" },
    { path: '/bookings', name: "Bookings", exact: false, element: <Bookings />, permissions: "bookings" },

    { path: '/settings', name: "Settings", exact: false, element: <Settings />, permissions: "settings" },

    { path: '/users', name: "Users", exact: false, element: <UserList />, permissions: "users" },
    { path: '/addUser', name: "AddUser", exact: false, element: <AddUser />, permissions: "addUser" },
    { path: '/editUser/:id', name: "EditUser", exact: false, element: <AddUser />, permissions: "editUser" },

    { path: '/roles', name: "Roles", exact: false, element: <RoleList />, permissions: "roles" },
    { path: '/addRole', name: "AddRole", exact: false, element: <AddEditRole />, permissions: "addRole" },
    { path: '/editRole/:id', name: "EditRole", exact: false, element: <AddEditRole />, permissions: "editRole" }
]

export default routes;