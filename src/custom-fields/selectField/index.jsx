import { ErrorMessage } from "formik";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import "./style.scss";

function SelectField(props) {
  const { field, form, label, placeholder, options } = props;
  const { name, value, onChange, onBlur } = field;
  const selectOption = options.find((option) => option.value === value);
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

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
    <FormGroup className="select-custom">
      <Label for={name}>{label}</Label>
      <Select
        id={name}
        name={name}
        value={selectOption}
        onChange={handleSelectOption}
        onBlur={onBlur}
        placeholder={placeholder}
        options={options}
        className={showErr ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}
export default SelectField;
