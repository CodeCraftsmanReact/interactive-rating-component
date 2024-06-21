import star from './images/icon-star.svg'
import ty from './images/illustration-thank-you.svg'
import './App.css';
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  return (
    <div className="font-overpass bg-blue-veryDark text-white p-8 flex items-center min-h-screen">
      {!hasRated && <RatingSelector setHasRated={setHasRated} setRating={setRating} rating={rating}/>}
      {hasRated && <ThankYou rating={rating}/>}
    </div>
  );
}

function ThankYou({rating}){
  return(
    <div className=' bg-blue-dark p-8 rounded-lg'>
      <div className='mb-4'>
        <img src={ty} alt='Thank you!' className='mx-auto'/>
      </div>
      <div className='p-2 px-4 text-center text-orange-main/45 bg-white/5 rounded-full mb-4'>
        You selected {rating} out of 5
      </div>
      <div className='text-lg font-bold text-center mb-4'>Thank you!</div>
      <div className='text-center text-xs leading-5 text-white/30'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>
    </div>
  )
}

function RatingSelector({setHasRated, setRating, rating}) {
  return(
    <div className=' bg-blue-dark p-8 rounded-lg'>
        <div className='w-12 mb-4 aspect-square bg-white/5 flex justify-center items-center rounded-full'>
          <img src={star} alt='star' className='w-3 aspect-square'/>
        </div>
        <div className='text-lg mb-4'>How did we do?</div>
        <div className='text-xs leading-5  mb-4 text-white/35'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
        <div className='flex gap-2 justify-around mb-4'>
          <div onClick={() => setRating(1)} className={`${rating === 1 ? "bg-white text-blue-dark" : "bg-white/5"} hover:bg-orange-main hover:text-blue-dark  w-10 aspect-square  text-white/75 items-center justify-center flex rounded-full`}>1</div>
          <div onClick={() => setRating(2)} className={`${rating === 2 ? "bg-white text-blue-dark" : "bg-white/5"} hover:bg-orange-main hover:text-blue-dark  w-10 aspect-square  text-white/75 items-center justify-center flex rounded-full`}>2</div>
          <div onClick={() => setRating(3)} className={`${rating === 3 ? "bg-white text-blue-dark" : "bg-white/5"} hover:bg-orange-main hover:text-blue-dark  w-10 aspect-square  text-white/75 items-center justify-center flex rounded-full`}>3</div>
          <div onClick={() => setRating(4)} className={`${rating === 4 ? "bg-white text-blue-dark" : "bg-white/5"} hover:bg-orange-main hover:text-blue-dark  w-10 aspect-square  text-white/75 items-center justify-center flex rounded-full`}>4</div>
          <div onClick={() => setRating(5)} className={`${rating === 5 ? "bg-white text-blue-dark" : "bg-white/5"} hover:bg-orange-main hover:text-blue-dark  w-10 aspect-square  text-white/75 items-center justify-center flex rounded-full`}>5</div>
        </div>
        <div onClick={()=> setHasRated(true)} className='bg-orange-main text-black py-3 rounded-full font-bold text-center'>
          Submit
        </div>
      </div>
  )
}

export default App;
