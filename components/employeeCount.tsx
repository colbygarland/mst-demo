import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/rootStore';

export const EmployeeCount = observer(() => {
  const { employeeStore } = useStore();
  return (
    <p className="text-2xl font-bold">
      Number of employees: {employeeStore.employeeCount}
    </p>
  );
});
