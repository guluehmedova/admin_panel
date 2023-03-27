import { useEffect } from 'react';
import '../../styles/users.css';
import { getUsers, deleteData } from '../../redux/features/crud/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const roles = {
  SuperAdmin: "Super Admin",
  Admin: "Admin",
  Editor: "Editor",
  User: "User"
}

const UserList = () => {
  const dispatch = useDispatch();
  let no = 1;

  const { users } = useSelector((state) => ({ ...state.user }));
  const { loading } = useSelector((state) => ({ ...state.user }));

  const role = JSON.parse(localStorage.getItem('role'));
  console.log(role);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour ?")) {
      dispatch(deleteData(id));
    }
  }

  return (
    <div className='container'>
      <div className="user-list">
        {
          loading ?
            <ClipLoader
              color="white"
              loading={loading}
              size={50}
            />
            :
            <>
              <h3 className='title'>User List</h3>
              {role === roles.Admin && <Link to='/addUser' className='create-btn'>Create</Link>}
              {role === roles.SuperAdmin && <Link to='/addUser' className='create-btn'>Create</Link>}
              <table>
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.map((user, i) => (
                    user.role !== "Super Admin" && <tr key={i}>
                      <td>{no++}</td>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>{user.role}</td>
                      <td>
                        <div className="actions">
                          {role === roles.SuperAdmin && <button className='delete-btn' onClick={() => handleDelete(user.id)}>Delete</button>}
                          {role === roles.SuperAdmin && <Link className='edit-btn' to={`/editUser/${user.id}`}>Edit</Link>}
                          {role === roles.Editor && <Link className='edit-btn' to={`/editUser/${user.id}`}>Edit</Link>}
                          {role === roles.Admin && <Link className='edit-btn' to={`/editUser/${user.id}`}>Edit</Link>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
        }
      </div>
    </div>
  )
}

export default UserList