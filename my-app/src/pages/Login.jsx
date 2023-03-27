import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/auth/authSlice';

const Login = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login(userData.username, userData.password));
        navigate('/');
        setUserData({
            username: '',
            password: ''
        });
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className='container'>
            <div className="form-box">
                <h3 className='stats__title'>Login Page</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='username' value={userData.username} onChange={onInputChange} placeholder='Username' required />
                    <input type="text" name='password' value={userData.password} onChange={onInputChange} placeholder='Password' required />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login