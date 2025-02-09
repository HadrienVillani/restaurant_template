import { Link } from "react-router-dom";
import { INavItem } from "./NavItem.props";

export const NavItem: React.FC<INavItem> = ({ label, src }) => {
  return (
    <Link to={src}>
      <li className="uppercase font-bold p-5">{label}</li>
    </Link>
  );
};
