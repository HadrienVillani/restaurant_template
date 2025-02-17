import { IInput } from "./Input.props";

export const Input: React.FC<IInput> = ({ label, type, inputType }) => {
  return (
    <>
      <div className="flex flex-col my-5 w-full">
        <label
          htmlFor=""
          className="text-lg rounded-lg  uppercase text-white font-bold mb-3"
        >
          {label}
        </label>
        {type === "input" ? (
          <input
            type={inputType}
            className="rounded-lg border-4 border-white p-3 outline-none cursor white caret-white"
          />
        ) : (
          <textarea className="rounded-lg border-4 border-white p-3 outline-none caret-white" />
        )}
      </div>
    </>
  );
};
