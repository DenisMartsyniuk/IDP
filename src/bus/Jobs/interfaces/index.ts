export interface IJobs {
  id: string;
  title: string;
  checked: boolean;
  description: string;
  company: {
    name: string;
  };
}
