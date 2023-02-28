import styled from "vue3-styled-components";

export const Wrapper = styled.div`
  backgroung-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: clip;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  margin: 100px;
  margin-bottom: 120px;
`;

export const WalletAddress = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  outline: 2px solid dodgerblue;
  border-radius: 30px;
  padding: 10px 30px;
  margin: auto;
  width: fit-content;
  min-width: 350px;
`;

export const Address = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const QrButton = styled.button`
  font-size: 17px;
  border-radius: 20px;
  padding: 0 24px;
  margin: 0 12px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: fit-content;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

export const MenuItemsLine = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: center;
`;

export const ChainButton = styled.button`
  font-size: 20px;
  border-radius: 20px;
  border: 2px solid dodgerblue;
  padding: 0px 24px;
  margin: 0px 12px;
  width: fit-content;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: background-color 0.8s ease;

  :hover {
    transform: scale(1.009);
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Button = styled.button`
  font-size: 20px;
  min-width: 250px;
  border-radius: 30px;
  outline: 0px;
  padding: 20px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  :hover {
    transform: scale(1.009);
  }
`;

export const LogoutButton = styled.button`
  font-size: 17px;
  min-width: 250px;
  border-radius: 30px;
  border-color: red;
  outline: 0px;
  margin-top 40px;
  padding: 10px 20px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  :hover {
    transform: scale(1.009);
  }
`;

export const Powered = styled.body`
  position: fixed;
  bottom: 0px;
  font-size: 15px;

  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;
  display: flex;
  flexdirection: column;
`;
