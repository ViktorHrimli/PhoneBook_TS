import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTypedDispatch } from "../../redux/store";
import Notiflix from "notiflix";
import { Button } from "@mui/material";
import { Box, Input } from "../../commonStyle/Common.styled";
import { Eror } from "./Form.styled";
import { fetchAddContacts } from "../../redux/contacts/operations";
import { useAppSelector } from "../../hook";
import { IValue } from "./Types";
import "yup-phone";

const validationSchema = Yup.object()
  .shape({
    name: Yup.string().required(),
    number: Yup.string().phone("ua").required(),
  })
  .required();

const initialValue: IValue = { name: "", number: "" };

export const Formes: React.FC<{}> = () => {
  const dispatch = useTypedDispatch();
  const contact = useAppSelector((state) => state.contacts.contact.items);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IValue>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValue,
  });

  const submitFunc: SubmitHandler<IValue> = (value) => {
    if (value) {
      if (contact.find((item) => item.name === value.name)) {
        return Notiflix.Notify.warning(`${value.name} is already is contacts`);
      } else {
        dispatch(fetchAddContacts(value));
        reset();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
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
          {...register("number", {
            required: {
              value: true,
              message: "Required field, pleas enter field",
            },
          })}
          placeholder="Telephone"
        />
        {errors?.number && <Eror>{errors.number.message || "Error"}</Eror>}

        <Button variant="contained" color="primary" size="small" type="submit">
          Add Contact
        </Button>
      </Box>
    </form>
  );
};
