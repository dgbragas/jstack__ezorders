import React, { useState } from 'react';
import { Modal as RNModal, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Header,
  Logo,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from './styles';

import logoImg from '../../images/logo.png';

export default function Modal({ visible, onClose }) {
  const [table, setTable] = useState(null);
  const [order, setOrder] = useState(null);

  function handleSubmit() {
    if (!table || !order) {
      Alert.alert('Erro!', 'Preencha todos os campos.');
      return;
    }

    fetch('http://192.168.15.5:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ table, description: order }),
    })
      .then(response => {
        if (response.ok) {
          return [Alert.alert('Pedido cadastrado por sucesso!'), onClose()];
        }

        return Alert.alert(
          'Erro!',
          'Ocorreu um erro ao cadastrar o pedido, tente novamente!',
        );
      })
      .catch(() => Alert.alert('Erro!', 'Falha ao conectar com o servidor'));
  }

  return (
    <RNModal
      visible={visible}
      transparent={false}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Container>
        <Header>
          <Logo source={logoImg} resizeMode="contain" />
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="ios-close" size={32} color="#0a100d" />
          </TouchableOpacity>
        </Header>

        <Form>
          <FormGroup>
            <Label>Número da mesa</Label>
            <Input placeholder="Número da mesa" onChangeText={setTable} />
          </FormGroup>

          <FormGroup>
            <Label>Pedido</Label>
            <Input
              placeholder="Itens do pedido"
              multiline
              textAlignVertical="top"
              onChangeText={setOrder}
            />
          </FormGroup>

          <Button onPress={handleSubmit}>
            <Button.Label>Cadastrar Pedido</Button.Label>
          </Button>
        </Form>
      </Container>
    </RNModal>
  );
}
