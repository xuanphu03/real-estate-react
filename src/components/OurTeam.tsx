import face1 from '@/assets/images/face1.png'
import face2 from '@/assets/images/face2.png'
import face3 from '@/assets/images/face3.png'
import face4 from '@/assets/images/face4.png'
import face5 from '@/assets/images/face5.png'

const members = [
  {
    name: 'Davis Carder',
    face: face1,
    slogan: 'Super duper position'
  },
  {
    name: 'Maren Press',
    face: face2,
    slogan: 'Super duper position'
  },
  {
    name: 'Randy Rosser',
    face: face3,
    slogan: 'Super duper position'
  },
  {
    name: 'Haylie Donin',
    face: face4,
    slogan: 'Super duper position'
  },
  {
    name: 'Miracle Bator',
    face: face5,
    slogan: 'Super duper position'
  }
]

export default function Membership() {
  return (
    <div id="our-team" className="max-w-5xl mx-auto py-28">
      <div className="flex flex-row-reverse flex-wrap justify-between items-center gap-y-10">
        <div className="w-[30%]">
          <h1 className="text-5xl font-bold leading-loose">Our Team</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            rutrum donec ultricies cras id ac.
          </p>
        </div>

        {members.map(member => (
          <div
            key={member.name}
            className="w-[30%] flex justify-center border-lightgray border-[1px] rounded-sm shadow-xl"
          >
            <div className="text-2xl text-center font-medium py-5">
              <img src={member.face} alt="" />
              <p>{member.name}</p>
              <p>{member.slogan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
