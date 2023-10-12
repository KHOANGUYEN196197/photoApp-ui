import React from "react";
import Banner from "../../../../components/banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import PhotoList from "../../components/photoList";
import photos from "../../../../constants/photoList";
import PaginationCustom from "../../../../components/pagination";

MainPage.propTypes = {};

function MainPage(props) {
  const handleEdit = () => {
    console.log("edit");
  };
  const handleRemove = () => {
    console.log("delete");
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
