interface TitleProps {
  children: any;
  style?: string;
}

export const Title = (props: TitleProps) => {
  return (
    <h2 className="text-xl lg:text-4xl text-black font-bold mb-6">
      {props.children}
    </h2>
  );
};
