import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/rootStore';
import { Container } from './container';
import { EmployeeCount } from './employeeCount';
import { EmployeePositions } from './employeePositions';

export const Footer = observer(() => {
  const { employeeStore } = useStore();
  const classes = `bg-indigo-600 text-white fixed bottom-0 w-full shadow ${
    employeeStore.computedValuesVisible ? 'z-10' : '-z-10 invisible'
  }`;
  return (
    <>
      <button
        className="fixed bottom-0 right-0 bg-indigo-600 text-white p-4 shadow rounded-md rounded-r-none rounded-bl-none"
        onClick={() => employeeStore.showComputedValues()}
      >
        Show Computed Values
      </button>
      <footer className={classes}>
        <div className="relative">
          <button
            onClick={() => employeeStore.hideComputedValues()}
            className="absolute top-4 right-4"
          >
            Hide Computed Values
          </button>
          <Container>
            <EmployeeCount />
            <EmployeePositions />
          </Container>
        </div>
      </footer>
    </>
  );
});
