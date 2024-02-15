import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Room() {
  const [room, setRoom] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch(
        `https://64bf5f8f5ee688b6250d547a.mockapi.io/fakeAPI${id}`
      )
      const room = await response.json()
      setRoom(room)
    }
    fetchRoom()
  }, [id])

  return (
    <div className="shadow-xl p-2 cursor-pointer">
      <h2>{room?.name}</h2>
      <img src={room?.image} className="w-full" />
      <p className="text-blue-500">${room?.price}</p>
      <p>{room?.address}</p>
    </div>
  )
}
