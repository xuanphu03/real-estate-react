import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchInOffers() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [rooms, setRooms] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    setSearch(inputRef.current?.value)
  }

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch(
        `https://64bf5f8f5ee688b6250d547a.mockapi.io/fakeAPI?limit=6&page=1&name=${search}`
      )
      const rooms = await response.json()
      setRooms(rooms)
    }
    fetchRooms()
  }, [search])

  return (
    <div className="p-40 flex flex-col justify-center items-center">
      <div className="w-fit mb-10">
        <input ref={inputRef} placeholder="Enter a keyword" className="w-fit" />
        <button className="w-fit" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {rooms.map(room => (
          <Link to={`/${room.id}`} key={room.id} className="no-underline">
            <div className="shadow-xl p-2 cursor-pointer">
              <img src={room.image} alt="room" className="w-full" />
              <h2 className="font-bold text-lg">{room.name}</h2>
              <p className="text-blue-500">${room.price}</p>
              <p>{room.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
