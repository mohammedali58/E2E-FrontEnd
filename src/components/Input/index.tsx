import "./styles.css";

type InputProps = {
  value: string;
  label: string;
  onChange: (value: string) => void;
};

const Input = (props: InputProps) => {
  return (
    <input
      className="input"
      placeholder={props.label}
      required
      value={props.value}
      onChange={(evt) => props.onChange(evt.target.value)}
    />
  );
};

export default Input;
