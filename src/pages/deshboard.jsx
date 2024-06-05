// import MyLineChart from "../conponents/deshboard/charts/lineChart";
import MyLineChart from "../conponents/deshboard/charts/lineChart";
import MypiChart from "../conponents/deshboard/charts/pieCart";

const Deshboard = () => {
  return (
    <div>
      <div>
        <div className="flex-none lg:flex justify-evenly gap-5">
          {/* card  */}
          <div className="card w-80 bg-amber-300 shadow-xl mt-2">
            <div className="card-body">
              <h2 className="card-title font-bold">Revenew in month</h2>
              <p className="text-primary text-4xl ">$50015</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">see details</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-lime-700 shadow-xl mt-2">
            <div className="card-body">
              <h2 className="card-title">Total sell</h2>
              <p className="text-red-400 text-4xl"> 5200 <span className="text-sky-100"> pices</span></p>
              <div className="card-actions justify-end">
              <button className="btn btn-outline btn-primary text-white">See details</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-rose-500 shadow-xl mt-2">
            <div className="card-body">
              <h2 className="card-title">Available</h2>
              <p className="text-amber-300 text-4xl"> 15000 <span className="text-sky-100"> pices</span></p>
              <div className="card-actions justify-end">
              <button className="btn btn-outline btn-warning ">see details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-neutral"><p className="text-gray-dark font-bold text-2xl my-5">Statistic of product</p></div>
      < div className="flex-none lg:flex gap-10 my-5 ">
        <MypiChart/>
        <MyLineChart/>
      </div>
    </div>
  );
};

export default Deshboard;
