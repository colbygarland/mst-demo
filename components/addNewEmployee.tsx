import { useState } from 'react';
import { EmployeeType } from '../stores/employeeStore';
import { useStore } from '../stores/rootStore';
import { generateId } from '../lib/generateId';

export const AddNewEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [bio, setBio] = useState('');

  const { employeeStore } = useStore();

  function saveEmployee() {
    const id = generateId();
    const employee: EmployeeType = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      position: position,
      bio: bio,
    };
    employeeStore.add(employee);
    setName('');
    setEmail('');
    setPhone('');
    setPosition('');
    setBio('');
  }

  return (
    <div className="max-w-md">
      <input
        type="text"
        placeholder="Enter name"
        className="input-field"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter email"
        className="input-field"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter phone"
        className="input-field"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter position"
        className="input-field"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter bio"
        className="input-field"
        onChange={(event) => {
          setBio(event.target.value);
        }}
      />
      <button
        onClick={saveEmployee}
        className="mt-4 px-3 py-2 text-white bg-indigo-600 rounded shadow"
      >
        Save Employee
      </button>
    </div>
  );
};
