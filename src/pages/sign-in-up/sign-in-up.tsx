import { Button } from "@material-ui/core";
import {
  StyledContainer,
  StyledSection,
  Wallpaper,
  RegisterLayout,
} from "./sign-in-up.styles";

import { useState } from "react";
import { Input } from "../../components/input/input";
import { Form, Formik } from "formik";
import { LoginValidation, RegisterValidation } from "./_validation-schema";
import logo from "../../assets/icon-logo.png";
import { useHistory } from "react-router-dom";

const REGISTER_INITIAL_VALUES = {
  email: "",
  name: "",
  surname: "",
  birthDate: "",
  gender: "",
  password: "",
  passwordConfirm: "",
};
const LOGIN_INITIAL_VALUES = { email: "", password: "" };

export default function SignInUp() {
  const history = useHistory();
  const [isRegister, setIsRegister] = useState<boolean>();
  const handleLogin = (login: { email: string; password: string }) => {
    localStorage.setItem("user", login.email);
    history.push("home");
  };
  return (
    <StyledContainer>
      <Wallpaper isRegister={isRegister}>
        <div className="center">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </Wallpaper>

      <StyledSection isRegister={isRegister}>
        <Formik
          onSubmit={(values) => console.log(values)}
          initialValues={REGISTER_INITIAL_VALUES}
          validationSchema={RegisterValidation}
        >
          <Form>
            <h1>Cadastro</h1>
            <RegisterLayout>
              <Input name="email" className="full" label="Email" />
              <Input name="name" label="Nome" />
              <Input name="surname" label="Sobrenome" />
              <Input name="birthDate" label="Data de Nascimento" />
              <Input name="gender" label="Sexo" select>
                <option value={1}>Masculino</option>
                <option value={2}>Feminino</option>
                <option value={3}>Outros</option>
              </Input>
              <Input
                name="password"
                className="full"
                label="Senha"
                type="password"
              />
              <Input
                name="passwordConfirm"
                className="full"
                label="Confirmar Senha"
                type="password"
              />
            </RegisterLayout>
            <div className="buttons-container">
              <Button color="primary" onClick={() => setIsRegister(false)}>
                Voltar
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Cadastrar
              </Button>
            </div>
          </Form>
        </Formik>
      </StyledSection>

      <StyledSection isRegister={isRegister}>
        <Formik
          onSubmit={(values) => handleLogin(values)}
          initialValues={LOGIN_INITIAL_VALUES}
          validationSchema={LoginValidation}
        >
          <Form>
            <h1>Login</h1>
            <div className="inputs-size">
              <Input name="email" label="Email" />
              <Input name="password" label="Senha" type="password" />
            </div>
            <div className="buttons-container">
              <Button color="primary" onClick={() => setIsRegister(true)}>
                Criar conta
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Login
              </Button>
            </div>
          </Form>
        </Formik>
      </StyledSection>
    </StyledContainer>
  );
}
