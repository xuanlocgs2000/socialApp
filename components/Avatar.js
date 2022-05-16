import react from "react";
import { Image } from "react-native";

export const Avatar = ({ size, image }) => (
  <Image
    source={image}
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  />
);
