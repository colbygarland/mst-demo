import { Container } from '../components/container';
import { PageHeader } from '../components/pageHeader';
import { Title } from '../components/title';
import { AddNewEmployee } from '../components/addNewEmployee';
import { ManuallyDisplay } from '../components/manuallyDisplay';
import { MapViaMST } from '../components/mapViaMST';
import { Observer } from '../components/observer';
import { Quote } from '../components/quote';
import { Footer } from '../components/footer';
import { Snapshot } from '../components/snapshot';
import { Autorun } from '../components/autorun';

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
      <Container>
        <Title>Async Actions Using Generators</Title>
        <Quote />
      </Container>
      <Container>
        <Title>Snapshots</Title>
        <Snapshot />
      </Container>
      <Container>
        <Title>Autorun</Title>
        <Autorun />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
