import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AdditionalNotes = ({ open, setOpen }) => {

    return (
        <div className="flex gap-3 flex-col items-start lg:pl-14 pl-5">
            <button className="px-5 py-2 border text-sm w-[280px] rounded-lg border-[#FFBB3B] text-[#FFBB3B] bg-[#FFBB3B33]">
                Add Personal Note
            </button>

            <div className='flex gap-3'>
                <button
                    onClick={() => {
                        setOpen(open - 1)
                    }}
                    className='py-2 px-5 rounded-2xl mt-3 text-sm font-semibold text-accent2'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                    Previous
                </button>
                <button
                    className='py-2 px-8 rounded-2xl mt-3 text-sm font-semibold text-[#06A390] bg-[#C6F2EC]'>
                    Next
                </button>
            </div>
        </div>
    )
}

export default AdditionalNotes