import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={name}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}
export default InputField;
