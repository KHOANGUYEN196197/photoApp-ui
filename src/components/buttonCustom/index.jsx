import { Button, FormGroup, Spinner } from "reactstrap";

function ButtonCustom(props) {
  const { isSubmitting } = props;
  return (
    <FormGroup>
      {isSubmitting ? <Spinner /> : ""}
      <Button Spinner color="primary">
        Add to album
      </Button>
    </FormGroup>
  );
}
export default ButtonCustom;
