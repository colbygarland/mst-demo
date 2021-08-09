import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/rootStore';

export const Counter = observer(() => {
  const { demoStore } = useStore();
  return (
    <>
      <label className="font-bold text-lg mb-4 block uppercase">Value</label>
      <div className="flex">
        <button
          onClick={() => {
            demoStore.setCounterValue(demoStore.counterValue - 1);
          }}
          className="px-6 py-2 shadow bg-indigo-600 text-white font-bold"
        >
          -
        </button>
        <input
          onChange={(event) => {
            demoStore.setCounterValue(event.target.valueAsNumber);
          }}
          type="number"
          step="1"
          value={demoStore.counterValue}
          className="px-3 py-3 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <button
          onClick={() => {
            demoStore.setCounterValue(demoStore.counterValue + 1);
          }}
          className="px-6 py-2 shadow bg-indigo-600 text-white font-bold"
        >
          +
        </button>
      </div>
    </>
  );
});
