import React from 'react';
import Card from './Card';

const CenterReport = () => {
    return (
        <div className='mt-14'>
            <h2 className="text-black text-base font-semibold ">
                Center reports
            </h2>
            <p className="text-[#999999] mt-2 text-sm font-normal">
                Get reports that provide center-wide data about children and classrooms.
            </p>
            <div className="flex flex-col gap-3 mt-5">
                <div className="flex flex-wrap gap-4">
                    <Card
                        title={"Active Enrollment"}
                    />
                    <Card
                        title={"Food Summary (csv)"}
                    />
                </div>
                <div className="flex flex-wrap gap-4">
                    <Card
                        title={"Enrolment (csv)"}
                    />
                    <Card
                        title={"Health (pdf)"}
                    />
                </div>
                <div className="flex flex-wrap gap-4">
                    <Card
                        title={"Child Attendance (csv)"}
                    />
                    <Card
                        title={"Monethly Attendance (pdf)"}
                    />

                </div>
                <div className="flex flex-wrap gap-4">
                    <Card
                        title={"Sleep Check (pdf)"}
                    />
                    <Card
                        title={"Monethly Attendance Summary"}
                    />

                </div>
                <div className="flex flex-wrap gap-4">
                    <Card
                        title={"Temperature Check (csv)"}
                    />
                    <Card
                        title={"Child Profile (csv)"}
                    />
                </div>
                <div className="flex flex-wrap gap-4">
                    <Card
                        title={"Toilet Check (pdf)"}
                    />
                    <Card
                        title={"Food (pdf)"}
                    />
                </div>
            </div>
        </div>
    );
};

export default CenterReport;