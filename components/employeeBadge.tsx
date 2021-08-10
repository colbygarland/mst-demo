import Link from 'next/link';

interface EmployeeBadgeProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  image: string;
}

export const EmployeeBadge = (props: EmployeeBadgeProps) => {
  return (
    <div className="shadow xl:w-96 rounded-md">
      <div className="bg-indigo-600 rounded-t-md cursor-pointer">
        <Link href={`employees/${props.id}`}>
          <img src={props.image} alt={props.name} className="m-auto h-64" />
        </Link>
      </div>
      <div className="p-6">
        <p className="text-black font-bold text-2xl mb-4">
          <Link href={`employees/${props.id}`}>{props.name}</Link>
        </p>
        <p className="text-gray-600">Email: {props.email}</p>
        <p className="text-gray-600">Phone: {props.phone}</p>
        <p className="text-gray-600">Position: {props.position}</p>
      </div>
    </div>
  );
};
