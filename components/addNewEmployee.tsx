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
  const [photo, setPhoto] = useState('');

  const { employeeStore } = useStore();

  function autofillEmployee() {
    setName('Newman');
    setEmail('newman@uspostalservice.com');
    setPhone('615-3562');
    setPosition('Postman');
    setBio('Newman is the best');
    setPhoto('/images/newman.png');
  }

  function saveEmployee() {
    const id = generateId();
    const employee: EmployeeType = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      position: position,
      bio: bio,
      ...(photo !== '' && {
        image: photo,
      }),
    };
    employeeStore.add(employee);
    setName('');
    setEmail('');
    setPhone('');
    setPosition('');
    setBio('');
    setPhoto('');
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
        value={name}
      />
      <input
        type="text"
        placeholder="Enter email"
        className="input-field"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
      />
      <input
        type="text"
        placeholder="Enter phone"
        className="input-field"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
        value={phone}
      />
      <input
        type="text"
        placeholder="Enter position"
        className="input-field"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
        value={position}
      />
      <input
        type="text"
        placeholder="Enter bio"
        className="input-field"
        onChange={(event) => {
          setBio(event.target.value);
        }}
        value={bio}
      />
      <button
        onClick={saveEmployee}
        className="mt-4 px-3 py-2 text-white bg-indigo-600 rounded shadow"
      >
        Save Employee
      </button>
      <button
        onClick={autofillEmployee}
        className="mt-4 ml-6 px-3 py-2 text-indigo-600 border border-indigo-600 rounded shadow"
      >
        Autofill Employee
      </button>
    </div>
  );
};
