import React, { Suspense } from 'react';
import Content from './Components/Content';
import Greet from './Components/Greet';
import Hero from './Components/Hero';
import './Scss/style.css'

const CreateForm = React.lazy(() => import('./Components/CreateForm'));
const EditForm = React.lazy(() => import('./Components/EditForm'));
const LimitForm = React.lazy(() => import('./Components/LimitForm'));

function App() {
  return (
    <div className="App">
      <header>
        <Hero />
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <CreateForm />
          <EditForm />
          <LimitForm />
        </Suspense>
        <Content />
        <Greet />
      </main>
    </div>
  );
}

export default App;