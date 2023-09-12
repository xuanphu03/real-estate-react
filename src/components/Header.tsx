import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import logo from '@/assets/svgs/logo.svg'

const logoRealEstate = <img src={logo} alt="logo" />

function Header() {
  return (
    <div className="flex justify-between max-w-5xl mx-auto ">
      <div className="flex gap-16 flex-auto">
        <Link to="/">{logoRealEstate}</Link>
        <ul className="flex gap-6 w-full items-center">
          <Link to="/#top-offers">
            <li>Top offers</li>
          </Link>
          <Link to="/search">
            <li>Search in offers</li>
          </Link>
          <Link to="/#references">
            <li>References</li>
          </Link>
          <Link to="/#about-us">
            <li>About Us</li>
          </Link>
          <Link to="/#our-team">
            <li>Our Team</li>
          </Link>
        </ul>
      </div>

      <Button>Contact Us </Button>
    </div>
  )
}

export default Header
