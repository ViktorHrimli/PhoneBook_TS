import { useTypedDispatch } from "../../redux/store";
import { Formik, ErrorMessage, Form } from "formik";
import Notiflix from "notiflix";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { Box, Input } from "../../commonStyle/Common.styled";
import { Eror } from "./Form.styled";
import { fetchAddContacts } from "../../redux/contacts/operations";
import { useAppSelector } from "../../hook";
import { IValue } from "./Types";
import "yup-phone";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().phone("ua").required(),
});

const initialValue: IValue = { name: "", number: "" };

export const Formes: React.FC<{}> = () => {
  const dispatch = useTypedDispatch();
  const contact = useAppSelector((state) => state.contacts.contact.items);

  const hendleSubmit = (values: IValue, { resetForm }: any) => {
    addContacsFormSubmit(values);
    resetForm();
  };

  const addContacsFormSubmit = (value: IValue) => {
    if (contact.find((item: { name: string }) => item.name === value.name)) {
      return Notiflix.Notify.warning(`${value.name} is already is contacts`);
    } else {
      dispatch(fetchAddContacts(value));
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={hendleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gridGap="25px"
        >
          <Input type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" render={(msg) => <Eror>{msg}</Eror>} />

          <Input type="tel" name="number" placeholder="Telephone" />
          <ErrorMessage name="number" render={(msg) => <Eror>{msg}</Eror>} />

          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Add Contact
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};
