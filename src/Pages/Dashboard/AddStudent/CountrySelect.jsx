import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function PhoneNumber() {
    const { countries } = useCountries();
    const [show, setShow] = useState(false);
    return (
        <div className="w-full lg:w-[340px] h-[40px] border-[#00000033] relative border items-center flex px-3 bg-white rounded-md">
            <div className="flex gap-1 items-center" onClick={() => setShow(!show)} >
                <img
                    src={countries[0].flags.svg}
                    alt={countries[0].name}
                    className="h-3 w-3 rounded-lg bg-black object-cover"
                />
                <span className="text-xs">
                    {countries[0].name}
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </div>
            {
                show && <div className="w-[340px] h-[200px] overflow-y-auto bg-[#fff] z-[100] absolute top-0 left-0 flex flex-col gap-y-2 py-3">
                    {countries.map(({ name, flags }) => (
                        <div key={name} value={name} className="flex items-center px-2 py-1 cursor-pointer gap-2 hover:shadow"
                            onClick={() => setShow(!show)}
                        >
                            <img
                                src={flags.svg}
                                alt={name}
                                className="h-5 w-5 rounded-full bg-black object-cover"
                            />
                            {name}
                        </div>
                    ))}
                </div>
            }
            <input type="number"
                className="w-full bg-transparent border-none outline-none text-sm h-full ml-5 "
                placeholder="Enter your phone number"
            />
        </div>
    );
}