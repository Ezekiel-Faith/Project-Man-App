import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-900 text-white text-3xl'>
        Tailwind CSS v3 is working! 🎉
      </div>
    </>
  );
}

export default App;
