import React from 'react';
import { CheckBoxWithLabel, RadioButton, Row, RowWithChild } from './Common';
import { Button } from '@material-tailwind/react';


const CenterConfigHome = () => {
    return (
        <div className='w-full'>
            <div className="flex items-center gap-5">
                <div className={`w-[37.66px] h-[37.66px] bg-amber-400/opacity-25 rounded-full flex items-center justify-center text-base font-bold border   bg-[#D9D9D9] text-gray-800`} >
                    1
                </div>
                <div className="text-stone-500 text-[21.73px] font-bold ">Center Settings</div>
            </div>
            <div className="mt-10  w-full">
                <Row label={"Phone"}
                    placeholder={"Enter your phone number"}
                />
                <Row label={"Time Zone"}
                    placeholder={"Your time zone"}
                />
                <RowWithChild label={"Delayed media Sharing"}
                    placeholder={"Your time zone"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">No delay</option>
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4 hours">4 hours</option>
                    </select>
                    <p className="lg:max-w-[650px] h-[31.87px] opacity-60 text-stone-600 text-[10.14px] mt-2 font-normal ">You can delay photo or video entries to review before sharing with parents. To ensure entries display the correct status, Camiru recommends changing this setting outside business hours.<br /></p>
                </RowWithChild>
                <RowWithChild label={"Auto Send Report"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Select Time</option>
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4 hours">4 hours</option>
                    </select>
                    <p className="lg:max-w-[650px] h-[31.87px] opacity-60 text-stone-600 text-[10.14px] mt-2 font-normal ">Strongly recommended. Set an automated back-up for your daily reports. Any open reports will be sent to your center at this time and all corresponding children and staff will be signed out. The system won't send duplicates for reports that Have been sent in the last 24 hours.</p>
                </RowWithChild>
                <div className='pt-3'>
                    <Row label={"Tax ID"}
                        placeholder={""}
                    />
                </div>
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <RowWithChild label={""}
                >
                    <div className="text-zinc-700 text-xs font-semibold">CENTER ADDRESS</div>
                </RowWithChild>
                <Row label={"Address"}
                    placeholder={"Street & Number"}
                />
                <Row label={"Address line 2"}
                    placeholder={"Apt. suite, etc (optional)"}
                />
                <Row label={"City"}
                    placeholder={"City"}
                />
                <RowWithChild label={"State or Province"}
                    position={"center"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>

                </RowWithChild>

                <Row label={"Zip"}
                    placeholder={"Zip Code"}
                />
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <RowWithChild label={""}
                >
                    <div className="text-zinc-700 text-xs font-semibold">
                        PARENT SIGN IN & PICK UP
                    </div>
                </RowWithChild>
                <RowWithChild label={"Parent Sign-in Identification"}
                >
                    <div className="flex flex-col">

                        <RadioButton
                            label={"No Identification Collected"}
                            checked={true}
                        />
                        <RadioButton
                            label={"Name/Initials (Typed)"}

                        />
                        <RadioButton
                            label={"Electronic Signature"}

                        />
                    </div>
                </RowWithChild>
                <RowWithChild label={"Child Name Display"}
                >
                    <div className="flex flex-col">
                        <RadioButton
                            label={'First Name and Full Last Name (e.g., "Jane Doe")'}
                            checked={true}
                        />
                        <RadioButton
                            label={'First Name and Last Initial (e.g., "Jane D.")'}
                        />
                    </div>
                </RowWithChild>
                <RowWithChild label={"Parents can sign child in via app"}
                >
                    <CheckBoxWithLabel
                        label={"If checked, parents will have the ability to sign children in from within the HiMama mobile app at the beginning of the day. If left unchecked, parents will not have this option. Parents must have downloaded and logged into the mobile app on their device."}
                    />
                </RowWithChild>
                <RowWithChild label={"Safe Pickup"}
                >
                    <CheckBoxWithLabel
                        label={"If checked, parents will have the ability to mark children as ready for pick up from within the HiMama mobile app at the end of the day. If left unchecked, parents will not have this option. Parents must have downloaded and logged into the mobile app on their device."}
                    >
                        <br />
                        <span className='text-[#585755d9] text-xs cursor-pointer select-none'>
                            For more info on this feature read our
                            <a href="#" className='text-primary ml-2 text-xs cursor-pointer select-none'>
                                Help Center article.
                            </a>
                        </span>
                    </CheckBoxWithLabel>
                </RowWithChild>
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <RowWithChild label={"Classroom access"}
                >
                    <CheckBoxWithLabel
                        label={"If checked, teachers can access all classrooms. If unchecked, a teacher will only have access to their homeroom; as a result, temporarily moving children must be performed by an administrator. Default is checked."}
                    >
                    </CheckBoxWithLabel>
                </RowWithChild>

                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <RowWithChild label={"Parents can mark child absent in app"}
                >
                    <CheckBoxWithLabel
                        label={"If checked, teachers can access all classrooms. If unchecked, a teacher will only have access to their homeroom; as a result, temporarily moving children must be performed by an administrator. Default is checked."}
                    >
                    </CheckBoxWithLabel>
                </RowWithChild>
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <RowWithChild label={"Teacher editable time cards?"}
                >
                    <CheckBoxWithLabel
                        label={"If checked, teachers can access all classrooms. If unchecked, a teacher will only have access to their homeroom; as a result, temporarily moving children must be performed by an administrator. Default is checked."}
                    >
                    </CheckBoxWithLabel>
                </RowWithChild>
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <RowWithChild label={"Is a full week center?"}
                >
                    <CheckBoxWithLabel
                        label={"If checked, teachers can access all classrooms. If unchecked, a teacher will only have access to their homeroom; as a result, temporarily moving children must be performed by an administrator. Default is checked."}
                    >
                    </CheckBoxWithLabel>
                </RowWithChild>
                <RowWithChild label={""}
                >
                    <div className="flex gap-5 ">
                        <Button variant='filled' className='bg-[#C6F2EC] text-[#06A390] w-[135px] rounded-3xl shadow-none'>
                            Save
                        </Button>
                        <Button variant='filled' className='bg-[#FFBB3B33] text-[#FFBB3B] w-[135px] rounded-3xl shadow-none'>
                            Save
                        </Button>
                    </div>
                </RowWithChild>
            </div>
        </div>
    );
};

export default CenterConfigHome;