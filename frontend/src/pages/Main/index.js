import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';

import 'react-tippy/dist/tippy.css'
export default function Main() {
  return (
    <Container>
      <div id="container">
        <Header />
      </div>
    </Container>
  );
}
