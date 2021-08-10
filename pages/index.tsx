import { Container } from '../components/container';
import { Grid } from '../components/grid';
import { EmployeeBadge } from '../components/employeeBadge';
import { PageHeader } from '../components/pageHeader';
import { Title } from '../components/title';
import { useStore } from '../stores/rootStore';
import { EmployeeType } from '../stores/employeeStore';

const Home = () => {
  const { employeeStore } = useStore();
  return (
    <>
      <PageHeader title="Home" />
      <Container>
        <Title>Employees</Title>
        <Grid>
          <EmployeeBadge
            id="fgte-regr-ghjg-dfdg"
            name="Cosmo Kramer"
            email="kman@petermanbustours.com"
            image="images/kramer.png"
            phone="555-FILK"
            position="Proctology"
          />
          <EmployeeBadge
            id="gher-dfhg-hjds-ghjj"
            name="George Costanza"
            email="art@vandelayindustries.com"
            image="images/george.png"
            phone="615-6423"
            position="Marine Biologist"
          />
          <EmployeeBadge
            id="edwf-ftge-vhjm-sdhl"
            name="Elaine Benes"
            email="kman@petermanbustours.com"
            image="images/elaine.png"
            phone="615-7479"
            position="Pendant Publishing"
          />
        </Grid>
      </Container>
      <Container>
        <Title>Employees</Title>
        <Grid>
          {employeeStore.employees.map((employee: EmployeeType) => (
            <EmployeeBadge
              id={employee.id}
              name={employee.name}
              email={employee.email}
              image={employee.image}
              phone={employee.phone}
              position={employee.position}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
