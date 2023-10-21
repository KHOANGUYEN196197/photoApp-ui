import { Button, FormGroup, Spinner } from "reactstrap";

function ButtonCustom(props) {
  const { isSubmitting, isAddMode } = props;
  return (
    <FormGroup>
      {isSubmitting ? <Spinner /> : ""}
      <Button Spinner color="primary">
        {isAddMode ? "Add to album" : "Edit to album"}
      </Button>
    </FormGroup>
  );
}
export default ButtonCustom;
