import React from 'react';
import EmptyState from '../../asset/banner/Empty State.svg';
const Form = () => {
    return (
        <div className='px-4  py-[50px]  '>
            <div className='border-[3px] rounded-[24px]  border-[#0370DD] grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-2 pt-[75px] pb-4 pl-[30px]  md:pl-[58px] md:border-r md:border-slate-400 order-2 md:order-1'>
                    <div className='flex flex-col gap-4 mr-10'>
                        <h2 className='text-[30px] md:text-[42px] font-extrabold'>Education<span className='text-red-600'>*</span></h2>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-[14px] md:text-[18px] text-[#302B27] font-medium">Year of passing<span className='text-red-600'>*</span></span>
                            </label>
                            <input type="text" placeholder="2024" className="input input-bordered border-[1.5px] border-slate-500  w-[100%] " />
                            <label className="label flex justify-end">
                                <span className="label-text-alt font-medium text-[14px] md:text-[18px] text-[#707784]">0/100</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-[14px] md:text-[18px] text-[#302B27] font-medium">Region<span className='text-red-600'>*</span></span>
                            </label>
                            <input type="text" placeholder="Jalandhar" className="input input-bordered border-[1.5px] border-slate-500  w-[100%] " />
                            <label className="label flex justify-end">
                                <span className="label-text-alt font-medium text-[14px] md:text-[18px] text-[#707784]">0/100</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-[14px] md:text-[18px] text-[#302B27] font-medium">College Name<span className='text-red-600'>*</span></span>
                            </label>
                            <input type="text" placeholder="NIT Jalandhar" className="input input-bordered border-[1.5px] border-slate-500  w-[100%] " />
                            <label className="label flex justify-end">
                                <span className="label-text-alt font-medium text-[14px] md:text-[18px] text-[#707784]">0/100</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-[14px] md:text-[18px] text-[#302B27] font-medium">Describe College<span className='text-red-600'>*</span></span>
                                <span className='font-medium text-[14px] md:text-[18px] text-[#0370DD]'>Need help<span className='ml-1'>?</span> </span>
                            </label>
                            <textarea placeholder="NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ...." className="input input-bordered border-[1.5px] border-slate-500  w-[100%] min-h-[220px]  md:min-h-[165px] py-3" />
                            <label className="label flex justify-end">
                                <span className="label-text-alt font-medium text-[14px] md:text-[18px] text-[#707784]">0/200</span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <button className='btn btn-primary bg-[#0370DD] rounded-[8px] border-0 px-[40px] py-[16px] w-fit normal-case text-[20px]'>Generate</button>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-3 pt-[75px] pb-4 px-[20px] order-1 md:order-2'>
                    <img src={EmptyState} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Form;