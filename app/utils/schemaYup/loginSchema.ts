import * as Yup from 'yup';

const validationSchema = Yup.object().shape({  
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(20, 'La contraseña no debe exceder los 20 caracteres'),

  email: Yup.string()
    .required('El correo electrónico es obligatorio')
    .email('Debe ser un correo electrónico válido'),
});

export default validationSchema;
