import { useEffect, useState } from 'react';
import { Product } from './components/Prouct';
// import { products } from './data/products';
import axios, {AxiosError} from 'axios';
import { IProduct } from './models';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProucts() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProucts();
  }, []);

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <p className='text-center'>Loading...</p>}
      {error && <p className='text-center text-red-600'>{error}</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
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
