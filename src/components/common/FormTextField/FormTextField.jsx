import { useField } from 'formik';
import {
  ErrorMessage,
  FormInput,
  FormInputContainer,
} from './FormTextField.styled';
import PropTypes from 'prop-types';

export const FormTextField = ({ isFormSubmitted, ...props }) => {
  const [field, meta] = useField(props);

  const invalid = isFormSubmitted && meta.error;
  const valid = isFormSubmitted && !meta.error;

  return (
    <>
      <FormInputContainer>
        <FormInput {...field} {...props} $invalid={invalid} $valid={valid} />(
        <>
          {/* <FormIconContainer>
              <Icon
                iconName={'icon-cross'}
                stroke={'#F43F5E'}
                fill={'#F43F5E'}
              />
                      </FormIconContainer> */}

          <ErrorMessage>{meta.error}</ErrorMessage>
        </>
        {/* <FormIconContainer>
          <Icon iconName={'icon-check'} stroke={'#00C3AD'} fill={'#00C3AD'} />
        </FormIconContainer> */}
        {/* ) (<SuccessMessage>{successMessage}</SuccessMessage>) */}
      </FormInputContainer>
    </>
  );
};

FormTextField.propTypes = {
  successMessage: PropTypes.string,
  isFormSubmitted: PropTypes.bool.isRequired,
};
