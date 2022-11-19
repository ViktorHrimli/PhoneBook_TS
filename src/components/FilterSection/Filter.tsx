import { ChangeEvent } from "react";
import { filterContact } from "../../redux/contacts/filterSlice";
import { useAppSelector } from "../../hook";
import { useTypedDispatch } from "../../redux/store";
import { Input } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useTypedDispatch();
  const valueFilter = useAppSelector((state) => state.filterContact);

  const handlechange = (query: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterContact(query.target.value.toLowerCase().trim()));
  };

  return (
    <Input
      type="text"
      value={valueFilter}
      onChange={handlechange}
      placeholder="Filter Contacts"
    />
  );
};
