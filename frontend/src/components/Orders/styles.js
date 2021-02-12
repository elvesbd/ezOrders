import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 42px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.6rem;

  @media (min-width: 658px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const cardStatusVariants = {
  PREPARING: css`
    background: #f6a609;
    color: #fff;

    header small {
      background: #fff;
      color: #0a100d;
    }

    select {
      border-color: #fff;
    }
  `,
  DONE: css`
    background: #2ac769;
    color: #fff;

    header small {
      background: #fff;
      color: #0a100d;
    }

    select {
      border-color: #fff;
    }
  `,
}

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 500;
      font-size: 18px;  
    }

    small {
      padding: 4px 8px;
      background: #ccc;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
    }
  }

  p {
    font-size: 14px;
    margin-top: 16px;
    font-weight: normal;
  }

  select {
    margin-top: 8px;
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #fff;
    padding: 0px 8px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23696969%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
  }

  ${({ status }) => cardStatusVariants[status] || null};
`;

