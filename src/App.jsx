import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
