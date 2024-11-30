const Footer = () => {
  return (

      <footer className="footer justify-center justify-around text-neutral-content p-10 ">
        <nav>
          <h6 className="footer-title font-semibold text-sm text-[#09080F]">Services</h6>
          <a className="link link-hover font-medium text-sm text-gray-400">Product Support</a>
          <a className="link link-hover font-medium text-sm text-gray-400">Order Tracking</a>
          <a className="link link-hover font-medium text-sm text-gray-400">Shipping & Delivery</a>
          <a className="link link-hover font-medium text-sm text-gray-400">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-sm text-[#09080F]">Company</h6>
          <a className="link link-hover font-medium text-sm text-gray-400">About us</a>
          <a className="link link-hover font-medium text-sm text-gray-400">Careers</a>
          <a className="link link-hover font-medium text-sm text-gray-400">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-sm text-[#09080F]">Legal</h6>
          <a className="link link-hove font-medium text-sm text-gray-400">Terms of use</a>
          <a className="link link-hover font-medium text-sm text-gray-400">Privacy policy</a>
          <a className="link link-hover font-medium text-sm text-gray-400">Cookie policy</a>
        </nav>
      </footer>
    
  );
};

export default Footer;
