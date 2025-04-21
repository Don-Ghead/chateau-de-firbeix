interface IGiteImagePanelProps {
  onClick: () => void
  isSelected: boolean | undefined
  imgSrc: string
  imgAlt: string
  giteText: string
}

const GiteImagePanel = ({
  onClick,
  isSelected,
  imgSrc,
  imgAlt,
  giteText,
}: IGiteImagePanelProps) => (
  <div
    className={`relative h-[85vh] transition-all duration-500 ${
      isSelected ? 'w-4/5' : 'w-1/3'
    }`}
  >
    <img
      src={imgSrc}
      alt={imgAlt}
      className={`h-full w-full object-cover ${
        isSelected ? 'opacity-100' : 'opacity-70'
      } transition-all duration-200 hover:cursor-pointer hover:opacity-100`}
      onClick={onClick}
    />
    <div
      className={`absolute left-0 w-full transform bg-chateau-primary py-4 transition-all duration-1000 ${
        isSelected ? 'bottom-0 translate-y-0' : 'top-1/2 -translate-y-1/2'
      }`}
    >
      <h4 className='text-center text-3xl font-semibold text-chateau-secondary'>
        {giteText}
      </h4>
    </div>
  </div>
)

export default GiteImagePanel
