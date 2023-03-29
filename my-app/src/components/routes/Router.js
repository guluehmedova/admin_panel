import { Routes, Route } from 'react-router-dom';
import routes from '../../routesList';

const Router = () => {
    const userPermissions = JSON.parse(localStorage.getItem('permmissions'));

    return (
        <Routes>
            {routes.map(route => {
                if (userPermissions.includes(route?.permissions) || route?.permissions === "all") {
                    return <Route exact={route?.exact} path={route?.path} element={route?.element}
                    />
                }
            })}
        </Routes>
    )
}

export default Router;
