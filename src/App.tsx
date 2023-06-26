import React from 'react';
import { Product } from './components/Prouct';
import { products } from './data/products';
console.log(products);

function App() {
  return(
    <div className='container mx-auto max-w-2xl pt-5'>
      <Product />
    </div>
  )
}

export default App;

  // const [count, setCount] = useState(0);

  // return e('div', {className: 'container'}, [
  //   e('h1', {className: 'font-bold', key: 1}, `${count}`),
  //   e('button', {
  //     className: 'py-2 px-4 border', 
  //     key: 2,
  //     onClick: () => setCount(count + 1),      
  //   }, 'Click Me!')
  // ]);
