function ReportFoundPetForm() {
    return (
        <div className="w-full sm:w-[95%] md:w-[85%] h-auto flex flex-col bg-[rgba(255,255,255,0.21)] rounded-3xl border border-white  shadow-md">
            <div className='flex gap-4'>
                <div className="flex flex-col w-2/4 h-full px-4 py-4 rounded-t-3xl rounded-b-3xl">
                    <p className='text-2xl sm:text-3xl font-semibold text-[#A60530]'>A. Pet Information</p>
                    <p className='text-lg text-[#583523]'>Pet Name</p>
                    <input type="text" placeholder='The name of the lost pet' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Species</p>
                    <input type="text" placeholder='Select type (Dog, Cat, Bird, etc.) ⏷' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Breed</p>
                    <input type="text" placeholder='Breed of the pet (e.g., Aspin, Shih Tzu, Persian)' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Color/Markings</p>
                    <input type="text" placeholder='Description of pet’s color, patterns, or unique marks' className='w-full h-18 px-3 py-1    rounded-2xl border' />
                    <p className='text-lg text-[#583523]'>Gender</p>
                    <div className='flex gap-2'>
                        <input type="radio" name="gender" id="" />
                        <p className="text-lg text-[#583523]">Male</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type="radio" name="gender" id="" />
                        <p className="text-lg text-[#583523]">Female</p>
                    </div>

                    <p className='text-2xl sm:text-3xl font-semibold text-[#A60530]'>B.Lost Details</p>
                    <p className='text-lg text-[#583523]'>Date Lost</p>
                    <input type="text" placeholder='Date when the pet went missing ' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Last Seen Location</p>
                    <input type="text" placeholder='Address or description of the last location' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Additional Details</p>
                    <input type="text" placeholder='Any extra information about how the pet got lost, possible behavior, etc.' className='w-full h-12 px-3 py-2 rounded-full border' />

                    <p className='text-2xl sm:text-3xl font-semibold text-[#A60530]'>C. Owner Information</p>
                    <p className='text-lg text-[#583523]'>Owner Name</p>
                    <input type="text" placeholder='Name of the Owner' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Contact Number</p>
                    <input type="text" placeholder='Contact number of the owner' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Email Address</p>
                    <input type="text" placeholder='Email address of the owner' className='w-full px-3 py-2 rounded-full border' />
                </div>
                <div className="w-2/4 h-full px-2 py-4 flex flex-col items-start justify-items-start  rounded-t-3xl rounded-b-3xl">
                    {/* <p className='text-3xl font-semibold text-[#A60530] hidden block'>A. Pet Information</p> */}
                    <p className='text-lg text-[#583523]'>Age/Approximate Age</p>
                    <input type="text" placeholder='Pet’s age (if known)' className='w-full px-3 py-2 rounded-full border' />
                    <p className='text-lg text-[#583523]'>Photo of Pet</p>
                    <input type="text" placeholder='Upload a clear image of the lost pet (JPG or PNG)' className='w-full px-3 py-2 rounded-full border' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-2 items-center py-4 rounded-3xl'>
                <button className='w-64 py-4 text-xl font-semibold text-[#FFCC6D] uppercase bg-[#A60530] rounded-full cursor-pointer'>Submit a Lost Pet</button>
                <div className='w-[75%] text-center'>
                    <p className='text-sm italic text'>Note: This form will be saved and automatically be uploaded in the Lost Pets Page. You can also edit or delete  this form in your Reported Lost Pets. </p>
                </div>
            </div>
        </div>
    )
}

export default ReportFoundPetForm;