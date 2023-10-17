import React from "react";
import RandomPhoto from "../../components/ramdomPhoto";
import { ErrorMessage } from "formik";
import { FormFeedback } from "reactstrap";

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

  const onChangeImg = (newImgUrl) => {
    form.setFieldValue(name, newImgUrl);
  };
  return (
    <React.Fragment>
      <RandomPhoto
        name={name}
        label={label}
        value={value}
        onChange={onChangeImg}
        onBlur={onBlur}
      />
      <div className={showErr ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </React.Fragment>
  );
}
export default RandomPhotoField;
