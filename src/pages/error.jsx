import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="bg-error h-[900px] bg-cover bg-center">
            <div className="flex relative pt-[42%] px-[32%]">
                <button className="bg-green-btn text-white p-3 flex justify-center items-center rounded font-bold"> <Link  to='/'> go back to home</Link></button>
               
            </div>
            
        </div>
    );
}

export default Error;
