import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/authSelectors';
import {
  SignupContainer,
  StyledBackgroundWrap,
  StyledErrorMessage,
} from './SignUpPage.styled';
import { AuthForm } from '../../components/AuthForm';
import { useEffect } from 'react';
import { clearAuthError } from '../../redux/auth/authSlice';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  return (
    <SignupContainer>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <AuthForm isRegister />
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </SignupContainer>
  );
};

export default SignUpPage;
