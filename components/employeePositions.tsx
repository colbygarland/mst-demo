import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/rootStore';

export const EmployeePositions = observer(() => {
  const { employeeStore } = useStore();
  return (
    <p className="">Employee positions: {employeeStore.employeePositions}</p>
  );
});
