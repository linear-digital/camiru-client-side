import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CoAdd, Enrollment, HandsUp, Report } from './Icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Sidebar = () => {
    const { role } = useParams()
    return (
        <div className='min-w-[300px] hidden lg:block max-w-[300px] px-4'>
            {
                role === "student" ?
                    <>
                        <Item path={"enrollment"}
                            Icon={Enrollment}
                            name={"Enrollment"}
                        />
                        <Item
                            path={"details"}
                            name={"Address & Contacts"}
                            Icon={CoAdd}
                        />
                        <Item
                            path={"attendance"}
                            name={"Attendance"}
                            Icon={HandsUp}
                        />
                        <Item
                            name={"Schedule Absence"}
                            path={"schedule-absence"}
                            Icon={Calendar}
                        />
                        <Item
                            name={"Report"}
                            path={"report"}
                            Icon={Report}
                        />

                        <Item
                            name={"Development Evidence"}
                            path={"development-evidence"}
                            Icon={Calendar}
                        />
                        <Item
                            name={"Health Log"}
                            path={"health-log"}
                            Icon={Report}
                        />
                    </>
                    :
                    <>
                        <Item
                            name={"Schedule Time Off"}
                            path={"schedule-timeoff"}
                            Icon={Calendar}
                        />
                         <Item
                            name={"Time Card"}
                            path={"timecard"}
                            Icon={Report}
                        />
                    </>
            }


        </div>
    );
};

export default Sidebar;

const Item = ({ active, path, Icon, name }) => {
    const location = useLocation();
    const [isActive, setActive] = React.useState(false)
    useEffect(() => {
        if (location.pathname.includes(path)) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [location.pathname])
    return (
        <Link to={path} className={` ${isActive ?
            "bg-[#C6F2EC] text-cyan-700 hover:bg-[#F2F6FC] hover:text-gray-400"
            : "bg-[#F2F6FC] text-gray-400 hover:text-cyan-700 hover:bg-[#C6F2EC]"} 
          w-full h-[67px] mb-2 rounded-[50px] poppins flex items-center justify-start px-6 gap-3   font-medium cursor-pointer hover:border text-sm`}>
            {Icon && <Icon />}  {name}
        </Link>
    )
}