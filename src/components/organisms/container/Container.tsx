import { IContainer } from "./Container.props";

export const Container = (props: IContainer) => {
  // ${props.img && `bg-[url(${props.img})]`}
  console.log(props.img);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundPosition: "center",
        }}
        className={`w-full flex items-center justify-center py-20 ${props.style}`}
      >
        <div className={`w-4/5 ${props.contTextStyle}`}>{props.children}</div>
      </section>
    </>
  );
};
