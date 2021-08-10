import { Container } from '../components/container';
import { PageHeader } from '../components/pageHeader';
import { Title } from '../components/title';
import { AddNewEmployee } from '../components/addNewEmployee';
import { ManuallyDisplay } from '../components/manuallyDisplay';
import { MapViaMST } from '../components/mapViaMST';
import { Observer } from '../components/observer';

const Home = () => {
  return (
    <>
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
      <footer className="h-10 bg-indigo-600"></footer>
    </>
  );
};

export default Home;
