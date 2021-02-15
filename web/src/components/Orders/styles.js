import styled, { css } from 'styled-components';

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
};

export const Container = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;
  margin-top: 40px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h3 {
      font-size: 18px;
      font-weight: 500;
    }

    small {
      background: #ccc;
      border-radius: 4px;
      color: #fff;
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 8px;
    }
  }

  p {
    font-size: 14px;
  }

  select {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    height: 48px;
    margin-top: 8px;
    padding: 0 8px;
    width: 100%;
  }

  ${({ status }) => cardStatusVariants[status] || null}
`;
