
import { Checkbox } from "antd"
import { Input } from "antd"
import { useRef } from "react"

export const Row = ({ placeholder, label, value, onChange, type, error }) => {
    return <div className='flex lg:flex-row flex-col lg:gap-10 gap-5 items-center mt-3'>
        <h5 className="text-[#3A3D47] w-full  lg:text-end text-start text-xs font-semibold lg:max-w-[120px]">
            {label}
        </h5>
        <Input status={(error || !value) ? "error" : ""} placeholder={placeholder} value={value} onChange={onChange}
            type={type ? type : "text"}
            className='focus:border-gray-400 lg:w-[340px] w-full text-xs h-[40px]'
        />
    </div>
}
export const RowWithChild = ({ position, label, value, onChange, children }) => {
    return <div className={`${position === "center" ? "items-center" : "items-start"} flex lg:gap-10 gap-5 lg:flex-row flex-col mt-5 `}>
        <h5 className="text-[#3A3D47] w-full lg:text-end text-start text-xs font-semibold lg:max-w-[120px]">
            {label}
        </h5>
        <div className="w-full">
            {children}
        </div>
    </div>
}

export const CheckBoxNew = ({ label, checked, onChange }) => {
    const id =label + Math.random()
    return <div className="inline-flex items-center" >
        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor={id}
        
        >
            <input type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                checked={checked}
                onChange={onChange}
                value={label}
                id={id}
            />
            <span
                className="absolute text-[#F8234F] border-2 p-1 border-[#F8234F] rounded-full transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
            </span>
        </label>
        <label className="mt-px text-[#585755d9] text-sm font-semibold cursor-pointer select-none" htmlFor="react">
            {label}
        </label>
    </div>
}

export const CheckBoxWithLabel = ({ label, checked, onChange }) => {
    const inputRef = useRef(null);

    return <div className="inline-flex items-center gap-2">
        <Checkbox ref={inputRef} color="amber" id="cb" className="w-5 h-5" checked={checked} onChange={() => onChange(label)} />
        <label className="mt-px text-[#585755d9] text-sm font-semibold cursor-pointer select-none" htmlFor="cb">
            {label}
        </label>
    </div>
}