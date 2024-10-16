import React from 'react';
import InputField from './InputField';
import RegisterButton from './RegisterButton';

interface RegisterFormProps {
  name: string;
  password: string;
  age: number;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setAge: (age: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ name, password, age, setName, setPassword, setAge, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} className="p-6 rounded shadow-md w-full max-w-md bg-gray-800">
      <InputField type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField type="number" placeholder="Age" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <RegisterButton ButtonText="Register"/>
    </form>
  </div>
);

export default RegisterForm;
