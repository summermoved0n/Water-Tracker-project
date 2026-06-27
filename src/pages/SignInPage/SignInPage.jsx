import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/authSelectors';
import {
  StyledBackgroundWrap,
  StyledErrorMessage,
} from '../SignInPage/SignInPage.styled';
import { AuthForm } from '../../components/AuthForm';
import { SignupContainer } from '../SignUpPage/SignUpPage.styled';
import { useEffect } from 'react';
import { clearAuthError } from '../../redux/auth/authSlice';

const SignInPage = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  return (
    <SignupContainer>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <AuthForm />
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </SignupContainer>
  );
};

export default SignInPage;
