import HorizontalDivider from '../horizontal-divider/HorizontalDivider'

interface IGiteImagePanelProps {
  onClick: () => void
  isSelected: boolean | undefined
  selectedClassName: string
  imgSrc: string
  imgAlt: string
  giteText: string
}

const GiteImagePanel = ({
  onClick,
  isSelected,
  selectedClassName,
  imgSrc,
  imgAlt,
  giteText,
}: IGiteImagePanelProps) => (
  <div className={'flex flex-col items-center'}>
    <img
      src={imgSrc}
      alt={imgAlt}
      className={`h-[85vh] w-full object-cover ${
        isSelected ? 'opacity-100' : 'opacity-70'
      } transition-all duration-200 hover:cursor-pointer hover:opacity-100`}
      onClick={onClick}
    />
    <div
      className={`flex h-[15vh] flex-col justify-center ${
        isSelected === false ? 'opacity-70' : 'opacity-100'
      }`}
    >
      <h4
        className={`transition-all duration-100 ${
          isSelected ? selectedClassName : ''
        }`}
      >
        {giteText}
      </h4>
      {isSelected && <HorizontalDivider />}
    </div>
  </div>
)

export default GiteImagePanel
