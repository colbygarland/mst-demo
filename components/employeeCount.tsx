import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/rootStore';

export const EmployeeCount = observer(() => {
  const { employeeStore } = useStore();
  return (
    <p className="text-3xl font-bold text-indigo-600">
      Number of employees: {employeeStore.employeeCount}
    </p>
  );
});
