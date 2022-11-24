import bacgroundPng from "../../resources/images/palac_bialy.png";
import buildingJpg from "../../resources/images/KADR_02_8.jpg";
import handPng from "../../resources/images/ręka.png";
import logoNewStories from "../../resources/images/nowe_historie.png";
import logoHvilePark from "../../resources/images/HvilePark.svg";
import logoPalaceBraci from "../../resources/images/Palac_logo.svg";
import {
  DottedBuildingPng,
  BuildingJpg,
  HideOverflow,
  Container,
  HandPng,
  ThreeColContainer,
  LogoNewStories,
  LogoHvilePark,
  LogoPalaceBraci,
  BasicInfo,
  Line,
  InvitationText,
  NeoFontWord,
  AdoFontWord,
  AdoItaFontWord,
  ReaFontWord,
  Border,
  InfoBox,
  SmallBox,
  Box,
  BigBox,
  AdoBiggerSizeFontWord,
  Input,
  InputContainer,
  InputCheckBox,
  LabelCheckBox,
  CheckBoxContainer,
  CreamButton,
} from "./styled";

const Footer = () => {
  return (
    <Container>
      <HideOverflow>
        <DottedBuildingPng src={bacgroundPng} />
        <BigBox>
          <SmallBox>
            <NeoFontWord>Spotkanie z nami</NeoFontWord>
            <AdoFontWord>UMÓWMY PREZENTACJĘ</AdoFontWord>
            <InfoBox>
              <Border>
                <AdoItaFontWord>+48 502 567 144</AdoItaFontWord>
                <ReaFontWord>Zadzwoń</ReaFontWord>
              </Border>
              <Border>
                <AdoItaFontWord>biuro@nowehistorie.pl</AdoItaFontWord>
                <ReaFontWord>Napisz</ReaFontWord>
              </Border>
            </InfoBox>
          </SmallBox>
          <Box>
            <NeoFontWord>Zostaw swoje dane</NeoFontWord>
            <AdoBiggerSizeFontWord>ODDZWONIMY</AdoBiggerSizeFontWord>
            <InputContainer>
              <Input type="text" placeholder="Imię*" />
              <Input type="text" placeholder="Nazwisko*" />
              <Input type="text" placeholder="Adres e-mail*" />
              <Input type="text" placeholder="Numer telefonu*" />
            </InputContainer>
            <CheckBoxContainer>
              <InputCheckBox type="checkbox" />
              <LabelCheckBox>
                Wyrażam zgodę na lorem ipsum dolor sit amet, consetetur
                sadipscing …
              </LabelCheckBox>
            </CheckBoxContainer>
            <CreamButton>Wyślij wiadomość</CreamButton>
          </Box>
        </BigBox>
      </HideOverflow>
      <BuildingJpg src={buildingJpg} />
      <HandPng src={handPng} />
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
