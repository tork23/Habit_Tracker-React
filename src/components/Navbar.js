import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux";

function NavbarComponent(props) {
  // Todays date in dd/mm/yyyy format
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  return (
    <Navbar className="navbar mb-5" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Habit Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>
            My Habits
          </Nav.Link>
          <Nav.Link as={Link} to={"/track-habit"}>
            Track Habit
          </Nav.Link>
        </Nav>
        <Navbar.Brand>{today}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};
export default connect(mapStateToProps)(NavbarComponent);
