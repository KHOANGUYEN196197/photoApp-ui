import React, { useEffect } from "react";
import Banner from "../../../../components/banner";
import Images from "../../../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import { Container, Spinner } from "reactstrap";
import PhotoList from "../../components/photoList";
import PaginationCustom from "../../../../components/pagination";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto } from "../../photoSlice";
import { deletePhotoById, getListPhoto } from "../../photoThunk";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photoReducer.photos);
  const isLoading = useSelector((state) => state.photoReducer.isLoading);
  console.log(photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (photo) => {
    navigate(`/photo/${photo.id}`);
  };
  const handleRemove = (photo) => {
    const action = deletePhotoById(photo.id);
    dispatch(action);
  };

  useEffect(() => {
    dispatch(getListPhoto());
  }, []);
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <br />

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {" "}
            <PhotoList
              photoList={photos}
              onPhotoEditClick={handleEdit}
              onPhotoRemoveClick={handleRemove}
            />
            <PaginationCustom />
          </>
        )}
      </Container>
    </div>
  );
}

export default MainPage;
