import { Container } from '../components/container';
import { PageHeader } from '../components/pageHeader';
import { Title } from '../components/title';
import { AddNewEmployee } from '../components/addNewEmployee';
import { ManuallyDisplay } from '../components/manuallyDisplay';
import { MapViaMST } from '../components/mapViaMST';
import { Observer } from '../components/observer';
import { EmployeeCount } from '../components/employeeCount';
import { EmployeePositions } from '../components/employeePositions';

const Home = () => {
  return (
    <div className="pb-32">
      <PageHeader title="Home" />
      <Container>
        <Title>Manually Displaying 🤮</Title>
        <ManuallyDisplay />
      </Container>
      <Container>
        <Title>Mapping Via MST 🔥 (NO OBSERVING)</Title>
        <MapViaMST />
      </Container>
      <Container>
        <Title>Mapping Via MST 🔥 (OBSERVING)</Title>
        <Observer />
      </Container>
      <Container>
        <Title>Adding a New Employee</Title>
        <AddNewEmployee />
      </Container>

      <footer className="bg-indigo-600 text-white fixed bottom-0 w-full shadow">
        <Container>
          <EmployeeCount />
          <EmployeePositions />
        </Container>
      </footer>
    </div>
  );
};

export default Home;
