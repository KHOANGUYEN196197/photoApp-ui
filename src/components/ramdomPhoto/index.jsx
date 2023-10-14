import { Button, FormGroup, Label } from "reactstrap";
import Images from "../../constants/images";

function RandomPhoto(props) {
  const { name, label, value, onChange, onBlur } = props;
  const randomIdPhoto = () => {
    const randomID = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomID}/200/200`;
  };

  const randomPhoto = () => {
    if (onChange) {
      const randomUrl = randomIdPhoto();
      console.log(1111, randomUrl);
      onChange(randomUrl);
      console.log(1122222, value);
    }
  };
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>

      <div>
        <Button
          onClick={randomPhoto}
          onBlur={onBlur}
          type="button"
          outline
          color="primary"
        >
          Random a photo
        </Button>
      </div>
      <div>
        <img
          width="200px"
          height="200px"
          src={value}
          alt="colorful background"
          onError={() => {
            randomPhoto();
          }}
        />
      </div>
    </FormGroup>
  );
}
export default RandomPhoto;
