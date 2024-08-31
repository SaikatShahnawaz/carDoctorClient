import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete');
        if (proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted Successful');
                    const remaining = bookings.filter(booking => booking._id!==id);
                    setBookings(remaining);
                }
            })
        }

    }

    const handleBookingConfirm = id =>{
            fetch(`http://localhost:5000/bookings/${id}`,{
                method : 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status : 'confirm'})
            })
            .then(res => res.json())
            .then (data => {
                console.log(data);
                if (data.modifiedCount > 0){
                    alert('successfully updated');
                    const remaining = bookings.filter (booking => booking.id !== id);
                    const updated = bookings.find(booking => booking._id ===id);
                    updated.status='conform'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }

            })
    }



        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        useEffect(() => {
            axios.get(url, {withCredentials: true})
            .then(res => {
                setBookings(res.data);
            })
            // fetch(url)
            //     .then(res => res.json())
            //     .then(data => setBookings(data))

        }, [url]);




        return (
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings.map(booking => (<BookingRow key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                                    ></BookingRow>))

                            }





                        </tbody>


                    </table>
                </div>


            </div>
        );
    };

    export default Bookings;