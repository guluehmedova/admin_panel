import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from '../../redux/features/crud/carSlice';
import moment from 'react-moment';

const AddCar = () => {
  const [carData, setCarData] = useState({
    name: '',
    image: "",
    createdAt: 0,
    price: 0,
    updatedAt: 0
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var moment = require('moment');
    const carCreatedDate = moment().format('LLLL');
    await dispatch(addData({ name: carData.name, createdAt: carCreatedDate, price: carData.price, updatedAt: carCreatedDate, image: carData.image.slice(12) }));
    handleClear();
    navigate('/cars');
  };

  const handleClear = () => {
    setCarData({ name: "", price: 0, image: "" });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  return (
    <div className='container'>
      <div className="create-form-box">
        <h3 className='stats__title'>Create Car Page</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={carData.name} onChange={onInputChange} placeholder='Name' required />
          <input type="file" name="image" value={carData.image} onChange={onInputChange} required />
          <input type="number" name="price" min="10" value={carData.price} onChange={onInputChange} placeholder='Price' />
          <button type='submit'>Save</button>
        </form>
        <Link className='go-back-btn' to="/cars">Go Back</Link>
      </div>
    </div>
  )
}

export default AddCar