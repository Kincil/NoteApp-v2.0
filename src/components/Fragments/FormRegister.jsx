import { useNavigate } from 'react-router';
import useInput from '../../hooks/useInput';
import { register } from '../../utils/network-data';
import Button from '../Elements/Button/Button';
import Input from '../Elements/Input/Input';

const FormRegister = () => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();

  const onRegisterHandler = async (event) => {
    event.preventDefault();

    const { error } = await register({
      name,
      email,
      password,
    });

    if (!error) navigate('/');
  };

  return (
    <form action="" onSubmit={onRegisterHandler}>
      <Input type="text" placeholder="Username" onChange={onNameChange} value={name} styling="auth-layout__input" id="name" />
      <Input type="email" placeholder="Email" onChange={onEmailChange} value={email} styling="auth-layout__input" id="email" />
      <Input type="password" placeholder="Password" onChange={onPasswordChange} value={password} styling="auth-layout__input" id="password" />
      <Button styling="auth-layout__button">Register →</Button>
    </form>
  );
};

export default FormRegister;
