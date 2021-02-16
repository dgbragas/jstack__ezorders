import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  align-items: center;
  background: #c52233;
  border-radius: 4px;
  height: 48px;
  justify-content: center;
  width: 100%;
`;

Button.Label = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export default Button;
