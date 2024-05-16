import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import Filter from '../ClassRoomRoster/Filter';
import Table from '../ClassRoomRoster/Table';

const StaffRoster = () => {
    return (
        <DB_Page_Layout>
            <Filter
                name={"Staff Rosters"}
                desc={"Select your class to checkout the reports"}
            />
            <div className="mt-10">
                <Table
                    rows={[
                        "Members", "Enrolled", "Class", "Schedule", "Action"
                    ]}
                    class_name={"After Schooler"}
                />
            </div>
        </DB_Page_Layout>
    );
};

export default StaffRoster;