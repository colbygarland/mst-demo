import { Counter } from '../components/counter';

const Home = () => {
  return (
    <>
      <div className="p-10 bg-indigo-600 shadow mb-10">
        <h1 className="text-3xl text-white text-center">🔥 mobx-state-tree demo 🔥</h1>
      </div>
      <div className="p-10">
        <div className="max-w-md">
          <Counter />
        </div>
      </div>
    </>
  );
};

export default Home;
