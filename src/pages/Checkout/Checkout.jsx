import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    const { title, _id , price, img} = service;
    const {user} = useContext(AuthContext);
    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking= {
            customer : name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price

        } 
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json()
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('service booked successfully');
            }
        })
    )

    }
    return (
        <div>
            <h2 className="text-center" >booked: {_id} : {title}</h2>
            <div className="mx-auto w-1/4 h-32">
                    <img src={img} alt="" />
                </div>

            <form onSubmit={handleBookService} className="card-body">
               
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6"> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.name} className="input input-bordered" required />
                    </div>
                    <div className="form-control"> 
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due</span>
                        </label>
                        <input type="text" name="due" defaultValue={'$'+price} className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                   
                    <input type="submit" value="Order Confirm" className="btn btn-primary btn-block"></input>
                </div>
            </form>





        </div>
    );
};

export default Checkout;