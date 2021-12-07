import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Album } from './paginas/album';
import { AuthProvider } from './context/auth';
import { Donadores } from './paginas/donadores';
import { Footer } from './componentes/Footer';
//import { FormInstrumentos } from './componentes/FormInstrumentos';
import { FormInstrumentos } from './componentes/FormInstrumentos';
import { Formulario } from './componentes/Formulario';
import { Header } from './componentes/Header';
import { Home } from './paginas/home';
import { Instituciones } from './paginas/instituciones';
import React from 'react';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='donadores' element={<Donadores />} />
        <Route path='instituciones' element={<Instituciones />} />
        <Route path='album' element={<Album />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/instrumentos' element={<FormInstrumentos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
