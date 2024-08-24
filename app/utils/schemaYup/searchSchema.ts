import * as Yup from 'yup';

const validationSchema = Yup.object().shape({  
  search: Yup.string()
    .required('Debe ingresar un término de búsqueda')
});

export default validationSchema;
