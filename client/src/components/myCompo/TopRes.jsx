import { MdOutlineEscalator } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { RiApps2AddLine } from "react-icons/ri";
import { RiSkull2Line } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import { BsPostcard } from "react-icons/bs";


const TopRes = () => {
    return (
        <div className="w-full  mx-auto backdrop-blur-xl  overflow-hidden  md:flex-row items-center md:items-stretch p-6 md:py-12 my-0"  style={{
    backgroundImage:
      "radial-gradient(circle 500px at left top,rgb(138, 173, 253,0.4) , transparent 70%)"
  }}>
           {/* Header text */}
            <div className='md:px-12 pb-3'>
                <h1 className="text-3xl md:text-6xl font-bold text-black mb-4 flex">Top Resources:</h1>
                <p className='text-md font-semibold'>Access the API response data, fully organized and ready to use, all in one place.</p>
            </div>
            {/* Card for top Resources */}
            <div className='md:flex md:px-12 w-full space-x-6 space-y-3'>


                <div className='md:w-1/2 space-y-3 w-full'>


                    <div className='w-full h-24 bg-[#F67E7F] rounded-2xl flex px-4' >
                        <div className='w-1/8 items-center justify-center flex'><MdOutlineEscalator className="text-white/90 text-7xl"/></div>
                        <div className='w-6/8 px-4'><p className="text-4xl  font-bold text-white pt-2">Latest</p><p className="text-white/70">https://example.com/api/v1/</p></div>
                        <div className='w-1/8 items-center justify-center flex'><a href="https://example.com"><MdArrowOutward  className="text-white/90 text-4xl"/></a></div>
                    </div>




                    <div className='w-full h-24 bg-[#757BF3] rounded-2xl flex px-4' >
                        <div className='w-1/8 items-center justify-center flex'><GrSecure className="text-white/90 text-7xl"/></div>
                        <div className='w-6/8 px-4'><p className="text-4xl font-bold text-white pt-2">Security</p><p className="text-white/70">https://example.com/api/v1/</p></div>
                        <div className='w-1/8 items-center justify-center flex'><a href="https://example.com"><MdArrowOutward  className="text-white/90 text-4xl"/></a></div>
                    </div>


                    <div className='w-full h-24 bg-[#55B9B7] rounded-2xl flex px-4' >
                        <div className='w-1/8 items-center justify-center flex'><RiApps2AddLine className="text-white/90 text-7xl"/></div>
                        <div className='w-6/8 px-4'><p className="text-4xl font-bold text-white pt-2">Apps</p><p className="text-white/70">https://example.com/api/v1/</p></div>
                        <div className='w-1/8 items-center justify-center flex'><a href="https://example.com"><MdArrowOutward  className="text-white/90 text-4xl"/></a></div>
                    </div>

                </div>


                <div className='md:w-1/2 space-y-3 w-full'>


                    <div className='w-full h-24 bg-[#5A9CB5] rounded-2xl flex px-4' >
                        <div className='w-1/8 items-center justify-center flex'><RiSkull2Line className="text-white/90 text-7xl"/></div>
                        <div className='w-6/8 px-4'><p className="text-4xl font-bold text-white pt-2">Venture</p><p className="text-white/70">https://example.com/api/v1/</p></div>
                        <div className='w-1/8 items-center justify-center flex'><a href="https://example.com"><MdArrowOutward  className="text-white/90 text-4xl"/></a></div>
                    </div>




                    <div className='w-full h-24 bg-[#FACE68] rounded-2xl flex px-4' >
                        <div className='w-1/8 items-center justify-center flex'><AiOutlineApple className="text-white/90 text-7xl"/></div>
                        <div className='w-6/8 px-4'><p className="text-4xl font-bold text-white pt-2">Apple</p><p className="text-white/70">https://example.com/api/v1/</p></div>
                        <div className='w-1/8 items-center justify-center flex'><a href="https://example.com"><MdArrowOutward  className="text-white/90 text-4xl"/></a></div>
                    </div>

                    <div className='w-full h-24 bg-[#FA6868] rounded-2xl flex px-4' >
                        <div className='w-1/8 items-center justify-center flex'><BsPostcard className="text-white/90 text-7xl"/></div>
                        <div className='w-6/8 px-4'><p className="text-4xl font-bold text-white pt-2">Posts</p><p className="text-white/70">https://example.com/api/v1/</p></div>
                        <div className='w-1/8 items-center justify-center flex'><a href="https://example.com"><MdArrowOutward  className="text-white/90 text-4xl"/></a></div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default TopRes;