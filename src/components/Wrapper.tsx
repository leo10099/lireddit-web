import React from "react";
import { Box } from "@chakra-ui/core";

interface WrapperProps {
  variant: "small" | "regular";
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant = "regular" }) => {
  return (
    <Box
      id="Wrapper"
      mx="auto"
      mt={8}
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
