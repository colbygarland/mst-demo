interface GridProps {
  children: any;
}

export const Grid = (props: GridProps) => {
  return <div className="grid grid-cols-3 gap-4">{props.children}</div>;
};
