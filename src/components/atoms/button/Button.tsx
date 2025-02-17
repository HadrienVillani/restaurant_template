import { Link } from "react-router-dom";
import { IButton } from "./Button.props";

export const Button: React.FC<IButton> = ({ label, action, style, link }) => {
  return !link ? (
    <button onClick={action}>{label}</button>
  ) : (
    <Link to={link}>
      <button
        className={`border-4 border-[var(--cta-color)] rounded-lg bg-[var(--cta-color)] hover:bg-transparent font-bold duration-500 py-3 px-8 uppercase text-white cursor-pointer ${style}`}
        onClick={action}
      >
        {label}
      </button>{" "}
    </Link>
  );
};
