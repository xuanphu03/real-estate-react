import quote from '@/assets/svgs/quote.svg'

const references = [
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.',
    name: 'Emerson Aminoff',
    room: '3 bedroom apartmentt in Madrid'
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.',
    name: 'Jocelyn Stanton',
    room: '2 bedroom apartmentt in Barcelona'
  }
]

export default function References() {
  return (
    <div id="references" className="max-w-5xl mx-auto my-44">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold leading-loose"> References </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum
          donec ultricies cras id ac.
        </p>
      </div>
      <div className="flex gap-8 mt-11">
        {references.map(reference => (
          <div key={reference.name} className="p-6 bg-secondary">
            <div className="flex items-start gap-3">
              <img src={quote} alt="quote" />
              <p className="pt-2">{reference.comment}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold">{reference.name}</h2>
              <p>{reference.room}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
