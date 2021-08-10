import { autorun } from 'mobx';
import { useStore } from '../stores/rootStore';

export const Autorun = () => {
  const { employeeStore } = useStore();
  autorun(() => {
    console.log(
      `We have ${employeeStore.employeeCount} employees working for us!`
    );
  });
  return (
    <p>
      Every time the employees are updated, whatever we have defined in our
      `autorun` will, well, auto run. 🔥
    </p>
  );
};
