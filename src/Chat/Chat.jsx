import React from 'react'

const Chat = () => {
  return (
    <div className='h-screen w-screen bg-[#050509]'>
      <div className='w-[20%] h-screen bg-[#0c0c15] text-white p-4'>
        <div>
          <button className='w-full h-[50px] text-white border rounded hover:bg-slate-600'>+ New Chat</button>
        </div>
        <div className='h-[75%] mt-8'>
          {
            [1,2,3,4,5].map((item,index)=>(
              <div className='py-3 rounded  mt-4 text-lg flex  items-center gap-1 px-8 hover:bg-slate-600 cursor-pointer'>
            <i class='bx bx-message-detail'></i>
            My chat history
          </div>
            ))
            }
          
        </div>
        <div></div>
      </div>
      <div className='w-[80%]'></div>
    </div>
  )
}

export default Chat