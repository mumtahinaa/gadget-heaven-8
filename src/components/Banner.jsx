import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleButton = ()=>{
    navigate('/dashboard');
  }
    return (
        <div className='border-x-[1px] border-gray-300  px-1 border-b-[1px] pb-1 rounded-b-2xl  mx-5  '>
            <div className="hero bg-[#9538E2]  mx-auto rounded-b-2xl  my-0">
  <div className="hero-content text-center mt-[44px] lg:mb-[268px] md:mb-[150px] mb-[100px] p-0">
    <div className="lg:max-w-5xl md:max-w-2xl ">
      <h1 className="lg:text-5xl md:text-3xl text-2xl  font-bold  text-white lg:leading-[65px] md:leading-[45px] leading-[35px] ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 lg:max-w-2xl md:max-w-md max-w-xs mx-auto lg:text-sm md:text-sm text-xs text-white font-normal">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button onClick={handleButton} className="btn hover:text-[white] hover:bg-[#9538E2] bg-white lg:text-base md:text-sm text-xs text-[#9538E2]  font-bold lg:px-[20px] md:px-[20px] px-[15px] rounded-[32px]">Shop Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;