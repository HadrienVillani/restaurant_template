import { IAside } from "./Aside.props";

export const Aside = (props: IAside) => {
  return (
    <aside>
      <h2 className={`${props.style}`}>{props.title}</h2>
      <div className={`${props.style}`}>{props.children}</div>
    </aside>
  );
};
