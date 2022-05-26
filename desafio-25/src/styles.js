import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 700px) {
    padding: 0;
    margin-left: 1.5rem;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  margin-bottom: 2rem;

  div {
    max-width: 1200px;
    margin: 0 auto;

    h1 {
      font-size: 2.5rem;
      width: 498px;
      height: 147px;
      margin-bottom: 1.5rem;
      font-weight: 600;
      line-height: 49px;
    }

    p {
      font-size: 1.125rem;
      font-weight: 500;
      width: 495px;
      color: #797979;
    }

    img {
      max-width: 100%;
    }

    a {
      font-size: 1.125rem;
      font-weight: 500;
      color: #272727;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  margin-top: 32px;
  margin-right: 2.5rem;
  background: ${(props) => (props.primary ? '#272727' : 'white')};
  border: none;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: ${(props) => (props.primary ? '#ff5a5f' : '#272727')};
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0;
    margin-left: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 2.5rem;
    padding: 1rem;
    color: #fff;

    &:last-child {
      background: #272727;
      width: 585px;
      height: 182px;

      h2 {
        text-align: right;
        font-weight: 600;
        font-size: 1.175rem;
        margin-bottom: 1.125rem;
      }

      p {
        font-size: 1rem;
        font-weight: 500;
        line-height: 25px;
      }
    }
  }
`;
