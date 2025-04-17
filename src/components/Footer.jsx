const Footer = () => {
  return (

    <div className="bg-white py-14 mt-24">
    <div className="w-11/12 md:w-10/12 mx-auto bg-white">
      
      {/* Header Section */}
      <div className="mx-auto flex flex-col justify-center items-center border-b-2 border-gray-200 p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Gadget Heaven</h2>
        <p className="font-medium text-sm text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
  
      {/* Footer Navigation Section */}
      <footer className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-8 p-6">
        <nav className="text-center sm:text-left">
          <h2 className="font-bold text-base text-black mb-2">Services</h2>
          <a className="block link-hover font-medium text-sm text-gray-500 mb-1">Product Support</a>
          <a className="block link-hover font-medium text-sm text-gray-500 mb-1">Order Tracking</a>
          <a className="block link-hover font-medium text-sm text-gray-500 mb-1">Shipping & Delivery</a>
          <a className="block link-hover font-medium text-sm text-gray-500">Returns</a>
        </nav>
  
        <nav className="text-center sm:text-left">
          <h2 className="font-bold text-base text-black mb-2">Company</h2>
          <a className="block link-hover font-medium text-sm text-gray-500 mb-1">About us</a>
          <a className="block link-hover font-medium text-sm text-gray-500 mb-1">Careers</a>
          <a className="block link-hover font-medium text-sm text-gray-500">Contact</a>
        </nav>
  
        <nav className="text-center sm:text-left">
          <h2 className="font-bold text-base text-black mb-2">Legal</h2>
          <a className="block link-hover font-medium text-sm text-gray-500 mb-1">Terms of use</a>
          <a className="block link-hover font-medium text-sm text-gray-500 mb-1">Privacy policy</a>
          <a className="block link-hover font-medium text-sm text-gray-500">Cookie policy</a>
        </nav>
      </footer>
      
    </div>
  </div>
  
    
  );
};

export default Footer;
