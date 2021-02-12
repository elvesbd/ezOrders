import React, { useState } from 'react';

import { Container, Logo, NewOrderContainer } from './styles';

import Order from './components/Orders';
import Button from './components/Button';
import Modal from './components/Modal';

import logo from './images/logo.png';

export default function Home() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function handleToggleModal() {
    setIsModalOpened((prevState) => !prevState);
  };

  return (
    <Container>
      <Logo source={logo} resizeMode='contain'/>

      <Order />

      <NewOrderContainer>
        <Button onPress={handleToggleModal}>
          <Button.Label>Novo Pedido</Button.Label>
        </Button>
      </NewOrderContainer>

      <Modal 
        visible={isModalOpened}
        onClose={handleToggleModal}
      />
    </Container>
  );
}