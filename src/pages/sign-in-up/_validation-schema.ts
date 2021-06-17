import * as yup from "yup";

export const RegisterValidation = yup.object({
  email: yup
    .string()
    .email("Deve ser preenchido com um email")
    .required("Campo obrigatório"),
  name: yup.string().required("Campo obrigatório"),
  surname: yup.string().required("Campo obrigatório"),
  birthDate: yup.string().required("Campo obrigatório"),
  gender: yup.number().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  passwordConfirm: yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "As duas senhas devem ser iguais."
    )
  })
});

export const LoginValidation = yup.object({
  email: yup
    .string()
    .email("Deve ser preenchido com um email")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});
