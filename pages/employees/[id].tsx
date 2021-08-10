import { useRouter } from 'next/router';
import { Container } from '../../components/container';
import { PageHeader } from '../../components/pageHeader';
import { Title } from '../../components/title';
import { useStore } from '../../stores/rootStore';

const Employee = () => {
  const router = useRouter();
  const { id } = router.query;
  const { employeeStore } = useStore();
  const employee = employeeStore.getEmployeeById(id);

  if (employee === null) {
    return (
      <>
        <div>Employee does not exist</div>
      </>
    );
  }
  return (
    <>
      <PageHeader title={employee.name} />
      <Container>
        <div className="lg:flex">
          <div className="mb-10 lg:mb-0 lg:mr-10">
            <div className="bg-indigo-600 lg:w-96 rounded shadow">
              <img
                src={employee.image}
                alt={employee.name}
                className="m-auto"
              />
            </div>
          </div>
          <div className="">
            <Title>{employee.name}</Title>
            <p className="text-gray-600 mb-2">
              <span className="font-bold text-black">Email: </span>
              {employee.email}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold text-black">Phone: </span>
              {employee.phone}
            </p>
            <p className="text-gray-600 mb-10">
              <span className="font-bold text-black">Position: </span>
              {employee.position}
            </p>
            <p className="leading-relaxed">{employee.bio}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Employee;
