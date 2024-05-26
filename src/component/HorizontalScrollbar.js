import { Box, Container } from "@mui/material";
import BodyPart from "./BodyPart";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts, NumberOfSlides, slidesToScroll }) => {
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: NumberOfSlides,
    slidesToScroll: slidesToScroll,
  };
  return (
    <Container>
      <Slider {...settings}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
          {isBodyParts ? <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            /> : <ExerciseCard exercise={item}/>
          }
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default HorizontalScrollbar;
