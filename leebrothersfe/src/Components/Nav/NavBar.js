import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">LB</Navbar.Brand>
                <Nav className="me-auto">
                    <Navbar.Link href="#home">Home</Navbar.Link>
                    <Navbar.Link href="#About">About Us</Navbar.Link>
                    <Navbar.Link href="#Contact">Contact</Navbar.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbar;