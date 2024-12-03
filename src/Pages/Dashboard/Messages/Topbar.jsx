import React from "react";
import { UserAvater } from "../../../Components/Card/Avater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import nameDisplay from "../../../util/nameDisplay";
import { imageUrl } from "../../../Components/helper/axios.instance";
import { Modal } from "antd";
import CallUi from "./Call/CallUi";
import { useRootContext } from "../RootContext";
import { useEffect } from "react";

const Topbar = ({ user }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { incomming, setIncomming , socket} = useRootContext();
  const [showCall, setShowCall] = React.useState(false);
  useEffect(() => {
    if (incomming) {
      setShowCall(true);
    }
  }, [incomming]);
  const handleCancel = () => {
    socket.emit('end', {target: user._id})
    setShowCall(false);
    setIncomming(null);
  }
  return (
    <div className="w-full p-5 border-b flex items-center justify-between">
      <div className="flex gap-3">
        <UserAvater
          url={imageUrl(user?.user?.id?.profilePic)}
          className={
            "rounded-xl overflow-hidden lg:min-w-11 min-w-9 max-w-11 lg:h-11 h-9"
          }
        />
        <div>
          <h4 className="text-slate-900 lg:text-base text-xs font-bold ">
            {nameDisplay(user?.user?.id)}
          </h4>
          <p className="flex items-center lg:mt-1">
            {user?.user?.id?.active ? (
              <>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-green-500 text-[10px] font-normal"
                />
                <span className=" text-cyan-700 text-xs font-normal ml-2">
                  Online
                </span>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-red-500 text-[10px] font-normal"
                />
                <span className=" text-red-700 text-xs font-normal ml-2">
                  Offline
                </span>
              </>
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {showCall && (
          <CallUi
            showCall={showCall || incomming}
            setShowCall={handleCancel}
            user={user?.user?.id}
            chat={user}
          />
        )}
        <button className="text-red-500" onClick={() => setShowCall(!showCall)}>
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button>
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
