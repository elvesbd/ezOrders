import React, { useState } from 'react';
import { Modal as RNModal, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { 
  Container, Header, Logo, Form, FormGroup, Label, Input, Button 
} from './styles';

import logo from '../../images/logo.png';

export default function Modal({ visible, onClose }) {
  const [table, setTable] = useState(null);
  const [order, setOrder] = useState(null);

  function handleSubmit() {
    if (!table || !order) {
      Alert.alert('Eroo!', 'Preencha todos os campos.');
      return;
    }

    fetch('http://192.168.0.111:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({ table, description: order }),
    }).then((resp) => {
      if (resp.ok) {
        Alert.alert('Pedido cadastrado com sucesso!');
        onClose();
      } else {
        Alert.alert('Erro', 'Ocorreu erro no cadastro tente novamente');
      };
    }).catch(() => Alert.alert('Erro', 'Falha na conexão com servidor!'));
  };

  return (
    <RNModal
      visible={visible}
      transparent={false}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Container>
        <Header>
          <Logo source={logo} resizeMode="contain"/>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="ios-close" size={38} color="#0a100d"/>
          </TouchableOpacity>
        </Header>

        <Form>
          <FormGroup>
            <Label>Número da mesa</Label>
            <Input placeholder="Número da mesa" onChangeText={setTable}/>
          </FormGroup>

          <FormGroup>
            <Label>Pedido</Label>
            <Input 
              placeholder="Items do pedido" 
              multiline 
              textAlignVertical="top" 
              onChangeText={setOrder}
            />
          </FormGroup>

          <Button onPress={handleSubmit}>
            <Button.Label>Cadastrar pedido</Button.Label>
          </Button>
        </Form>
      </Container>
    </RNModal>
  );
}