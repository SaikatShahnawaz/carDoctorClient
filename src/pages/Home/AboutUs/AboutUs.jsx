import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-2/4 border-white border-8 rounded-lg shadow-2xl" />

                </div>

                <div className="mt-5 lg:mt-1 lg:w-1/2 space-y-4 p-4">
                    <h1 className="text-6xl text-orange-600 font-bold">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br></br>& of experience <br></br>in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                    <p className="py-6"> the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;