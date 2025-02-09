import { getImageUrl } from "utils/images-util";
import { IImage } from "./Image.props";

export const Image: React.FC<IImage> = ({ name, alt, style }) => {
  return (
    <img className={`${style}`} src={`${getImageUrl(name)}`} alt={`${alt}`} />
  );
};
