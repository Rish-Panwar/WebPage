import { gridItems } from "../../data"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"

const Grid = () => {
  return (
    <section id="about" className="relative z-10 mt-40 px-4 sm:px-6">
      <div className="flex justify-center pt-10">
          <BentoGrid>
            {gridItems.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg }) => (
              <BentoGridItem id={id} key={id} title={title} description={description} className={className} imgClassName={imgClassName} titleClassName={titleClassName} img={img} spareImg={spareImg} />
            ))}
          </BentoGrid>
        </div>
    </section>
  )
}

export default Grid
