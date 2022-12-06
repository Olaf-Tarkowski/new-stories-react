import backgroundPng from "../../resources/images/palac_bialy.png";
import buildingJpg from "../../resources/images/KADR_02_8.jpg";
import handPng from "../../resources/images/ręka.png";
import {
  DottedBuildingPng,
  BuildingJpg,
  HideOverflow,
  Container,
  HandPng,
  NeoFontWord,
  AdoFontWord,
  AdoItaFontWord,
  ReaFontWord,
  Border,
  InfoBox,
  SmallContainer,
  FormContainer,
  Section,
  AdoBiggerSizeFontWord,
  Input,
  InputContainer,
  InputCheckBox,
  LabelCheckBox,
  CheckBoxContainer,
  CreamButton,
} from "./styled";

const ContactForm = () => {
  return (
    <Container>
      <HideOverflow>
        <DottedBuildingPng src={backgroundPng} alt="Dotted Building"/>
        <Section>
          <SmallContainer>
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
          </SmallContainer>
          <FormContainer>
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
          </FormContainer>
        </Section>
      </HideOverflow>
      <BuildingJpg src={buildingJpg} alt="Building"/>
      <HandPng src={handPng} alt="Moving hand"/>
    </Container>
  );
};

export default ContactForm;
