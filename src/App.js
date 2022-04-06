import './App.scss';
import Container from './components/common/Container/Container';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Container>
        <div className="App__inner">
          <Header />
        </div>
      </Container>
    </div>
  );
}

export default App;
