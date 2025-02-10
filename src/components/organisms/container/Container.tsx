import { IContainer } from "./Container.props";

export const Container = (props: IContainer) => {
  return (
    <>
      <section className="w-full flex items-center justify-center py-20">
        <div className="w-4/5 ">{props.children}</div>
      </section>
    </>
  );
};
