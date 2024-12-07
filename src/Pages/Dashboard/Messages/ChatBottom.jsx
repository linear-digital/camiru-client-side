import React from 'react';
import { PaperClip, Send } from '../../../util/icons';
import { useRootContext } from '../RootContext';
import { useSearchParams } from 'react-router-dom';
import { upload } from '../../../Components/helper/axios.instance';
import { decrypt } from '../../../Components/helper/security';

const ChatBottom = ({ target }) => {
    const { socket, user, message } = useRootContext()
    const searchParams = useSearchParams()
    const search = searchParams[0]?.get('chat')
    const sentMessage = (e) => {
        e.preventDefault()
        if (socket) {
            const message = e.target.message.value
            const newMessage = {
                sender: user._id,
                receiver: target.user?.id._id,
                message,
                chat: search
            }
            socket.emit('message', newMessage)
            e.target.reset()
        }
    }
    const uploadFile = async (e) => {
        e.preventDefault()
        if (e.target.files.length === 0) {
            return 
        }
        const files = e.target.files
        try {
            const formData = new FormData()

            for (let i = 0; i < files.length; i++) {
                formData.append('image', files[i])
            }

            const res = await upload.post('/upload/image', formData)
            const data = decrypt(res.data)

            const newMessage = {
                sender: user._id,
                receiver: target.user?.id._id,
                chat: search,
                image: data?.map(item => item._id)
            }
            socket.emit('message', newMessage)
        } catch (error) {
            console.error(error);
        }
    }
    // console.log(message);
    return (
        <div className='lg:pt-5 pt-2 border-t lg:px-5 p-1'>
            <form onSubmit={sentMessage} className="w-full h-14 bg-[#F1F6FA] rounded-xl border border-slate-200 flex items-center justify-between pr-5" >
                <input type="text"
                    name='message'
                    className='w-full h-full bg-transparent border-none outline-none text-sm pl-5'
                    placeholder='Write your message...'
                />
                <div className="flex items-center gap-3">
                    <label htmlFor='file'>
                        <PaperClip />
                        <input multiple type="file" id='file' className='hidden' onChange={uploadFile} />
                    </label>
                    <button type='submit' className='w-20 h-10 bg-[#F8D124] text-white text-xs rounded-2xl flex items-center gap-1 justify-center cursor-pointer'>
                        Send <Send />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatBottom;