import * as Yup from 'yup'
import { ROLES } from '../constants/roles'

export const userValidationSchema = Yup.object().shape(
    {
        name: Yup.string().required('Nome é obrigatório.'),
        email: Yup.string().email().required('E-mail é obrigatório.'),
        telefone: Yup.string().required('Telefone é obrigatório.'),
        role: Yup.string().required("Cargo é obrigatório.").oneOf(ROLES, "Cargo não é válido."),
    }
)