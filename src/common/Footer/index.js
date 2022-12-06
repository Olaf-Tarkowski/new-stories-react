import logoNewStories from "../../resources/images/nowe_historie.png";
import logoHvilePark from "../../resources/images/HvilePark.svg";
import logoPalaceBraci from "../../resources/images/Palac_logo.svg";
import {
  Container,
  ThreeColContainer,
  LogoNewStories,
  LogoHvilePark,
  LogoPalaceBraci,
  BasicInfo,
  Line,
  InvitationText,
} from "./styled";

const Footer = () => {
  return (
    <Container>
      <InvitationText>ZAPRASZAMY DO NASZEGO BIURA SPRZEDAŻY.</InvitationText>
      <ThreeColContainer>
        <BasicInfo>
          ul. Nałęczowska 175
          <br />
          20-144 Lublin
        </BasicInfo>
        <BasicInfo>
          +48 502 765 144
          <br />
          biuro@nowehistorie.pl
        </BasicInfo>
        <BasicInfo>
          Pn-Pt. 12-18
          <br />
          Sob. 10-14
        </BasicInfo>
        <Line />
        <LogoNewStories src={logoNewStories} />
        <LogoHvilePark src={logoHvilePark} />
        <LogoPalaceBraci src={logoPalaceBraci} />
      </ThreeColContainer>
    </Container>
  );
};

export default Footer;
