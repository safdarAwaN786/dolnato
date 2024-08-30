/* eslint-disable react/no-unknown-property */
import { RxDotsHorizontal } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Teams() {
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] mt-14 w-full  md:p-10 px-2 py-10 bg-[#F4F6F8] ">
        <div className="w-full flex flex-row items-center p-3 rounded-xl  justify-end">
          <div className="  justify-center bg-gradient-to-r from-[#053BD3] to-[#03EAEA] p-[1px] rounded-lg">
            <button
              onClick={() => navigate("/add-team")}
              className=" w-[150px] items-center justify-center p-2  px-5 h-[38px] flex  font-medium rounded-lg text-white  flex-row gap-1 "
            >
              <AiOutlinePlus className="text-white text-lg" />
              <span className=" text-sm">Add Team</span>
            </button>
          </div>
        </div>

        <div className=" w-full bg-white py-4 ms:px-8 px-2 rounded-xl">
          <h2 className=" text-[#306BFF] underline text-xl font-medium">
            Project Name
          </h2>

          <div className=" min-full flex flex-row lg:flex-nowrap flex-wrap gap-5 my-5">
            <div className=" overflow-x-scroll w-full">
              <div className="lg:w-[50%] min-w-[400px] md:p-3 p-2 bg-[#F4F6F8] rounded-lg">
                <div className="w-full flex flex-row justify-between">
                  <h4 className="text-[#06152B] font-medium">Design Team</h4>
                  <AiOutlinePlus className="text-[#053BD3] text-lg font-bold" />
                </div>
                <div className="w-full flex flex-row justify-between gap-2 p-5">
                  <div className=" w-[55%] text-xs ">Name</div>
                  <div className=" w-[45%] text-xs">Employee ID</div>
                </div>

                <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember1.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                    />
                    <p className=" text-sm">John Deo</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>

                <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember2.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                    />
                    <p className=" text-sm">Shelby Goode</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember1.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                    />
                    <p className=" text-sm">John Deo</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>

                <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember2.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                    />
                    <p className=" text-sm">Shelby Goode</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember1.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                    />
                    <p className=" text-sm">John Deo</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" overflow-x-scroll w-full">
              <div className="lg:w-[50%] min-w-[400px] md:p-3 p-2 bg-[#F4F6F8] rounded-lg">
                <div className="w-full flex flex-row justify-between">
                  <h4 className="text-[#06152B] font-medium">Project Team</h4>
                  <AiOutlinePlus className="text-[#053BD3] text-lg font-bold" />
                </div>
                <div className="w-full flex flex-row justify-between gap-2 p-5">
                  <div className=" w-[55%] text-xs ">Name</div>
                  <div className=" w-[45%] text-xs">Employee ID</div>
                </div>

                <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember1.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                    />
                    <p className=" text-sm">John Deo</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>

                <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember2.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                    />
                    <p className=" text-sm">Shelby Goode</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember1.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                    />
                    <p className=" text-sm">John Deo</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>

                <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember2.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                    />
                    <p className=" text-sm">Shelby Goode</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
                  <div className=" w-[55%] text-xs  flex flex-row items-center gap-2">
                    <img
                      src="/assets/images/teammember1.png"
                      className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                    />
                    <p className=" text-sm">John Deo</p>
                  </div>
                  <div className=" w-[45%] text-xs flex flex-row justify-between items-center">
                    121333842
                    <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
