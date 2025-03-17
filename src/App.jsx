import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
