import PropTypes from "prop-types";
import React from "react";
import InputField from "../../../../custom-fields/inputField";
import SelectField from "../../../../custom-fields/selectField";
import RandomPhotoField from "../../../../custom-fields/ramdomPhotoField";
import { FastField, Form, Formik } from "formik";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import * as Yup from "yup";
import ButtonCustom from "../../../../components/buttonCustom";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  const dataInit = {
    title: "",
    categoryId: null,
    photo: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("this field is required"),
    categoryId: Yup.number().required("this field is required"),
    photo: Yup.string().required("this field is required"),
  });
  return (
    <Formik
      initialValues={dataInit}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              //
              label="Title"
              placeholder="What's your photo title"
            />
            <FastField
              name="categoryId"
              component={SelectField}
              //
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              //
              label="Photo"
            />
            <ButtonCustom isSubmitting={isSubmitting} />
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
