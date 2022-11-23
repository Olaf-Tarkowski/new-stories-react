import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 85px;
  position: relative;
`;

export const HideOverflow = styled.div`
  overflow: hidden;
  position: relative;
  width: 1920px;
  height: 900px;
  background-color: #0B1036;
`;

export const DottedBuildingPng = styled.img`
  position: absolute;
  bottom: -22px;
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

export const InvitationText = styled.div`
  margin: 58px 0 69px;
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
  grid-column-start: 1;
  grid-column-end: 4;
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
