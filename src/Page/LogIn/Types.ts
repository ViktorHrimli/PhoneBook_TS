type InitialProps = {
  email: string;
  password: string;
};

interface ILocation {
  state: {
    from: {
      pathname: string;
    };
  };
}

export type { InitialProps, ILocation };
