interface ContainerProps {
  children: any;
}

export const Container = (props: ContainerProps) => {
  return <div className="p-10">{props.children}</div>;
};
