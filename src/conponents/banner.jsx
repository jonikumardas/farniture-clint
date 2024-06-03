import wall from "../assets/walpaint.png";
import big from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-green lg:px-[12%]">
      <div className="mt-20 px-3">
        <h1 className="text-5xl text-white font-serif font-bold">
          We help you to make furniture
        </h1>
        <p className="text-[#E8FFE9] leading-6 mt-4 lg:mt-2">
          All of our furniture uses the best materials and choices for our
          customers provide.
        </p>
        <div className="mt-5">
          <button className="btn btn-outline text-white px-5 py-1 mx-2 rounded-[30px] border-white hover:bg-white hover:text-green-btn">
            buy now
          </button>
          <button className="btn btn-outline px-5 py-2 text-white mx-2 rounded-[30px] border-white hover:bg-white hover:text-green-btn">
            explore
          </button>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 ">
      {/* <div className="mt-10 lg:mt-0 overflow-hidden"> */}
        <div className="flex justify-center relative lg:left-[2rem] z-10 lg:top-10">
          <img
            className="max-w-[300px] max-h-[200px]"
            src={wall}
            alt=" this is a wall image"
          />
        </div>
        <div className="flex justify-center lg:justify-start relative lg:left-[2rem] lg:top-[40px]">
          <img
            className="sm:w-[360px] lg:w-[960px]"
            src={big}
            alt=" this is a big supa image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
