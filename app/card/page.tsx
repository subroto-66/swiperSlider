import Link from "next/link";
import { FcCellPhone, FcMms, FcReadingEbook } from "react-icons/fc";
import { IoIosLink } from "react-icons/io";

export default function page() {
  return (
    <div className="max-w-5xl h-[100vh] flex justify-center items-center w-full mx-auto ">
      <div className="w-full grid grid-cols-4 border p-2 rounded-md shadow-sm drop-shadow-lg bg-slate-50">
        <div className="flex items-center gap-1 text-sm">
          <FcReadingEbook className="text-lg font-semibold " /> Joe Root
        </div>
        <div className="flex items-center gap-1 text-sm">
          <FcMms className="text-base font-semibold " /> joeroot@gmail.com
        </div>
        <div className="flex items-center gap-1 text-sm">
          <FcCellPhone className="text-lg font-semibold " /> 0182863838746
        </div>

        <Link
          className="flex items-center gap-1 "
          role="button"
          target="_blank"
          href="https://www.google.com/"
        >
          <span className="flex items-center gap-1 text-xs border px-4 py-1 rounded-2xl bg-white">
            <IoIosLink className="text-[#FFB74D]" /> CV
          </span>
        </Link>
      </div>
    </div>
  );
}
