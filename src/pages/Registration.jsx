/* eslint-disable react/no-unknown-property */

import { useNavigate } from "react-router-dom";



export default function Registration() {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-full flex justify-center items-center  min-h-[100vh]  p-10 bg-[#F4F6F8] ">
        <div className=" sm:w-[650px] bg-white py-6 w-[400px] px-4 sm:px-10 rounded-xl">
          <div className=" w-full flex justify-center items-center">
            <img className="w-[150px] h-[150px]" src="/assets/logo.png" />
          </div>
          <h2 className=" font-semibold text-lg">Senior Login</h2>
          <div className=" w-full block my-2">
            <label className="text-lg text-[#090914] opacity-[0.5] font-medium w-full mb-1 block">
              Email Address
            </label>
            <input
              placeholder="Enter Email Address"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>
          <hr className=" w-full border border-[#000] opacity-[0.2] my-5" />
          <div className=" w-full flex flex-row justify-between gap-3 items-center">
            <div className=" w-[50%] bg-[#306BFF] rounded-lg text-center text-white  p-4">
              Employee Login
            </div>
            <div className=" w-[50%] bg-[#306BFF] rounded-lg text-center text-white  p-4">
              Director Login
            </div>
          </div>
          <hr className=" w-full border border-[#000] opacity-[0.2] my-5" />
          <button onClick={()=> navigate('mail-code')} className=" w-full text-lg font-semibold p-4 text-center text-white rounded-lg bg-gradient-to-r from-[#053BD3] to-[#03EAEA] mt-5">
            Next
          </button>
        </div>
      </div>

    </>
  );
}
