import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ReplyForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} placeholder="Add a comment..." />
      </Form.Group>
      <Button>send</Button>
    </Form>
  );
};

export default ReplyForm;


//hide form 

//for should be revealed when reply button clicked