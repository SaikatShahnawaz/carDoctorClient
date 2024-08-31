import imageSlide1 from "../../../assets/images/banner/1.jpg"
import imageSlide2 from "../../../assets/images/banner/2.jpg"
import imageSlide3 from "../../../assets/images/banner/3.jpg"
import imageSlide4 from "../../../assets/images/banner/4.jpg"
import imageSlide5 from "../../../assets/images/banner/5.jpg"
import imageSlide6 from "../../../assets/images/banner/6.jpg"

const Bannar = () => {
    return (
        <div className="carousel w-full h-[600px]">
            {/* <!-- Slide 1 --> */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={imageSlide1} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl top-0 left-0 pl-12  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="space-y-5 w-3/4  text-white">
                        <h1 className="font-bold text-2xl lg:text-6xl ">Affordable <br></br> Price For Car <br></br>Servicing</h1>
                        <p className="text-white">There are many variations of passages of  available, but <br></br>the majority have suffered alteration in some form</p>
                        <div className=" flex space-x-2"> 
                            <a className="text-white font-bold  btn bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Discover More</a>
                            <a className="text-white font-bold btn  bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Latest Project</a>
                        </div>
                   </div>
                </div>
                {/* slider buttons */}
                <div className="absolute flex bottom-0 right-0 mr-8 gap-2">
                    <a href="#slide6" className="mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❮</a>
                    <a href="#slide2" className=" mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            {/* -- Slide 2--  */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={imageSlide2} className="w-full rounded-xl" />
                {/* Gradiant and docs */}
                <div className="absolute flex items-center rounded-xl top-0 left-0 pl-12  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="space-y-5 w-3/4  text-white">
                        <h1 className="font-bold text-2xl lg:text-6xl ">Affordable <br></br> Price For Car <br></br>Servicing</h1>
                        <p className="text-white">There are many variations of passages of  available, but <br></br>the majority have suffered alteration in some form</p>
                        <div className=" flex space-x-2"> 
                            <a className="text-white font-bold  btn bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Discover More</a>
                            <a className="text-white font-bold btn  bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Latest Project</a>
                        </div>
                   </div>
                </div>
                {/* slider buttons */}
                <div className="absolute flex bottom-0 right-0 mr-8 gap-2">
                    <a href="#slide1" className="mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❮</a>
                    <a href="#slide3" className=" mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={imageSlide3} className="w-full rounded-xl" />
                     {/* GradiantBackground and docs */}
                     <div className="absolute flex items-center rounded-xl top-0 left-0 pl-12  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="space-y-5 w-3/4  text-white">
                        <h1 className="font-bold text-2xl lg:text-6xl ">Affordable <br></br> Price For Car <br></br>Servicing</h1>
                        <p className="text-white">There are many variations of passages of  available, but <br></br>the majority have suffered alteration in some form</p>
                        <div className=" flex space-x-2"> 
                            <a className="text-white font-bold  btn bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Discover More</a>
                            <a className="text-white font-bold btn  bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Latest Project</a>
                        </div>
                   </div>
                </div>
                {/* slider buttons */}
                <div className="absolute flex bottom-0 right-0 mr-8 gap-2">
                    <a href="#slide2" className="mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❮</a>
                    <a href="#slide4" className=" mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            {/* ---slide 4--- */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={imageSlide4} className="w-full rounded-xl" />
                     {/* Gradiant and docs */}
                     <div className="absolute flex items-center rounded-xl top-0 left-0 pl-12  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="space-y-5 w-3/4  text-white">
                        <h1 className="font-bold text-2xl lg:text-6xl ">Affordable <br></br> Price For Car <br></br>Servicing</h1>
                        <p className="text-white">There are many variations of passages of  available, but <br></br>the majority have suffered alteration in some form</p>
                        <div className=" flex space-x-2"> 
                            <a className="text-white font-bold  btn bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Discover More</a>
                            <a className="text-white font-bold btn  bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Latest Project</a>
                        </div>
                   </div>
                </div>
                {/* slider buttons */}
                <div className="absolute flex bottom-0 right-0 mr-8 gap-2">
                    <a href="#slide3" className="mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❮</a>
                    <a href="#slide5" className=" mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            {/* --slide5-- */}
            <div id="slide5" className="carousel-item relative w-full">
                <img src={imageSlide5} className="w-full rounded-xl" />
                     {/* Gradiant and docs */}
                     <div className="absolute flex items-center rounded-xl top-0 left-0 pl-12  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="space-y-5 w-3/4  text-white">
                        <h1 className="font-bold text-2xl lg:text-6xl ">Affordable <br></br> Price For Car <br></br>Servicing</h1>
                        <p className="text-white">There are many variations of passages of  available, but <br></br>the majority have suffered alteration in some form</p>
                        <div className=" flex space-x-2"> 
                            <a className="text-white font-bold  btn bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Discover More</a>
                            <a className="text-white font-bold btn  bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Latest Project</a>
                        </div>
                   </div>
                </div>
                {/* slider buttons */}
                <div className="absolute flex bottom-0 right-0 mr-8 gap-2">
                    <a href="#slide4" className="mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❮</a>
                    <a href="#slide6" className=" mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            {/* --slide6-- */}
            <div id="slide6" className="carousel-item relative w-full">
                <img src={imageSlide6} className="w-full rounded-xl" />
                     {/* Gradiant and docs */}
                     <div className="absolute flex items-center rounded-xl top-0 left-0 pl-12  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="space-y-5 w-3/4  text-white">
                        <h1 className="font-bold text-2xl lg:text-6xl ">Affordable <br></br> Price For Car <br></br>Servicing</h1>
                        <p className="text-white">There are many variations of passages of  available, but <br></br>the majority have suffered alteration in some form</p>
                        <div className=" flex space-x-2"> 
                            <a className="text-white font-bold  btn bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Discover More</a>
                            <a className="text-white font-bold btn  bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">Latest Project</a>
                        </div>
                   </div>
                </div>
                {/* slider buttons */}
                <div className="absolute flex bottom-0 right-0 mr-8 gap-2">
                    <a href="#slide5" className="mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❮</a>
                    <a href="#slide1" className=" mb-8 btn btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❯</a>
                </div>
                
            </div>
        </div>
    );
};

export default Bannar;