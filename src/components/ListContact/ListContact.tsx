import { Box } from "../../commonStyle/Common.styled";
import { ItemList, ItemListParagr, ButtonIcon } from "./ListContact.styled";
import { useAppSelector } from "../../hook";
import { useTypedDispatch } from "../../redux/store";
import { fetchRemoveContact } from "../../redux/contacts/operations";
import { IItem } from "./Types";

export const Renderlist: React.FC<{}> = (): any => {
  const dispatch = useTypedDispatch();
  const handleClickRemove = (id: string) => {
    if (id) {
      dispatch(fetchRemoveContact(id));
    }
  };

  const selectorContact = useAppSelector(
    (state) => state.contacts.contact.items
  );
  const selectorFilter = useAppSelector((state) => state.filterContact);

  const renderContact = selectorContact.filter((item: { name: string }) =>
    item.name.toLowerCase().includes(selectorFilter)
  );

  return (
    renderContact.length > 0 &&
    renderContact.map((item: IItem) => {
      return (
        <ItemList key={item.id}>
          <Box
            display="flex"
            alignItems="center"
            gridGap="15px"
            justifyContent="flex-end"
          >
            <Box display="flex" alignItems="center" gridGap="15px">
              <ItemListParagr>{item.name.toUpperCase()}</ItemListParagr>
              <ItemListParagr>{item.number}</ItemListParagr>
            </Box>
            <ButtonIcon onClick={() => handleClickRemove(item.id)}></ButtonIcon>
          </Box>
        </ItemList>
      );
    })
  );
};
