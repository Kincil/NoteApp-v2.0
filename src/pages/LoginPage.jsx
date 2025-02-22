import PropTypes from 'prop-types';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layout/AuthLayout';

const LoginPage = ({ loginSuccess }) => {
  return (
    <AuthLayout title="login" type="login">
      <FormLogin loginSuccess={loginSuccess} />
    </AuthLayout>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
