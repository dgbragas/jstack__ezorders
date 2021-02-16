import styled from 'styled-components';

import StyledButton from '../Button';

export const Container = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  padding: 0 16px;
  width: 100%;
`;

export const Logo = styled.Image`
  width: 135px;
`;

export const Form = styled.View`
  margin-top: 56px;
  padding: 0 16px;
`;

export const FormGroup = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #0a100d;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  height: ${({ multiline }) => (multiline ? '124px' : '48px')};
  font-size: 16px;
  margin-bottom: 8px;
  padding: ${({ multiline }) => (multiline ? '16px' : '0 16px')};
`;

export const Button = styled(StyledButton)`
  margin-top: 16px;
`;
