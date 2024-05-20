const AdditionalNotes = () => {
    return (
        <div className="flex gap-3 flex-col items-start lg:pl-14 pl-5">
            <button className="px-5 py-2 border text-sm w-[280px] rounded-lg border-[#FFBB3B] text-[#FFBB3B] bg-[#FFBB3B33]">
               Add Personal Note
            </button>
         
            <div>
                <button className='py-2 px-8 rounded-2xl mt-3 text-sm font-semibold text-[#06A390] bg-[#C6F2EC]'>
                    Next
                </button>
            </div>
        </div>
    )  
}

export default AdditionalNotes