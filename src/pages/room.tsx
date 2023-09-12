import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Room() {
  const [room, setRoom] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch(
        `https://64106f42be7258e14529c12f.mockapi.io/rooms/${id}`
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
