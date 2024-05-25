import { Link } from "react-router-dom";

const DevInfo = () => {
  return (
    <section className="pb-10 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 *:p-10 shadow-md ">
        <div className="bg-white text-black text-center ">
          <img
            src="/images/emon.jpg"
            alt="Developer image"
            className="w-1/2 mx-auto"
          />
          <h1 className="text-3xl font-bold uppercase font-mono text-center mt-6">
            {"<"}Emon Hossain{">"}
          </h1>
          <p className="text-center font-semibold">
            Full Stack Developer (MERN)
          </p>

          <Link
            to={"https://dewanemon.vercel.app/"}
            className="bg-gray-900 text-white px-12 py-2 inline-block  mt-4"
          >
            View Portfolio
          </Link>
        </div>
        <div className="bg-[#e6e9ea] flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl text-center">
            {"<"}About Me{">"}
          </h1>
          <p className="text-balance text-center">
            I am a full stack developer.I am passionate about web development
            and I love to learn new technologies. I am a self-motivated
            developer.I complete my HSC in (2021-23) and I am currently in
            degree 1st year .
          </p>
          <div className="space-x-4">
            <Link
              to={"https://dewanemon.vercel.app/"}
              className="bg-gray-900 text-white px-10 py-2 inline-block  mt-4"
            >
              Resume
            </Link>
            <Link
              to={"https://dewanemon.vercel.app/"}
              className="bg-gray-900 text-white px-10 py-2 inline-block  mt-4"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevInfo;
