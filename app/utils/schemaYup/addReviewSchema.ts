import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('La frase es obligatoria')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(20, 'La contraseña no debe exceder los 20 caracteres'),

    comment: Yup.string()
        .required('El comentario es obligatorio'),

    rating: Yup.number()
        .required('El rating es obligatorio')
});

export default validationSchema;
