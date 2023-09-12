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
        `https://64106f42be7258e14529c12f.mockapi.io/rooms?limit=6&page=1&name=${search}`
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
              <h2>{room.name}</h2>
              <img src={room.image} alt="room" className="w-full" />
              <p className="text-blue-500">${room.price}</p>
              <p>{room.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
