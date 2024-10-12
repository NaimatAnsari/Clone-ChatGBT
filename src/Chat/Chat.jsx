import React from 'react'

const Chat = () => {
  const example = [
    'How to use Tailwind CSS',
    'How to use Tailwind CSS with React JS',
    'How to use Tailwind CSS with Next JS',
    'How to use Tailwind CSS with Gatsby',
    'How to use Tailwind CSS with Svelte',
    'How to use Tailwind CSS with Vue JS',
    'How to use Tailwind CSS with Angular JS',
    'How to use Tailwind CSS with Ember',
  ]

  const chats = [
    {
      role: 'user',
      message: 'I want to know how to use Tailwind CSS',
    },
    {
      role: 'assistant',
      message: 'Hi, I am ChatGBT. How can I help you?',
    },
    {
      role: 'user',
      message: 'Hi, I am ChatGBT. How can I help you?',
    },
  ]

  return (
    <div className='h-screen w-screen bg-[#050509] flex'>
      <div className='w-[20%] px-6 h-screen bg-[#0c0c15] text-white p-4'>
        <div className='flex items-center gap-2 justify-start'>
          <img src="../public/assets/images/logo.png" className='h-9 rounded-full' alt="Logo" />
          <h1 className='text-3xl text-center py-6 font-bold'>ChatGBT</h1>
        </div>

        <div className='flex items-center justify-start'>
          <button className='w-full h-[50px] text-white font-[600] outline-none rounded bg-[#4f4fe2] hover:bg-slate-600'>+ New Chat</button>
        </div>
        <div className='h-[60%] mt-8 overflow-scroll overflow-x-hidden hide-scroll-bar shadow-lg'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3].map((item, index) => (
            <div key={index} className='py-3 rounded mt-2 text-lg flex items-center gap-1 px-8 hover:bg-slate-600 cursor-pointer'>
              <i className='bx bx-message-detail'></i>
              <p className='text-0xl'>My chat history</p>
            </div>
          ))}
        </div>
        <div>
          <button className='py-3 px-6 rounded mt-4 text-lg flex justify-center items-center gap-1 hover:bg-slate-600 cursor-pointer'>
            <i className='bx bx-cog'></i> Settings
          </button>
        </div>
      </div>

      <div className='w-[80%]'>
        {chats.length > 0 ? (
          <div className='h-[80%] overflow-scroll hide-scroll-bar pt-8'>
            {chats.map((item, index) => (
              <div key={index} className={`w-[60%] border mx-auto p-6 text-white ${item.role === 'user' ? 'bg-[#333]' : 'bg-[#555]'}`}>
                <span className='text-white'>
                  {item.role === 'user' ? <i className='bx bx-user'></i> : <i className='bx bxs-user'></i>}
                </span>
                <div>{item.message}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className='h-[80%] flex flex-col justify-center items-center text-white'>
            <div className='text-4xl font-bold'>APP GBT</div>
            <div className='flex flex-wrap justify-evenly py-4 max-w-[900px]'>
              {example.map((item, index) => (
                <div key={index} className='text-lg text-[16px] mt-3 p-2 font-light min-w-[400px] border rounded cursor-pointer hover:bg-slate-600'>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='h-[20%]'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='flex justify-between w-[60%] bg-slate-800 rounded-lg items-center'>
              <input type="text" className='w-[100%] rounded-lg p-4 bg-slate-800 text-white outline-none' placeholder='Type your message here...' />
              <span><i className='bx bx-send mr-3 text-white text-2xl cursor-pointer'></i></span>
            </div>
            <small className='text-slate-500 mt-2'>ChatGPT can make mistakes. Check important info.</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
