interface InputProps {
  onChange: any;
  value?: any;
  name?: string;
  placeholder?: string;
  type?: string;
}

export const Input = (props: InputProps) => {
  return (
    <input
      onChange={props.onChange}
      type={props.type ?? 'text'}
      value={props.value ?? ''}
      name={props.name ?? ''}
      placeholder={props.placeholder ?? ''}
    />
  );
};
