import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then (res => res.json())
        .then(res => setServices(res));
    },[])
    return (
        <div>
            <div className="text-center mt-4 space-y-2">  
                <h3 className="text-orange-600 text-3xl font-semibold">Service</h3>
                <h3 className="text-3xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard> )
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;