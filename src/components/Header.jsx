import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import nbaLogo from "../assets/Galatasaray.png";
const Header = () => {
  return (
    <Container>
      <Image className="logo-img" src={nbaLogo} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">GS Legends</h1>
    </Container>
  );
};
export default Header;
