import RandomPhoto from "../../components/ramdomPhoto";

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const onChangeImg = (newImgUrl) => {
    form.setFieldValue(name, newImgUrl);
  };
  return (
    <RandomPhoto
      name={name}
      label={label}
      value={value}
      onChange={onChangeImg}
      onBlur={onBlur}
    />
  );
}
export default RandomPhotoField;
