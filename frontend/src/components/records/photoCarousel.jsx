import { Carousel } from "@material-tailwind/react";
import PropTypes from 'prop-types';


const PhotoCarousel = ({photos}) => {

  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {photos.map((photo) => (
        <div key={photo.id} className="flex flex-row">
          <img

            src={photo.url}
            alt={photo.title}
            className="h-[600px] w-[600px] object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>

        ))}
    </Carousel>
  );
}

PhotoCarousel.propTypes = {
  photos: PropTypes.array
}

export default PhotoCarousel;