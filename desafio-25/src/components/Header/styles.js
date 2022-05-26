import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 30px 0;
  flex-wrap: wrap;

  img {
    background: #272727;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin-left: 1rem;
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    img {
      background: transparent;
    }

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: #272727;
        font-size: 1.125rem;

        &:hover {
          color: #ff5a5f;
        }
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    div {
      h1 {
        font-size: 1rem;
      }
    }

    ul {
      display: none;
      background: #f9f9f9;
      border-radius: 4px;
      padding: 1rem;

      /* display: none; */
      padding-top: 1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      gap: 1rem;
    }
  }
`;

export const Menu = styled.div`
  img {
    display: none;
    cursor: pointer;
    background: transparent;
    position: absolute;
    right: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 700px) {
      display: block;
    }
  }
`;
