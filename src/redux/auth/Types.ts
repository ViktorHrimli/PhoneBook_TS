interface IUserValue {
  name: string;
  email: string;
}

type initialStateAuth = {
  user: IUserValue;
  token: string | null;
  isLoggedIn: boolean;
  isRefresh: boolean;
  error: string | null;
};

type StateSelector = {
  auth: initialStateAuth;
};

type LoginAuth = {
  token: string | null;
  user: User;
};

type LoginlogIn = {
  email: string;
  password: string;
};

type UserProps = {
  name: string;
  email: string;
  password: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

interface UserData extends UserProps {
  user: User;
  token: string;
}
export type {
  initialStateAuth,
  StateSelector,
  UserData,
  UserProps,
  LoginAuth,
  LoginlogIn,
};
