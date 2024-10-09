import React from 'react'

const Chat = () => {
  return (
    <div className='h-screen w-screen bg-[#050509] flex'>
      <div className='w-[20%] h-screen bg-[#0c0c15] text-white p-4'>
        <div>
          <button className='w-full h-[50px] text-white border rounded hover:bg-slate-600'>+ New Chat</button>
        </div>
        <div className='h-[75%] mt-8 overflow-scroll overflow-x-hidden hide-scroll-bar shadow-lg'>
          {
            [1,2,3,4,5,6,7,8,9,0,1,2,3].map((item,index)=>(
              <div className='py-3 rounded  mt-2 text-lg flex  items-center gap-1 px-8 hover:bg-slate-600 cursor-pointer'>
            <i class='bx bx-message-detail'></i>
            <p className='text-0xl'>My chat history</p>
          </div>
            ))
            }
          
        </div>
        <div>
        <button className='py-3  px-6 rounded  mt-4 text-lg  flex justify-center text-center  items-center gap-1  hover:bg-slate-600 cursor-pointer'><i class='bx bx-cog'></i> Settings</button>
        </div>
      </div>
      <div className='w-[80%] bg-[#2c2cf0] h-screen flex flex-col justify-center items-center text-white'>
      <div className='h-[80%] border  '>
        <div>APP GBT</div>
        <div></div>
        <div></div>
      </div>
      <div className='h-[20%] '></div>
      </div>
    </div>
  )
}

export default Chat