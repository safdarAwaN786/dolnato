/* eslint-disable react/no-unknown-property */
import { AiOutlinePlus } from "react-icons/ai";

export default function SalesTeamTable() {
  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] mt-14 w-full lg:p-10 p-5 bg-[#fff] ">
        <div className="w-full flex flex-row md:flex-nowrap gap-5 flex-wrap items-center border p-3 rounded-xl border-[rgba(0, 0, 0, 0.10)] justify-between">
          <div className=" md:w-[50%] flex flex-row gap-4 ">
            <div className="flex flex-col h-full justify-center">
              <h2 className=" opacity-[0.6] text-xl font-medium mt-3">May</h2>
              <p className=" opacity-[0.5] text-sm">
                Today is Saturday, Jul 9th, 2023
              </p>
            </div>
            <vr className="border border-[#000000] opacity-[0.2]" />
          </div>
          <div className=" md:w-[50%] flex flex-row gap-4 justify-end">
            <div className="  justify-center bg-gradient-to-r from-[#053BD3] to-[#03EAEA] p-[1px] rounded-lg">
              <button className=" w-[200px] items-center justify-center p-2  px-5 h-[38px] flex  font-medium rounded-lg text-white  flex-row gap-1 ">
                <AiOutlinePlus className="text-white text-lg" />
                <span className=" text-sm">Add File</span>
              </button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-start gap-5">
          <h3 className=" my-2 text-black text-xl font-semibold">
            Job Details
          </h3>

          <div className=" w-full rounded-lg border-[2px] border-[#0000003f]">
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">JOB NAME</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%]  p-2">PO No. & DATE</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">WORK ORDER No.</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">AMENDMMENT PO No. & DATE</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%]  p-2">SCOPE OF WORK</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">JOB NUMBER</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
          </div>

          <h3 className=" my-2 text-black text-xl font-semibold">
            Contact Details
          </h3>

          <div className=" w-full rounded-lg border-[2px] border-[#0000003f]">
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">BILLING ADDRESS</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">NAME</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">CONTACT NO.</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">EMAIL ID</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">SITE ADDRESS</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">NAME</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">CONTACT NUMBER</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
            <hr className=" w-full border border-black opacity-[0.2]" />
            <div className=" w-full flex -[20px] flex-row gap-2">
              <span className=" w-[30%] p-2">EMAIL ID</span>
              <vr className="border-[0.2px] border-black opacity-[0.2]" />
              <div className="w-[70%]"></div>
            </div>
          </div>

          <div className=" w-full">
            <h3 className=" my-2 text-black text-xl font-semibold">
              Commercial Details
            </h3>

            <div className="w-full rounded-lg border-[2px] border-[#0000003f]">
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">PAYMENT TERMS</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
            </div>
          </div>

          <div className=" w-full">
            <h3 className=" my-2 text-black text-xl font-semibold">
              Technical Support
            </h3>

            <div className="w-full rounded-lg border-[2px] border-[#0000003f]">
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">BASETRACK TYPE</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
              <hr className=" w-full border border-black opacity-[0.2]" />
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">CONNECTING</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
              <hr className=" w-full border border-black opacity-[0.2]" />
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">PANEL MOC</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
              <hr className=" w-full border border-black opacity-[0.2]" />
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">PANEL THICKNESS</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
              <hr className=" w-full border border-black opacity-[0.2]" />
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">PANEL</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
              <hr className=" w-full border border-black opacity-[0.2]" />
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">CONATCT NUMBER</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
              <hr className=" w-full border border-black opacity-[0.2]" />
              <div className=" w-full flex -[20px] flex-row gap-2">
                <span className=" w-[30%] p-2">EMAIL ID</span>
                <vr className="border-[0.2px] border-black opacity-[0.2]" />
                <div className="w-[70%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
