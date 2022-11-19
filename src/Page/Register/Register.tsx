import * as Yup from "yup";
import { Button } from "@mui/material";
import { useTypedDispatch } from "../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import { Box, Input, Links, icons } from "../../commonStyle/Common.styled";
import { fethcRegisterUser } from "../../redux/auth/authOperations";
import { FormContact, Eror, ConteierRegister } from "./Register.styled";
import { IValue } from "./Types";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValue: IValue = { name: "", email: "", password: "" };

const RegisterUser = () => {
  const location = useLocation();
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { IconsExpand, IconsCheckBox, IconsStanby, IconsRecord } = icons;

  const hendleSubmit = (
    { name, email, password }: IValue,
    { resetForm }: any
  ) => {
    const user: IValue = {
      name,
      email,
      password,
    };
    dispatch(fethcRegisterUser(user));
    resetForm();
    navigate("/contacts", { replace: true });
  };

  return (
    <ConteierRegister>
      <IconsRecord />
      <Formik
        initialValues={initialValue}
        onSubmit={hendleSubmit}
        validationSchema={validationSchema}
      >
        <FormContact>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gridGap="25px"
          >
            <Input type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" render={(msg) => <Eror>{msg}</Eror>} />

            <Input type="tel" name="email" placeholder="Email" />
            <ErrorMessage name="email" render={(msg) => <Eror>{msg}</Eror>} />

            <Input type="tel" name="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              render={(msg) => <Eror>{msg}</Eror>}
            />

            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Box>
        </FormContact>
      </Formik>
      <Box
        display="flex"
        alignItems="flex-start"
        gridGap="20px"
        justifyContent="space-around"
        mt="auto"
        width="380px"
      >
        <Links to={location.state?.from ?? "/"}>
          <IconsExpand />
        </Links>
        <Links to={location.state?.from ?? "/"}>
          <IconsStanby />
        </Links>
        <Links to={location.state?.from ?? "/"}>
          <IconsCheckBox />
        </Links>
      </Box>
    </ConteierRegister>
  );
};
export default RegisterUser;
