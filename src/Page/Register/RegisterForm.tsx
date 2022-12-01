import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import { useTypedDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Box, Input } from "../../commonStyle/Common.styled";
import { fethcRegisterUser } from "../../redux/auth/authOperations";
import { FormContact, Eror } from "./Register.styled";
import { IValue } from "./Types";

const validationSchema = Yup.object()
  .shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  })
  .required();

const initialValue: IValue = { name: "", email: "", password: "" };

const RegisterForm: React.FC<{}> = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IValue>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValue,
  });

  const submitFunc: SubmitHandler<IValue> = (user) => {
    console.log(user);

    if (user) {
      dispatch(fethcRegisterUser(user));
      reset();
      navigate("/contacts", { replace: true });
    }
  };

  return (
    <FormContact onSubmit={handleSubmit(submitFunc)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gridGap="25px"
      >
        <Input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: {
              value: true,
              message: "Required field, pleas enter field",
            },
          })}
        />
        {errors?.name && <Eror>{errors.name.message || "Error"}</Eror>}

        <Input
          type="tel"
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
          type="tel"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "Required field, pleas enter field",
            },
          })}
        />
        {errors?.password && <Eror>{errors.password.message || "Error"}</Eror>}

        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </Box>
    </FormContact>
  );
};
export { RegisterForm };
