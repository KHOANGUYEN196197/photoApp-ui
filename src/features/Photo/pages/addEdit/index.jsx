import React from "react";
import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";
import Banner from "../../../../components/banner";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const params = useParams();
  // console.log(123, params.photoId);
  const { photoId } = useParams();
  const photos = useSelector((state) => state.photoReducer);
  const photoEdit = photos.find((photo) => +photo.id === +photoId);
  const isAddMode = !photoId;

  const initialValue = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : photoEdit;

  const handleSubmit = (formPhoto) => {
    if (isAddMode) {
      const randomId = Math.trunc(Math.random() * 9000);
      formPhoto.id = randomId;
      const action = addPhoto(formPhoto);
      dispatch(action);
      navigate("/");
    } else {
      console.log("edit", formPhoto);
      const action = updatePhoto(formPhoto);
      dispatch(action);
      navigate("/");
    }

    //viet gon
    // const randomId = Math.trunc(Math.random() * 9000);
    // if(isAddMode) formPhoto.id = randomId;
    // const action = isAddMode ? addPhoto(formPhoto) : updatePhoto(formPhoto)
    // dispatch(action)
    // navigate('/')
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValue={initialValue}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
