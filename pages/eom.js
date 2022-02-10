import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "../Components/Toolbar";

const EOM = ({ employee }) => {
  //   console.log(employee[0]);
  return (
    <>
      <section id="eom">
        <Toolbar />
        <Container>
          <h1 className="text-center fw-bold my-4 display-4">User Info</h1>
          <Row className="text-center">
            <Col xl={8} className="mx-auto">
              <h1 className="display-6 fw-bold">{employee[0].name}</h1>
              <h3>User name : {employee[0].username}</h3>
              <p>Email : {employee[0].email}</p>
              <p>Address : {employee[0].address.street}</p>
              <p>Suite : {employee[0].address.suite}</p>
              <p>City : {employee[0].address.city}</p>
              <p>Zipcode : {employee[0].address.zipcode}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await apiResponse.json();

  return {
    props: {
      employee: data,
    },
  };
};
export default EOM;
