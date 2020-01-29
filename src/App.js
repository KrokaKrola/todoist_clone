import React from 'react';
import Header from './layout/Header';
import Container from './components/Container';
import Main from './layout/Main';
import Aside from './layout/Aside';

function App() {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: 44 }} flex justify="space-between">
        <Aside style={{ width: 266 }} />
        <Main />
      </Container>
    </>
  );
}

export default App;
