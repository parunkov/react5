import { Product } from './components/Prouct';
import { useProducts } from './hooks/products';

function App() {
  const { products, error, loading } = useProducts();

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
