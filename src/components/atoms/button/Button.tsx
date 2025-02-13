import { IButton } from "./Button.props";

export const Button: React.FC<IButton> = ({ label, action, style }) => {
  return (
    <button
      className="border-4 border-[var(--cta-color)] rounded-lg bg-[var(--cta-color)] hover:bg-transparent font-bold duration-500 py-3 px-8 uppercase text-white cursor-pointer"
      onClick={action}
    >
      {label}
    </button>
  );
};
