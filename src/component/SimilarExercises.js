import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
// Debounced values
import { useWindowWidth } from "@react-hook/window-size";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const onlyWidth = useWindowWidth();

  const isMobile = onlyWidth <= 768; // Adjust this value based on your breakpoint for small screens
  const [numberOfSlides, setNumberOfSlides] = useState(2);

  useEffect(() => {
    if (isMobile) {
      setNumberOfSlides(1);
    } else {
      setNumberOfSlides(2);
    }
  }, [onlyWidth]); // Update numberOfSlides when width changes

  return (
    <Box sx={{ mt: { lg: "20px", xs: "0" }, ml:{lg:"30px"}, p:{xs: "30px"} }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar
            data={targetMuscleExercises}
            NumberOfSlides={numberOfSlides}
            slidesToScroll={numberOfSlides + 1}
          />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb={5} mt={8}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar
            data={equipmentExercises}
            NumberOfSlides={numberOfSlides}
            slidesToScroll={numberOfSlides + 1}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
