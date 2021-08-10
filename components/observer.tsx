import { Grid } from './grid';
import { EmployeeBadge } from './employeeBadge';
import { useStore } from '../stores/rootStore';
import { EmployeeType } from '../stores/employeeStore';
import { observer } from 'mobx-react-lite';

export const Observer = observer(() => {
  const { employeeStore } = useStore();
  return (
    <Grid>
      {employeeStore.employees.length === 0 && (
        <div className="bg-red-100 p-6 rounded shadow">
          <p className="text-red-800">
            No employees left! Go find some new hires!
            <br />
            <strong>
              NOTE that the above employees are still on the screen 😱
            </strong>
          </p>
        </div>
      )}
      {employeeStore.employees.map((employee: EmployeeType) => (
        <EmployeeBadge
          key={employee.id}
          id={employee.id}
          name={employee.name}
          email={employee.email}
          image={employee.image}
          phone={employee.phone}
          position={employee.position}
        />
      ))}
    </Grid>
  );
});
