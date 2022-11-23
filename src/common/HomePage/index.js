import {
  BuildingJpg,
  Container,
  CreamButton,
  AdoFontWord,
  GreetingContainer,
  LeftText,
  NeoFontWord,
  RightText,
  ShortText,
  SmallTextContainer,
  Text,
  AdoItaFontWord,
  ReaFontWord,
  Line,
  TeaserText,
  CreamText,
  LogoPng,
} from "./styled";
import logoPng from "../../resources/images/nowe_historie.png";
import buildingJpg from "../../resources/images/KADR_04_3.jpg";

const HomePage = () => {
  return (
    <Container>
      <GreetingContainer>
        <LogoPng src={logoPng} />
        <ShortText>
          Nowe Historie
          <br />
          nie dzieja sie codziennie.
        </ShortText>
        <Text>
          WIELOETAPOWY PROJEKT REWITALIZACJI
          <br />
          GARBARNI BRACI DOMAŃSKICH W CENTRUM LUBLINA.
        </Text>
        <CreamButton>Znajdź mieszkanie</CreamButton>
        <BuildingJpg src={buildingJpg} />
      </GreetingContainer>
      <SmallTextContainer>
        <LeftText>
          <NeoFontWord>Rewitalizacja</NeoFontWord>
          <AdoFontWord>
            SPEKTAKULARNA ZMIANA W SAMYM CENTRUM LUBLINA.
          </AdoFontWord>
          <Line>
            <TeaserText>
              <div>Etap pierwszy - 2023</div>
              <CreamText>Etap drugi - 2024</CreamText>
              <CreamText>Etap trzeci - wkrótce</CreamText>
            </TeaserText>
          </Line>
          <Line />
        </LeftText>
        <RightText>
          <AdoItaFontWord>
            Nowe Historie to nazwa nieprzypadkowa. Miejsce, którego dotyczy to
            esencja historii Lublina. Stara Garbarnia Braci Domańskich doczekała
            się gruntownej rewitalizacji. Począwszy od Pałacu Domańskich w stylu
            eklektycznym, po kompleksową przebudowę dawnych budynków
            produkcyjnych, gdzie planowo powstają pierwsze lofty w Lublinie.
          </AdoItaFontWord>
          <ReaFontWord>
            Deweloper Hvile Park z pasją realizuje wizję odnowy panoramy Naszego
            Lublina, dlatego rewitalizacja tego kompleksu stanowi kluczowe
            zadanie, które stawiają przed sobą inwestorzy. W trosce o miasto
            pragniemy pieczołowicie odrestaurować zapomniany Pałac Braci
            Domańskich, którego architektura to prawdziwa perełka na mapie
            Naszego Miasta.
          </ReaFontWord>
        </RightText>
      </SmallTextContainer>
    </Container>
  );
};

export default HomePage;
