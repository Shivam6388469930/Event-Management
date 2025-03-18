import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../Service/Api';

const Login = () => {
  const [fdata, setFdata] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!fdata.email || !fdata.password) return 'Email and password are required';
    if (!emailRegex.test(fdata.email)) return 'Invalid email format';
    return null;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    // Validate the inputs before proceeding
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }
  
    try {
      // Assuming loginUser is an API call function
      const response = await loginUser(fdata);
      // const result=response.json()
      console.log("response:",response)
  
      // Ensure respooknse is in JSON format
      if (!response.success) {
        alert("user not access")
        // // Check if the response contains JSON, if not, handle accordingly
        // const errorData = await response.text();  // Use text() for non-JSON responses
        // setError(errorData || 'Login failed.');
      } else {
        // Ensure that the response is JSON, handle successful login
        // const result = await response.json();  // Use json() only for JSON responses
        const { message, token, firstname } = response;
        
        // Store token and firstname in localStorage
        localStorage.setItem('token', token);
        console.log(localStorage.setItem('firstname', firstname))
        localStorage.setItem('firstname', firstname); 
  
        alert('Login successful!');
        navigate('/'); // Redirect to dashboard
      }
    } catch (error) {
      // Handle unexpected errors
      setError(error.message || 'An error occurred.');
      console.error(error); // Log full error for debugging
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-black" >
      <div className="w-2/5 h-4/5 mt-5 border-2 border-black p-5 bg-yellow-200 " style={{backgroundImage:"public/photogalleyimg/Moraine_Lake_17092005.jpg" }}>
        <h2 className="text-2xl text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          {['email', 'password'].map((field, index) => (
            <div key={index} className="flex flex-col w-full mb-3">
              <label htmlFor={field} className="text-lg capitalize">
                {field}:
              </label>
              <input
                type={field}
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-xl text-center">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-500 ml-2">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
