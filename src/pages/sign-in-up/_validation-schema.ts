import * as yup from "yup";

export const RegisterValidation = yup.object({
  email: yup.string().required("Campo obrigatório"),
  name: yup.string().required("Campo obrigatório"),
  surname: yup.string().required("Campo obrigatório"),
  birthDate: yup.string().required("Campo obrigatório"),
  gender: yup.number().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  passwordConfirm: yup.string().required("Campo obrigatório"),
});

export const LoginValidation = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});
