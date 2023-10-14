import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

function SelectField(props) {
  const { field, form, label, placeholder, options } = props;
  const { name, value, onChange, onBlur } = field;
  const selectOption = options.find((option) => option.value === value);

  const handleSelectOption = (option) => {
    const selectedValue = option ? option.value : option;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    onChange(changeEvent);
  };
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Select
        id={name}
        name={name}
        value={selectOption}
        onChange={handleSelectOption}
        onBlur={onBlur}
        placeholder={placeholder}
        options={options}
      />
    </FormGroup>
  );
}
export default SelectField;
