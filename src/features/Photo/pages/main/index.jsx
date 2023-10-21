import React from "react";
import Banner from "../../../../components/banner";
import Images from "../../../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import PhotoList from "../../components/photoList";
import PaginationCustom from "../../../../components/pagination";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto } from "../../photoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photoReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (photo) => {
    navigate(`/photo/${photo.id}`);
  };
  const handleRemove = (photo) => {
    const action = deletePhoto(photo.id);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <br />
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handleEdit}
          onPhotoRemoveClick={handleRemove}
        />
        <PaginationCustom />
      </Container>
    </div>
  );
}

export default MainPage;
