import styled, { css } from 'styled-components/native';

export const List = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 80,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
}))`
  width: 100%;
`;

const cardStatusVariant = {
  PREPARING: css`background: #f6a609;`,
  DONE: css`background: #2ac769;`,
};

const cardTextStatusVariant = {
  PREPARING: css`color: #fff;`,
  DONE: css`color: #fff;`,
};

export const Card = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
  elevation: 0.6;
  border-radius: 5px;
  background: #fff;

  ${(props) => cardStatusVariant[props.status] || null};
`;

export const TableNumber = styled.Text`
  color: #0a100d;
  font-size: 18px;
  font-weight: bold;

  ${(props) => cardTextStatusVariant[props.status] || null};
`;

export const Status = styled.Text`
  color: #0a100d;
  font-size: 16px;
  font-weight: bold;

  ${(props) => cardTextStatusVariant[props.status] || null};
`;
