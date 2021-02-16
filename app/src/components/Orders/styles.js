import styled, { css } from 'styled-components/native';

export const List = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingTop: 8,
    paddingBottom: 120,
    paddingHorizontal: 16,
  },
}))`
  width: 100%;
`;

const cardStatusVariants = {
  PREPARING: css`
    background: #f6a609;
  `,
  DONE: css`
    background: #2ac769;
  `,
};

const cardTextStatusVariants = {
  PREPARING: css`
    color: #fff;
  `,
  DONE: css`
    color: #fff;
  `,
};

export const Card = styled.View`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  height: 56px;
  margin-bottom: 16px;
  padding: 0 16px;
  justify-content: space-between;
  width: 100%;

  ${({ status }) => cardStatusVariants[status] || null};
`;

export const TableNumber = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;

  ${({ status }) => cardTextStatusVariants[status] || null};
`;

export const Status = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;

  ${({ status }) => cardTextStatusVariants[status] || null};
`;
