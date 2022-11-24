import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 85px;
  color: #fff;
  position: relative;
`;

export const HideOverflow = styled.div`
  overflow: hidden;
  position: relative;
  width: 1920px;
  height: 900px;
  background-color: #0b1036;
`;

export const DottedBuildingPng = styled.img`
  position: absolute;
  top: 249px;
  right: -630px;
  width: 1024px;
  height: 674px;
`;

export const BuildingJpg = styled.img`
  position: absolute;
  top: -22px;
  left: 228px;
  width: 576px;
  height: 461px;
`;

export const HandPng = styled.img`
  position: absolute;
  top: 378px;
  left: 230px;
  width: 134px;
  height: 185px;

  @keyframes up-and-down {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(20px);
    }
  }
  animation: up-and-down 3s infinite;
  animation-direction: alternate;
`;

export const BigBox = styled.div`
  display: flex;
`;

export const SmallBox = styled.div`
  margin: 588px 0 0 228px;
`;

export const InfoBox = styled.div`
  width: 554px;
  display: flex;
  justify-content: space-between;
`;

export const Border = styled.div`
  width: 260px;
  border: 1px solid #a59f90;
  border-width: 1px 0 1px 0;
`;

export const Box = styled.div`
  margin: 218px 0 0 184px;
`;

export const InputContainer = styled.div`
  width: 708px;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  row-gap: 16px;
`;

export const Input = styled.input`
  max-width: 724px;
  padding: 26px 19px;
  font-family: "Readex Pro", sans-serif;
  font-size: 14px;
  letter-spacing: 0.84px;
  border: 1px solid #a59f90;
  color: #fff;
  background-color: transparent;
  ::placeholder {
    color: #fff;
  }
  :nth-child(1) {
    grid-column: 1/2;
  }
  :nth-child(3) {
    grid-column: 1/4;
  }
  :nth-child(4) {
    grid-column: 1/4;
  }
`;

export const CheckBoxContainer = styled.label`
  margin: 26px 0;
  display: flex;
  align-items: center;
`;

export const InputCheckBox = styled.div`
  margin: 0 26px 0 0;
  width: 30px;
  height: 30px;
  border: 1px solid #a59f90;
  :hover {
    cursor: pointer;
  }
`;

export const LabelCheckBox = styled.label`
  font-size: 12px;
`;


export const CreamButton = styled.button`
  position: absolute;
  background-color: #fbd5ca;
  text-align: center;
  font-family: "Readex Pro", sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.84px;
  width: 724px;
  height: 70px;
  border: none;
  transition: 0.9s;
  :hover {
    transform: scale(1.04);
    cursor: pointer;
  }
  :active {
    background: #cae5fb;
  }
`;

export const NeoFontWord = styled.div`
  font-family: "neonoir", sans-serif;
  font-size: 26px;
  color: #fbd5ca;
`;

export const AdoFontWord = styled.div`
  margin: 21px 0 37px;
  width: 460px;
  font-family: "adobe-garamond-pro", serif;
  font-size: 30px;
  height: 30px;
  letter-spacing: 6px;
`;

export const AdoBiggerSizeFontWord = styled.div`
  margin: 19px 0 54px;
  font-family: "adobe-garamond-pro", serif;
  font-size: 60px;
  height: 61px;
  letter-spacing: 12px;
`;

export const AdoItaFontWord = styled.div`
  margin: 12px 0 2px;
  font-family: "adobe-garamond-pro", serif;
  font-style: italic;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.72px;
`;

export const ReaFontWord = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
  letter-spacing: 0.84px;
`;

export const InvitationText = styled.div`
  margin: 58px 0 69px;
  color: #0b1036;
  text-align: center;
  font-family: "adobe-garamond-pro", serif;
  font-size: 30px;
  line-height: 42px;
  letter-spacing: 6px;
`;

export const ThreeColContainer = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: center;
  grid-template-columns: 15% 15% 15%;
`;

export const BasicInfo = styled.div`
  color: #0b1036;
  text-align: center;
  font-family: "adobe-garamond-pro", serif;
  font-size: 24px;
  font-style: italic;
  line-height: 34px;
  letter-spacing: 0.72px;
  width: 215px;
`;

export const Line = styled.div`
  margin: 67px 0;
  grid-column: 1/4;
  border-top: 1px solid #a59f90;
  width: 1464px;
`;

export const LogoNewStories = styled.img`
  width: 171px;
  height: 98px;
  object-fit: fill;
`;

export const LogoHvilePark = styled.img`
  width: 187px;
  height: 86px;
`;

export const LogoPalaceBraci = styled.img`
  width: 264px;
  height: 124px;
`;
