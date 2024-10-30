import { assets } from '../assets/frontend_assets/assets';
const Footer = () => {
  return (
    <div className="">
      <div >
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
          <div>
            <img className="mb-5 w-32" src={assets.logo} alt="logo" />
            <p className="w-full md:w-2/3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos
              deleniti! Dolorem esse placeat id sapiente iusto, obcaecati quae
              error!
            </p>
          </div>
          <div>
            <p className="text-xl font-medium mb-5 uppercase">Company</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium mb-5 uppercase">Get in touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+254 866 685 54</li>
              <li>Contact@foreveryou.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024&copy; forever.com - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
