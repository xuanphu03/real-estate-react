import welcome from '@/assets/images/welcome.png'
import { twMerge } from 'tailwind-merge'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/Select'
import { MapPin } from 'lucide-react'

interface Props {
  className?: string
}

export default function Welcome({ className }: Props) {
  return (
    <div className={twMerge('flex gap-9 relative', className)}>
      <div>
        <h2 className="text-6xl mb-2">
          {' '}
          Modern living <br /> for everyone
        </h2>
        <p>
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
      </div>
      <div className="absolute bottom-10 flex gap-4 p-6 bg-[#F3F3FA] w-2/3">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input type="email" placeholder="Search a location" icon={MapPin} />
        <Button> Search </Button>
      </div>
      <img src={welcome} alt="welcome" className="w-1/2" />
    </div>
  )
}
