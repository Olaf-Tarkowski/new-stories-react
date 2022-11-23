import {
  ArrowSvg,
  Container,
  MeetingInput,
  NavList,
  Meeting,
  SendButton,
  SmallContainer,
  StyledList,
  LogoPng,
} from "./styled";
import logoPng from "../../resources/images/nowe_historie.png";
import arrowSvg from "../../resources/images/arrow.svg";

const Header = () => {
  return (
    <Container>
      <LogoPng src={logoPng} />
      <NavList>
        <StyledList>Znajdź mieszkanie</StyledList>
        <StyledList>O Inwestycji</StyledList>
        <StyledList>Lokalizacja</StyledList>
        <StyledList>Galeria</StyledList>
        <StyledList>O deweloperze</StyledList>
        <StyledList>Kontakt</StyledList>
      </NavList>
      <SmallContainer>
        <Meeting>
          <MeetingInput type="text" placeholder="+48 502 567 144" />
          <ArrowSvg src={arrowSvg} />
        </Meeting>
        <SendButton>Umów spotkanie</SendButton>
      </SmallContainer>
    </Container>
  );
};

export default Header;
