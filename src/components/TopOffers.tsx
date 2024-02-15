import { useEffect, useState } from 'react'
import { Button } from './ui/Button'
import { Link } from 'react-router-dom'
import right from '@/assets/svgs/right.svg'
import left from '@/assets/svgs/left.svg'

function handleClickRight() {
  const getElementRooms = document.getElementById('rooms')
  getElementRooms.scrollLeft += 300
}

function handleClickLeft() {
  const getElementRooms = document.getElementById('rooms')
  getElementRooms.scrollLeft -= 300
}

export default function TopOffers() {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch(
        `https://64bf5f8f5ee688b6250d547a.mockapi.io/fakeAPI`
      )
      const rooms = await response.json()
      setRooms(rooms)
    }
    fetchRooms()
  }, [])
  return (
    <div className="bg-secondary" id="top-offers">
      <div className="max-w-5xl mx-auto py-32">
        <div className="flex justify-between items-end">
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Top Offers</h1>
            <p className="text-xl">
              Fulfill your career dreams, enjoy all the achievements of the city
              center and luxury housing to the fullest.
            </p>
          </div>
          <Button className="text-primary bg-transparent border-primary border-2 hover:border-primary/0 hover:text-white">
            Show all offers
          </Button>
        </div>
        <div className="flex gap-5 items-center my-4">
          <div className="bg-lightblue h-1 w-full rounded-full" />
          <div className="flex gap-3">
            <div
              onClick={handleClickLeft}
              className="w-16 h-16 bg-lightgray rounded-full cursor-pointer flex justify-center items-center text-white font-black hover:bg-primary"
            >
              <img src={left} alt="turn left" />
            </div>
            <div
              onClick={handleClickRight}
              className="w-16 h-16 bg-lightgray rounded-full cursor-pointer flex justify-center items-center text-white font-black hover:bg-primary"
            >
              <img src={right} alt="turn right" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x" id="rooms">
          {rooms.map(room => (
            <Link to={`/${room.id}`} key={room.id} className="no-underline">
              <div className="w-80 shadow-xl p-2 cursor-pointer snap-center">
                <img src={room.image} alt="Image room" />
                <div className="px-5">
                  <h2 className="text-xl font-bold">{room.name}</h2>
                  <p className="text-price text-lg font-bold">${room.price}</p>
                  <p>{room.address}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
