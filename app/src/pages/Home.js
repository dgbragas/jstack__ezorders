import React, { useState } from 'react';

import { Container, Logo, NewOrderContainer } from '../styles';

import Button from '../components/Button';
import Modal from '../components/Modal';
import Orders from '../components/Orders';

import logoImg from '../images/logo.png';

export default function Home() {
  const [isModalOpeded, setIsModalOpened] = useState(true);

  function handleToggleModal() {
    setIsModalOpened(!isModalOpeded);
  }

  return (
    <Container>
      <Logo source={logoImg} resizeMode="contain" />

      <Orders />

      <NewOrderContainer>
        <Button onPress={handleToggleModal}>
          <Button.Label>Novo Pedido</Button.Label>
        </Button>
      </NewOrderContainer>

      <Modal visible={isModalOpeded} onClose={handleToggleModal} />
    </Container>
  );
}
