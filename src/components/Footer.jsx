const Footer = () => {
  return (

     <div className="bg-white py-14 mt-24">
      <div className="w-10/12 mx-auto bg-white" >
      <div className=" mx-auto flex flex-col justify-center items-center border-b-2 border-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-2">Gadget Heaven</h2>
        <p className="font-medium text-sm text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
      </div>
       <footer className="footer justify-center justify-around text-neutral-content p-10 ">
        <nav>
          <h2 className=" font-bold text-base text-black">Services</h2>
          <a className="link link-hover font-medium text-sm text-gray-500">Product Support</a>
          <a className="link link-hover font-medium text-sm text-gray-500">Order Tracking</a>
          <a className="link link-hover font-medium text-sm text-gray-500">Shipping & Delivery</a>
          <a className="link link-hover font-medium text-sm text-gray-500">Returns</a>
        </nav>
        <nav>
          <h6 className=" font-bold text-base text-black">Company</h6>
          <a className="link link-hover font-medium text-sm text-gray-500">About us</a>
          <a className="link link-hover font-medium text-sm text-gray-500">Careers</a>
          <a className="link link-hover font-medium text-sm text-gray-500">Contact</a>
        </nav>
        <nav>
          <h6 className=" font-bold text-base text-black">Legal</h6>
          <a className="link link-hove font-medium text-sm text-gray-500">Terms of use</a>
          <a className="link link-hover font-medium text-sm text-gray-500">Privacy policy</a>
          <a className="link link-hover font-medium text-sm text-gray-500">Cookie policy</a>
        </nav>
      </footer>
     </div>
     </div>
    
  );
};

export default Footer;
