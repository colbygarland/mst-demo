import { getSnapshot } from 'mobx-state-tree';
import { useStore } from '../stores/rootStore';

export const Snapshot = () => {
  const { employeeStore } = useStore();

  function getSnap() {
    const snap = getSnapshot(employeeStore.employees);
    const formattedSnap = JSON.stringify(snap, null, 2);
    console.dir(formattedSnap);
    alert(formattedSnap);
  }

  return (
    <>
      <p>
        Snapshots are the immutable serialization, in plain objects, of a tree
        at a specific point in time.
      </p>
      <button
        onClick={getSnap}
        className="mt-4 px-3 py-2 text-white bg-indigo-600 rounded shadow"
      >
        Get a Snapshot of Employees
      </button>
    </>
  );
};
