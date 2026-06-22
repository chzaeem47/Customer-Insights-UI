

const RightHalf = (props) => {
  return (

<div className='shrink-0'>
      
        <div 
          style={{ backgroundImage: `url(${props.img})` }} 
          
          className="bg-cover bg-center h-130 w-70 rounded-4xl relative overflow-hidden shadow-lg"
        >

        
          <div className='w-13 h-13 bg-white relative top-3 left-3 rounded-full flex items-center justify-center text-3xl font-serif font-semibold text-slate-900'>
            {props.num}
          </div>
          
         
          <p className='text-white text-sm font-sans relative top-70 w-60 left-5 leading-relaxed drop-shadow-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sit itaque, necessitatibus exercitationem deserunt aspernatur.
          </p>
          
     
          <button className='w-28 h-11 rounded-3xl relative top-77 left-5 bg-blue-600 text-white font-serif tracking-wider text-[17px] hover:bg-blue-700 transition-colors'>
            {props.title}
          </button>
          
          
          <button className='w-11 h-11 rounded-3xl relative top-78 left-26 bg-blue-600 text-white text-2xl inline-flex items-center justify-center hover:bg-blue-700 transition-colors'>
            ➤
          </button>
        
        </div>

    </div>
  )
}

export default RightHalf