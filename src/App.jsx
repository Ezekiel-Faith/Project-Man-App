import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <ProjectsSidebar />
    </main>
  );
}

export default App;
