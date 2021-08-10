import { Grid } from './grid';
import { EmployeeBadge } from './employeeBadge';
import { useStore } from '../stores/rootStore';
import { EmployeeType } from '../stores/employeeStore';

export const MapViaMST = () => {
  const { employeeStore } = useStore();
  return (
    <Grid>
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
};
