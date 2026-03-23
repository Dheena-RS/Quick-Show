import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../Components/Loading'
import BlurCircle from '../Components/BlurCircle'
import timeFormat from '../Components/lib/timeFormat'
import { dateFormat } from '../Components/lib/dateFormat'
import { useAppContext } from '../context/Appcontext'
import { Link } from 'react-router-dom'

const MyBookings = () => {
  const currency =import.meta.env.VITE_CURRENCY
  const {axios,getToken,user,image_base_url}=useAppContext()
  const[bookings,setBookings]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const getMyBooking=async()=>{
    try {
      const {data}=await axios.get('/api/user/bookings',{
        headers:{Authorization:`Bearer ${await getToken()}`}
      })

      if(data.success){
        setBookings(data.bookings)
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  const verifyPayment = async (sessionId) => {
    try {
      await axios.post('/api/booking/verify-payment', { sessionId }, {
        headers: { Authorization: `Bearer ${await getToken()}` }
      });
      // Clean up the URL
      window.history.replaceState(null, '', window.location.pathname);
    } catch (error) {
      console.log(error);
    } finally {
      getMyBooking();
    }
  };

  useEffect(() => {
    if (user) {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id');

      if (sessionId) {
        verifyPayment(sessionId);
      } else {
        getMyBooking();
      }
    }
  }, [user]);
  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top='100px' left='100px'/>
      <div>
        <BlurCircle bottom='0px' left='600px'/>
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>
      {bookings.map((item,index)=>(
      <div key={index} className='flex flex-col md:flex-row justify-between bg-primary/8 border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'>
          <div className='flex flex-col md:flex-row'>
            <img src={item.show?.movie?.poster_path ? image_base_url + item.show.movie.poster_path : ''} alt='' className='w-full max-w-[120px] md:max-w-[140px] aspect-[2/3] object-cover object-center rounded'/>
            <div className='flex flex-col p-4'>
              <p className='text-lg font-semibold'>{item.show.movie.title}</p>
              <p className='text-gray-400 text-sm'>{timeFormat(item.show.movie.runtime)}</p>
              <p className='text-gray-400 text-sm mt-auto'>{dateFormat(item.show.showDateTime)}</p>
            </div>
          </div>
          <div className='flex flex-col md:items-end md:text-right justify-between p-4'>
            <div className='flex items-center gap-4'>
              <p className='text-2xl font-semibold mb-3'>{currency}{item.amount}</p>
              {!item.isPaid && <Link to={item.paymentLink} className='bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer'>Pay Now</Link>}
            </div>
            <div className='text-sm'>
              <p><span className='text-gray-400'>Total Tickets:</span>{item.bookedSeats.length}</p>
              <p><span className='text-gray-400'>Seat Number:</span>{item.bookedSeats.join(", ")}</p>

              </div>
          </div>
      </div>))}
    </div>
  ): <Loading/>
}

export default MyBookings