import Content from './Components/Content';
import Hero from './Components/Hero';
import CreateForm from './Components/CreateForm';
import EditForm from './Components/EditForm';
import './Scss/style.css'

function App() {
  return (
    <div className="App">
      <header>
        <Hero />
      </header>
      <main>
        <CreateForm />
        <EditForm />
        <Content />
      </main>
    </div>
  );
}

export default App;