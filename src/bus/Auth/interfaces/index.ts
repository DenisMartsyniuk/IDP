export interface IAuthContextProps {
  token: string;
  onAddToken: (token: string) => void;
}

export interface IFacebookResponse {
  id: string;
  name: string;
  userID: string;
  status: string;
  expiresIn: number;
  accessToken: string;
  graphDomain: string;
  signedRequest: string;
  data_access_expiration_time: number;
}
