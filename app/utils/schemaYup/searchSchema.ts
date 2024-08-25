import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  search: Yup.string()
    .required('Debe ingresar un término de búsqueda'),
  city: Yup.string()
    .required('Debe seleccionar una ciudad') // Mensaje de error si no se selecciona una ciudad
});

export default validationSchema;
