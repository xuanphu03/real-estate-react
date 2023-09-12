import plane from '@/assets/images/paper-plane.png'
import footer from '@/assets/svgs/logo-footer.svg'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

function Footer() {
  return (
    <footer>
      <div className="flex bg-secondary justify-center items-center gap-8 py-24">
        <img src={plane} alt="paper-plane" />
        <div>
          <h1 className="text-4xl font-bold leading-10">
            Subscribe to newsletter
          </h1>
          <p className="text-xl leading-9">
            Get the latest news and interesting offers and real estate
          </p>
          <div className="flex w-2/3 gap-4">
            <Input
              className="pl-2"
              type="email"
              placeholder="Your e-mail address"
            />
            <Button className="text-primary bg-transparent border-primary border-2 hover:border-primary/0 hover:text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="h-48 bg-primary flex justify-center items-center">
        <img src={footer} alt="" />
      </div>
    </footer>
  )
}

export default Footer
