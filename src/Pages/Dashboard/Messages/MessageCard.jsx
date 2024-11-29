import React from 'react';
import Voice from './Voice';
import moment from 'moment/moment';
import { Popover } from 'antd';
import { Edit } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import { fetcher } from '../../../Components/helper/axios.instance';
import toast from 'react-hot-toast';
import { Popconfirm } from 'antd';
import { useRootContext } from '../RootContext';
import { Modal } from 'antd';
import { Input } from 'antd';

const MessageCard = ({
    position,
    text,
    type,
    isLast,
    date,
    message,
    refetch,
}) => {
    const { setRefetchContact } = useRootContext()
    const deleteMessage = async () => {
        try {
            const res = await fetcher({
                url: `/message/${message._id}`,
                method: "DELETE"
            })
            toast.success(res.message)
            refetch()
            setRefetchContact(Math.random())
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong')
        }
    }
    const [msg, setText] = React.useState(text)
    const [edit, setEdit] = React.useState(false)
    const handleEdit = async () => {
        try {
            const res = await fetcher({
                url: `/message/${message._id}`,
                method: "PUT",
                data: {
                    message: msg || text
                }
            })
            toast.success("Message updated successfully")
            refetch()
            setRefetchContact(Math.random())
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong')
        }
    }

    return (
        <div className={`w-full flex flex-col justify-center  ${position === "left" ? "items-start" : "items-end"}`} >
            <Modal title="Edit Message" open={edit} onOk={() => handleEdit()} onCancel={() => setEdit(!edit)}
                centered
            >
                <Input.TextArea value={msg} onChange={(e) => setText(e.target.value)} className='w-full ' rows={4} />
            </Modal>
            <Popover content={
                <div>
                    <ul className='action-list'>
                        <li>
                            <button
                                onClick={() => setEdit(true)}
                                className='text-[#187A82]'
                            >
                                <Edit fontSize='small' />   Edit Message
                            </button>
                        </li>
                        <li>
                            <Popconfirm
                                title="Are you sure you want to delete this message?"
                                onConfirm={deleteMessage}
                            >
                                <button
                                    className='text-red-500'
                                >
                                    <Delete fontSize='small' />  Delete Message
                                </button>
                            </Popconfirm>
                        </li>
                    </ul>
                </div>
            } trigger="click" placement="topRight">
                {
                    type !== "voice" ?
                        <div className={`min-w-24 max-w-[300px] messageCard flex items-center justify-center py-3 ${(isLast && position === "left") ? "rounded-tl-xl rounded-tr-xl rounded-br-xl " : (isLast && position === "right") ? "rounded-tl-xl rounded-tr-xl rounded-bl-xl" : "rounded-xl"} px-4`}   >
                            <p className={`${position === "left" ? "text-gray-800" : "text-[#187A82]"} text-xs font-normal`}>{text}</p>
                        </div>
                        :
                        <Voice />
                }
                {
                    isLast && <div className="text-[#187A82] text-xs font-normal mt-2 px-4">
                        {
                            moment(date).fromNow()
                        }
                    </div>
                }
            </Popover>
        </div>
    );
};

export default MessageCard;