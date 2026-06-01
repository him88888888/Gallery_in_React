// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//         <a href={props.elem.url} target='_blank'>
//           <div className='h-40 w-44 bg-white overflow-hidden '>
//         <img className='h-full w-full object-cover cursor-pointer ' src={props.elem.download_url} alt="image data" />
//       </div>
//       <h2 className=' font-bold text-lg'>{props.elem.author}</h2>
//         </a>
//     </div>
//   )
// }

// export default Card



//UPDATED CSS

import React from 'react'

const Card = (props) => {
  return (
    <a
      href={props.elem.url}
      target='_blank'
      rel='noreferrer'
      className='group'
    >

      <div className='w-72 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-500'>

        <div className='h-52 overflow-hidden'>
          <img
            className='h-full w-full object-cover group-hover:scale-110 transition duration-700'
            src={props.elem.download_url}
            alt='image data'
          />
        </div>

        <div className='p-4'>
          <h2 className='text-lg font-bold text-white truncate'>
            {props.elem.author}
          </h2>

          <p className='text-gray-400 text-sm mt-1'>
            Click to view original image
          </p>
        </div>

      </div>

    </a>
  )
}

export default Card
