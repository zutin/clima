import Card from '../components/Card';

function App() {

  return (
      <div className="bg-cover bg-cyan-200 h-screen flex items-center" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2014/08/09/15/45/sky-414199_960_720.jpg)`, height: '100vh' }}>
        <Card />
      </div>
  );
}

export default App;
