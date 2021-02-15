import GlobalStyle from './styles/global';
import { Container } from './styles';

import Orders from './components/Orders';

import logoImg from './images/ezOrders-logo.svg';

const App = () => (
  <>
    <Container>
      <img src={logoImg} alt="ezOrders" />
      <Orders />
    </Container>
    <GlobalStyle />
  </>
);

export default App;
