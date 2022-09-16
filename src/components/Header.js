import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="p-3">
      <Navbar.Brand href="#home" className="fs-1">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
          width="50"
          height="50"
          className="d-inline-block align-top shadow rounded-circle"
        />{"  "}
        Note App
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
