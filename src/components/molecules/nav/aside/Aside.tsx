import { IAside } from "./Aside.props";

export const Aside = (props: IAside) => {
  return (
    <aside className={`${props.containerStyle}`}>
      <h2 className={`${props.titleStyle}`}>{props.title}</h2>
      <div className={`${props.textStyle}`}>{props.children}</div>
    </aside>
  );
};
