// import { array, string } from 'yup';

// const email = {
//   value: '',
//   schema: string().required().email(),

//   mapTo: {
//     completed: value => value > 15
//   },

//   rules: [
//     {
//       validateOn: ['blur'],

//       name: 'availability',

//       validate: async (value, { values, someshit }) => {
//         await checkIsFreeEmail(value);

//         return 'Email is not free smh';
//       }
//     }
//   ]
// };

// const password = {
//   value: '',
//   schema: string().required().min(6)
// };

// const permissions = {
//   value: [],
//   schema: array().min(1).required()
// };

// const $registrationForm = createForm({
//   schema: {
//     password,
//     permissions,
//     email: {
//       ...email,
//       schema: email.schema.label('Account email')
//     }
//   },

//   initialValues: {},

//   onSubmit: () => {
//     // some default shit
//   }
// });

// $registrationForm.submitted;
// $registrationForm.validating;

// const Register = ({}) => {
//   const isNotUnique = false; // external value
//   const emailCheckInProgress = false; // external value

//   const { email, password, permissions } = useForm($registrationForm, {
//     isValidating: emailCheckInProgress,
//     mapErrors: (values, errors) => ({
//       ...errors,
//       email: isNotUnique ? 'This is email is already taken' : errors.email
//     })
//   });

//   return (
//     <Form>
//       <Field.Input
//         is={email}
//         onBlur={() => {
//           checkEmail();
//         }}
//       />

//       <Field.Input is={password} />

//       <Field.Input is={permissions} />

//       <Button type='submit'>Submit</Button>
//     </Form>
//   );
// };

// export { Login };

let a;
export { a };
