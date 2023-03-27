import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/auth/authSlice';
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');

    const { user, loading } = useSelector(state => state.auth);
    console.log("loading: ", loading);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login(userData.username, userData.password));
        // if (!user) {
        //     setError("Username or password is not correct!");
        // }
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
                {
                    loading ?
                        <ClipLoader
                            color="white"
                            loading={loading}
                            size={50}
                        />
                        :
                        <>
                            <h3 className='stats__title'>Login Page</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name='username' value={userData.username} onChange={onInputChange} placeholder='Username' required />
                                <input type="text" name='password' value={userData.password} onChange={onInputChange} placeholder='Password' required />
                                <button type='submit'>Login</button>
                            </form>
                            {/* <p className='error'>{error}</p> */}
                        </>
                }
            </div>
        </div>
    )
}

export default Login