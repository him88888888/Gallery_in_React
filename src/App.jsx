// import React, { useEffect, useState } from 'react'
// import axios from 'axios' 
// import Card from './components/Card'

// const App = () => {

//   const [userData, setUserData] = useState([])

//   const [index, setIndex] = useState(1)

//   const getData= async()=>{
//   const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`)
//     console.log(response.data);
//     setUserData(response.data)
//     console.log(userData);
    
    
//   }

//   useEffect(function(){
// getData()
//   },[index])


//   let printUserData = <h3  className='text-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>
//   if (userData.length > 0){
//     printUserData = userData.map(function(elem,idx){

//       return  <div key={idx}>
//         <Card elem={elem} />
//       </div>
//     })
//   }

//   return (
//     <div className=' bg-black p-4 min-h-screen text-white '>
//       {/* <button onClick={getData} className=' bg-green-600 px-5 py-2 mb-3 active:scale-95 rounded text-white'>Get Data</button> */}
//       {/* <h1 className=' fixed bg-red-500 text-4xl'>{index}</h1> */}

//       <div className='flex flex-wrap h-[82%] gap-5 p-2'>
//         {printUserData}
//       </div>
//       <div className=' flex justify-center items-center gap-6 p-4 '>
//         <button onClick={()=>{
//           if(index>1){
//             setIndex(index-1) 
//             setUserData([])
//             }
//             }} className='bg-amber-200 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'>
//           Previous
//         </button>
//             <h4>Page {index}</h4>
//         <button onClick={()=>{
//           setIndex(index+1) 
//           setUserData([])

//           }} className='bg-amber-200 text-black rounded px-4 py-2 font-semibold gap-6 text-sm cursor-pointer active:scale-95'>
//           Next
//         </button>
//       </div>

//     </div>

    
//   )
// }

// export default App


































import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`)
    console.log(response.data);
    setUserData(response.data)
    console.log(userData);
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData =
    <h3 className='text-2xl font-semibold text-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse'>
      Loading Images...
    </h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-950 via-black to-slate-900 text-white'>

      {/* Header */}
      <header className='sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex justify-between items-center'>
          <div>
            <h1 className='text-4xl font-extrabold bg-linear-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent'>
              Pics Gallery
            </h1>
            <p className='text-gray-400 text-sm'>
              Explore stunning images from Picsum
            </p>
          </div>

          <div className='bg-white/10 px-5 py-2 rounded-full border border-white/10'>
            Page <span className='text-amber-400 font-bold'>{index}</span>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <div className='max-w-7xl mx-auto px-6 py-10'>
        <div className='flex flex-wrap justify-center gap-8'>
          {printUserData}
        </div>
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center gap-8 py-10'>

        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
          className='bg-linear-to-r from-amber-300 to-orange-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition duration-300'
        >
          ← Previous
        </button>

        <div className='text-xl font-semibold bg-white/10 px-6 py-3 rounded-xl border border-white/10'>
          Page {index}
        </div>

        <button
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
          className='bg-linear-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition duration-300'
        >
          Next →
        </button>

      </div>

      {/* Footer */}
      <footer className='border-t border-white/10 py-6 text-center text-gray-500 text-sm'>
        Built with React + Axios + Tailwind CSS
      </footer>

    </div>
  )
}

export default App