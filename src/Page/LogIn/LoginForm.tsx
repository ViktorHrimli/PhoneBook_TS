import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { Box, Input } from "../../commonStyle/Common.styled";
import { useTypedDispatch } from "../../redux/store";
import { fetchLogInUser } from "../../redux/auth/authOperations";
import { InitialProps } from "./Types";
import { FormContact, Eror } from "./LogIn.styled";
import { useForm, SubmitHandler } from "react-hook-form";

const validationSchema = Yup.object()
  .shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  })
  .required();

const initialValue: InitialProps = { email: "", password: "" };

const LoginForm: React.FC<{}> = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<InitialProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValue,
  });

  const hendleSubmit: SubmitHandler<InitialProps> = (user) => {
    if (user) {
      dispatch(fetchLogInUser(user));
      reset();
    }
  };
  return (
    <>
      <FormContact onSubmit={handleSubmit(hendleSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gridGap="25px"
        >
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Required field, pleas enter field",
              },
            })}
          />

          {errors?.email && <Eror>{errors.email.message || "Error"}</Eror>}

          <Input
            type="text"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Required field, pleas enter field",
              },
            })}
          />
          {errors?.password && (
            <Eror>{errors.password.message || "Error"}</Eror>
          )}

          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Box>
      </FormContact>
    </>
  );
};

export { LoginForm };
