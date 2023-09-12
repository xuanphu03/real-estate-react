import aboutus from '@/assets/images/about-us.png'

export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="py-32 max-w-5xl mx-auto flex gap-20 justify-between items-center"
    >
      <img className="w-3/5" src={aboutus} alt="image about us" />
      <div className="flex gap-8 flex-col">
        <h1 className="text-5xl font-bold">About us</h1>
        <p className="text-lg">
          We are a company that connects the world of real estate and finance.
          We provide a complete service for the sale, purchase or rental of real
          estate. Our advantage is more than 15 years of experience and soil in
          attractive locations in Slovakia with branches in Bratislava and
          Košice.
        </p>
        <p className="text-lg">
          We have a connection to all banks on the Slovak market, so we can
          solve everything under one roof. By constantly innovating our business
          activities, we move forward and we are able to offer truly
          above-standard services that set us apart from the competition.
        </p>
      </div>
    </div>
  )
}
