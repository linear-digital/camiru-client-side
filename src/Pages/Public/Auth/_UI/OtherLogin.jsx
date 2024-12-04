import React from "react";
import { Link } from "react-router-dom";

const OtherLogin = () => {
  return (
    <div className="flex gap-x-5 mt-5 w-full justify-center">
      <Link to={"/login/student"} className="font-normal text-sm hover:text-secondary">
        Parent Login
      </Link>
      <Link to={"/login"} className="font-normal text-sm hover:text-secondary">
        Staff Login
      </Link>
    </div>
  );
};

export default OtherLogin;
