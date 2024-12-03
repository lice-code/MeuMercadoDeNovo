
import './App.css';
import Componentes from './pages/Componentes';
import NovoComponentes from './pages/NovoComponentes';
import Login from './pages/Login';





function App() {
  return (
    <div className="App">
      {/* CSS com module*/}
      <NovoComponentes />

      {/* CSS com componente */}
      <Componentes />


     <Login />

    </div>
  );
}

export default App;
