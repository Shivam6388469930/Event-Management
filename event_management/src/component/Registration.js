import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { postUser } from '../Service/Api';

const Registration = () => {
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d{10}$/;

    if (!fdata.name || !fdata.email || !fdata.phone || !fdata.password || !fdata.cpassword) {
      return 'All fields are required';
    }
    if (!emailRegex.test(fdata.email)) {
      return 'Invalid email format';
    }
    if (!phoneRegex.test(fdata.phone)) {
      return 'Phone number must be exactly 10 digits';
    }
    if (fdata.password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (fdata.password !== fdata.cpassword) {
      return 'Passwords do not match';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const { name, email, phone, password } = fdata;
      const response = await postUser({ name, email, phone, password });

      if (response.success) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        setError(response.message || 'Registration failed.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-2/5  mt-5 border-2 border-black p-5" style={{height:"80%",backgroundColor:'yellow'}}>
       

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          {['name', 'email', 'phone', 'password', 'cpassword'].map((field, index) => (
            <div key={index} className="flex flex-col w-full mb-3">
              <label htmlFor={field} className="text-lg capitalize">
                {field.replace('cpassword', 'Confirm Password')}:
              </label>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                id={field}
                name={field}
                className="border-2 border-black text-lg p-1"
                value={fdata[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`bg-sky-400 text-white font-medium text-2xl mb-2 px-4 py-2 hover:bg-green-400 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="text-xl text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
