import { gridItems } from "../../data"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"

const Grid = () => {
  return (
    <section id="about">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <BentoGrid>
            {gridItems.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg }) => (
              <BentoGridItem id={id} key={id} title={title} description={description} className={className} imgClassName={imgClassName} titleClassName={titleClassName} img={img} spareImg={spareImg} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

export default Grid
