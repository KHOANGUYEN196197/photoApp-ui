import React from "react";
import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";
import Banner from "../../../../components/banner";
import { addPhoto } from "../../photoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formPhoto) => {
    const action = addPhoto(formPhoto);
    dispatch(action);
    navigate("/");
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
