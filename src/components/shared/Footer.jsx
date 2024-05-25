import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-white py-8">
      <footer className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
          <div className="flex flex-col justify-center">
            <h1 className=" text-xl font-semibold"> Emon Hossain</h1>
            <p>Full Stack Developer (MERN) </p>
            <div className="flex  gap-x-4 mt-2">
              <img
                src="/facebook.svg"
                className="size-4"
                alt="facebook icon "
              />
              <img src="/twitter.svg" className="size-4" alt="twitter icon " />
              <img
                src="/linkedin.svg"
                className="size-4"
                alt="linkedin icon "
              />
            </div>
          </div>
          <div className="*:block space-y-1">
            <h1 className="text-xl font-semibold">Links</h1>
            <Link to="/">Facebook</Link>
            <Link to="/about">LinkedIn</Link>
            <Link to="/recipes">GitHub</Link>
            <Link to="https://dewanemon.vercel.app/">Portfolio</Link>
          </div>
          <div className="*:block space-y-1">
            <h1 className="text-xl font-semibold">Contact</h1>
            <Link to={"tel:+880 174 123 5222"} className="block">
              +880 174 123 5222
            </Link>
            <Link to={"mailto:dewanmohammademon@gmail.com"}>
              dowanmohammademon@gmail.com
            </Link>
            <p>Dhaka, Bangladesh</p>
            
          </div>
        </div>
        <div className="flex  gap-x-4 justify-center ">
          <p>All rights reserved</p>
          <p>© 2024 Recipe Sharing</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
