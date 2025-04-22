interface IParallaxSectionProps {
  title: string
  imgSrc: string
  description: string
}

const ParallaxSection = ({ title, imgSrc, description }: IParallaxSectionProps) => (
  <section className="relative w-full">
    {/* Title Section */}
    <div className="h-auto bg-chateau-primary py-16 text-center">
      <h2 className="text-4xl font-semibold text-chateau-secondary">{title}</h2>
    </div>

    {/* Image Section (Parallax) */}
    <div
      className="h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      {/* Transparent overlay to potentially darken image slightly for text readability if needed later */}
      <div className="h-full w-full bg-black/10"></div>
    </div>

    {/* Description Section */}
    <div className="h-auto bg-chateau-primary py-16 px-8 md:px-16 lg:px-32">
      <p className="text-center text-xl text-chateau-secondary">
        {description}
      </p>
    </div>
  </section>
)

export default ParallaxSection 