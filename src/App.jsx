import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className='h-screen my-8'>
      <ProjectsSidebar />
    </main>
  );
}

export default App;
