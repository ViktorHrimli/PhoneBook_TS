type Contact = {
  id: string;
  name: string;
  number: string;
};

type StateContact = {
  contact: {
    items: Contact[];
    isLoading: boolean;
    error: null | string;
  };
};

type FetchContact = {
  id: string;
  name: string;
  number: string;
};

type AddTypeContact = {
  name: string;
  number: string;
};

export type { Contact, StateContact, FetchContact, AddTypeContact };
