import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import { login } from '../../utils/network-data';
import Button from '../Elements/Button/Button';
import Input from '../Elements/Input/Input';

const FormLogin = ({ loginSuccess }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLoginHandler = async (event) => {
    event.preventDefault();
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <form action="" onSubmit={onLoginHandler}>
      <Input type="email" placeholder="Email" onChange={onEmailChange} value={email} styling="auth-layout__input" id="email" />
      <Input type="password" placeholder="Password" onChange={onPasswordChange} value={password} styling="auth-layout__input" id="password" />
      <Button styling="auth-layout__button">Login →</Button>
    </form>
  );
};

FormLogin.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default FormLogin;
