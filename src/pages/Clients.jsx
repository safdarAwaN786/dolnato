/* eslint-disable react/no-unknown-property */
import { RxDotsHorizontal } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Clients() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] mt-14 w-full  md:p-10 px-3 py-10 bg-[#F4F6F8] ">
        <div className=" w-full flex flex-row gap-5 my-5 overflow-x-scroll">
          <div className="w-full min-w-[1000px] p-3 bg-[#F4F6F8] rounded-lg">
            <div className="w-full flex flex-row justify-between gap-2 p-5">
              <div className=" w-[25%] text-xs ">Name</div>
              <div className=" w-[25%] text-xs ">Email</div>
              <div className=" w-[18%] text-xs">Phone Number</div>
              <div className=" w-[16%] text-xs">Companty Name</div>
              <div className=" w-[16%] text-xs">Date Added</div>
            </div>

            <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember1.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                />
                <p className=" text-sm text-[#06152B]">John Deo</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                johndoe2211@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember2.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                />
                <p className=" text-sm">Shelby Goode</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                shelbygoode41@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember1.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                />
                <p className=" text-sm">John Deo</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                johndoe2211@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember2.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                />
                <p className=" text-sm">Shelby Goode</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                shelbygoode41@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember1.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                />
                <p className=" text-sm">John Deo</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                johndoe2211@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember2.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                />
                <p className=" text-sm">Shelby Goode</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                shelbygoode41@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember1.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                />
                <p className=" text-sm">John Deo</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                johndoe2211@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember2.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                />
                <p className=" text-sm">Shelby Goode</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                shelbygoode41@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row justify-between my-2 gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember1.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-rose-200"
                />
                <p className=" text-sm">John Deo</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                johndoe2211@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>

            <div className="w-full flex flex-row my-2 justify-between gap-2 bg-white p-3 rounded-xl">
              <div className=" w-[25%] text-xs  flex flex-row items-center gap-2">
                <img
                  src="/assets/images/teammember2.png"
                  className="rounded-full w-[35px] h-[35px] bg-cover bg-[#cadfff]"
                />
                <p className=" text-sm">Shelby Goode</p>
              </div>
              <div className=" w-[25%] text-xs flexitems-center">
                shelbygoode41@gmail.com
              </div>
              <div className=" w-[18%] text-xs flexitems-center">
                +33757005467
              </div>
              <div className=" w-[16%] text-xs flexitems-center">Dolanto</div>
              <div className=" w-[16%] text-xs flex flex-row justify-between items-center">
                12/10/2001
                <RxDotsHorizontal className=" text-lg opacity-[0.3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
