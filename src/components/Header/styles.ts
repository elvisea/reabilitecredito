import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 1010px){
    flex-direction: column;
    height: auto;
    padding: 16px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1010px){
      margin-top: 16px;
    }

    a {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #FC7900;
      }
    }
  }

  #redes-sociais {
    width: 100%;
    max-width: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1010px){
      margin-top: 16px;
    }

    a {
     
      svg {
        color: #00AEEF;
        font-size: 18px;

        &:hover {
          color: #FC7900;
        }
      }
    }
  }

  button {
    height: 40px;
    max-width: 220px;
    width: 100%;
    border: 2px solid #2E3192;
    font-size: 14px;
    font-weight: 700;
    border-radius: 20px;
    background: #fff;
    color: #2E3192;

    @media (max-width: 1010px){
      margin-top: 16px;
    }
    
    &:hover {
      color: #FC7900;
      border: 2px solid #FC7900;
    }
  }
`;
