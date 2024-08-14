import {RiReactjsLine} from "react-icons/ri";
import {DiPhp} from "react-icons/di";
import {DiLaravel} from "react-icons/di";
import {DiMysql} from "react-icons/di";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaHtml5} from "react-icons/fa";
import {FaPython} from "react-icons/fa";


const Stack = () => {
  return <div className="border-neutral-800 pb-24">
    <h2 className="y-20 text-center text-4xl">Tech <span className="text-cyan-900">Stack</span></h2>
    <div className="flex flex-wrap tems-center justify-center gap-4">
        <div className="rounded-2xl border-neutral-800 py-4">
            <RiReactjsLine className="text-7xl text-cyan-300"/>
        </div>
        <div className="rounded-2xl border-neutral-800 py-4">
        <DiPhp className="text-7xl text-[#4F5B93]" />

        </div>
        <div className="rounded-2xl border-neutral-800 py-4">
            <DiLaravel className="text-7xl text-red-600"/>
        </div>
        <div className="rounded-2xl border-neutral-800 py-4">
        <DiMysql className="text-7xl text-[#00758F]" />
        </div>
        <div className="rounded-2xl border-neutral-800 py-4">
        <BiLogoPostgresql className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-neutral-800 py-4">
        <FaHtml5 className="text-7xl" style={{ color: '#E34F26' }}/>
        </div>
        <div className="rounded-2xl border-neutral-800 py-4">
             <FaPython className="text-7xl" style={{ color: '#306998' }} />
        </div>
    </div>
  </div>
}

export default Stack
