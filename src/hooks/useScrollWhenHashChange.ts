import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollWhenHashChange() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])
}
