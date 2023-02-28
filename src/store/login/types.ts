export type FetchTokenProps = {
  username: string;
  password: string;
};

export type FetchTokenResult = {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
};
