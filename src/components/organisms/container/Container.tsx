import { IContainer } from "./Container.props";

export const Container = (props: IContainer) => {
  return (
    <>
      <section
        className={`w-full flex items-center justify-center py-20 ${props.style}`}
      >
        <div className={`w-4/5 ${props.contTextStyle}`}>{props.children}</div>
      </section>
    </>
  );
};
