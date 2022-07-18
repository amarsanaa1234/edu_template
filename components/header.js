import {  Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const Header = () =>{
    return(
        <Nav className="position-stricky">
      <Container >
        <Nav className="header"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <div className="a">
            <Nav className="header_logo">
          </Nav>
            </div>
         <div className="header_menu">
            
         <Nav.Item className="header_menu_name">
            <Nav.Link className="header_menu_name_list" href="/">
              HOME
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="header_menu_name">
            <Nav.Link className="header_menu_name_list" href="/">
              ABOUT US
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="header_menu_name">
            <Nav.Link className="header_menu_name_list" href="/">
              REVIEW
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="header_menu_name">
            <Nav.Link className="header_menu_name_list" href="/">
              MENU
            </Nav.Link>
          </Nav.Item>
         </div>
        </Nav>
      </Container>
    </Nav>
    )
}

export default Header;