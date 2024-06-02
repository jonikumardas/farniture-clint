const Banner = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-green">
      <div>
        <h1 className="text-5xl text-white">We help make farniture</h1>
        <p className="text-[#E8FFE9]">
          {" "}
          All of our furniture uses the best materials and choices for an
          customers provide.
        </p>
        <button className="btn btn-outline text-white px-5 py-1 mx-2 rounded-[30px] border-white hover:bg-white hover:text-green-btn">
          buy now
        </button>
        <button className="btn btn-outline px-5 py-1 text-white mx-2  rounded-[30px] border-white hover:bg-white hover:text-green-btn">
          explore
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
