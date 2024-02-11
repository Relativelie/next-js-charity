import { phoneRegex } from '@/lib/utils/regexConstants';
import * as yup from 'yup';

const requiredError = 'field is required';
export const schema = yup.object().shape({
  name: yup.string().required(`Name ${requiredError}`),
  email: yup
    .string()
    .required(`Email ${requiredError}`)
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required(`Phone number ${requiredError}`)
    .matches(phoneRegex, 'Please enter a valid phone number'),
});
