export default function Banner() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-screen bg-black gap-10 p-10">
      {/* Text Container */}
      <div className="flex flex-wrap justify-left text-container text-white w-full md:w-1/2">
        {/* Heading */}
        <h1 className="text-4xl mb-4 text-left font-bold text-blue-400">
          Making Life Multiplanetary
        </h1>
        {/* Paragraph */}
        <p className="text-justify">
          SpaceX has gained worldwide attention for a series of historic
          milestones. It is the only private company capable of returning a
          spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft
          became the first commercial spacecraft to deliver cargo to and from
          the International Space Station. And in 2020, SpaceX became the first
          private company to take humans there as well. Click through the
          timeline above to see some of our milestone accomplishments.
        </p>
      </div>

      {/* Image Container */}
      <div className="image-container w-full md:w-1/2 text-center">
        {/* Image */}
        <img
          src="https://studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2021/02/spacex-tesmanian_1600x.jpg"
          alt="SpaceX Banner"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
