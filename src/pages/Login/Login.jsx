import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })


                setTimeout(() => {
                    navigate(location?.state ? location?.state : '/'); // Redirect to home page
                }, 1000);



            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid credentials. Please check your email and password.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.log(error);
            });


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="mr-8 w-1/2 p-4">
                    <img src={img} alt="" />
                </div>
                <div className="card w-3/4 p-4 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt link link-hover mt-2">
                                    Do not have an Account!!
                                    <Link className="text-xl font-bold text-red-500" to="/signup"> Sign Up</Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-xl btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;