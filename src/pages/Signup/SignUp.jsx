import { useContext } from "react";
import { Link } from "react-router-dom";
import  { AuthContext } from "../../Providers/AuthProvider";



const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(error => console.log(error));


        
    }
    return (
        <div>
            <div className=" w-3/4 mx-auto bg-base-200">
                <div className="hero-content">
                    <div className="card w-full p-4 shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-xl btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div>
                            <p className=" text-center link link-hover p-4">Already have an Account!!<Link className='text-xl font-bold text-red-500' to='/signup'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;