
import { Checkbox } from "antd"
import { Input } from "antd"

export const Row = ({ placeholder, label, value, onChange , name }) => {
    return <div className='flex lg:flex-row flex-col lg:gap-10 gap-5 items-center mt-3'>
        <h5 className="text-[#3A3D47] w-full  lg:text-end text-start text-xs font-semibold lg:max-w-[120px]">
            {label}
        </h5>
        <Input name={name ? name : ""} placeholder={placeholder} value={value} onChange={onChange}
            className='focus:border-gray-400 lg:w-[340px] w-full text-xs h-[40px]'
        />
    </div>
}
export const RowWithChild = ({ position, label, value, onChange, children }) => {
    return <div className={`${position === "center" ? "items-center" : "items-start"} flex lg:gap-10 gap-5 lg:flex-row flex-col mt-5 mb-10`}>
        <h5 className="text-[#3A3D47] w-full lg:text-end text-start text-xs font-semibold lg:max-w-[120px]">
            {label}
        </h5>
        <div className="w-full">
            {children}
        </div>
    </div>
}

export const RadioButton = ({ label, checked, onChange }) => {
    return <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
            <input name="type" type="radio"
                className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                checked={checked}
                onChange={onChange}
                id="react" />
            <span
                className="absolute text-[#F8234F] border-2 p-1 border-[#F8234F] rounded-full transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
            </span>
        </label>
        <label className="mt-px text-[#585755] text-xs font-normal cursor-pointer select-none" htmlFor="react">
            {label}
        </label>
    </div>
}

export const CheckBoxWithLabel = ({ label, checked, onChange, children }) => {
    return <div className="inline-flex items-start gap-2">
        <Checkbox color="amber" id="cb" className="w-5 h-5 mt-1" />
        <div>
            <label className=" text-[#585755d9] text-xs cursor-pointer select-none" htmlFor="cb">
                {label}
            </label>
            {children}
        </div>
    </div>
}