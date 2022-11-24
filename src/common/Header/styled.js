import styled from "styled-components";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  margin: 14px 80px 11px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.84px;
`;

export const SmallContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LogoPng = styled.img`
  width: 109px;
  height: 75px;
`;

export const ArrowSvg = styled.img`
  height: 11px;
`;

export const NavList = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const StyledList = styled.li`
  padding: 15px;
  transition: 0.9s;
  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
`;

export const Meeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  outline: 1px solid #d4cfc1;
  width: 200px;
  height: 50px;
`;

export const MeetingInput = styled.input`
  font-family: "Readex Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.84px;
  padding: 0px;
  border: none;
  text-align: center;
  width: 100%;
  ::placeholder {
    color: #0b1036;
  }
`;

export const SendButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.84px;
  background: #fbd5ca;
  width: 176px;
  height: 50px;
  outline: 1px solid #fbd5ca;
  border: none;
  transition: 0.9s;
  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
  :active {
    outline: 1px solid #cae5fb;
    background: #cae5fb;
  }
`;
