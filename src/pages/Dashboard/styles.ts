import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 450px;
  color: #3a3a3a;
  font-size: 48px;
  margin-top: 80px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 700px;
  margin-top: 40px;

  & > * {
    height: 70px;
  }

  input {
    flex: 1;
    color: #3a3a3a;
    padding: 0 24px;
    border: ${props =>
      props.hasError ? '1px solid #c53030' : '1px solid #fff'};
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    color: #fff;
    background-color: #04d361;
    font-weight: 700;
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  a {
    display: flex;
    align-items: center;
    background-color: #fff;
    text-decoration: none;
    border-radius: 5px;
    padding: 24px;
    transition: 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
