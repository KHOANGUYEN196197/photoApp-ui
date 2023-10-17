import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

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
        invalid={showErr}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}
export default InputField;
