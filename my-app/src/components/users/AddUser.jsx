import { useState, useEffect } from 'react';
import { addData, updateData } from '../../redux/features/crud/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { allPermissions } from "../../api/permissions";

const AddUser = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    role: 'User',
    permmissions: []
  });

  const { users } = useSelector((state) => (state.user));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleUser = users.find((user) => user.id === id);
      setUserData({ ...singleUser });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    const token = Math.random().toString(36).substr(2);
    e.preventDefault();
    if (!id) {
      await dispatch(addData({ username: userData.username, password: userData.password, role: userData.role, permmissions: userData.permmissions, accessToken: token }));
    } else {
      await dispatch(updateData({ id: id, userData: userData }));
    }
    handleClear();
    navigate('/users');
  };

  const handleClear = () => {
    setUserData({ username: "", password: "", role: "User" });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const { permmissions } = userData;
    console.log(`${value} is ${checked}`);

    if (checked) {
      setUserData({ ...userData, permmissions: [...permmissions, value] });
    }
    else {
      setUserData({ ...userData, permmissions: permmissions.filter((e) => e !== value) });
    }
  };

  const checkboxsElement = allPermissions.map((item, index) => {
    return (
      item !== 'all' && <div key={index} className="per">
        <input
          className="form-check-input"
          type="checkbox"
          value={item}
          checked={userData.permmissions.some(p => p === item)}
          name="permmissions"
          id="flexCheckDefault"
          onChange={onCheckboxChange}
        />
        <label
          className="lab"
          htmlFor="flexCheckDefault"
        >{item}</label>
      </div>
    );
  })

  return (
    <div className='container'>
      <div className="create-form-box">
        <h3 className='stats__title'>{id ? "Edit User Page" : "Create User Page"}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' value={userData.username} onChange={onInputChange} placeholder='Username' required />
          <input type="text" name='password' value={userData.password} onChange={onInputChange} placeholder='Password' required />
          <select className='roles' name="role" value={userData.role} onChange={onInputChange}>
            <option>User</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
          {checkboxsElement}
          <button type='submit'>Save</button>
        </form>
        <Link className='go-back-btn' to="/users">Go Back</Link>
      </div>
    </div>
  );
};

export default AddUser;