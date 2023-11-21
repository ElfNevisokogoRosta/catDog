interface IUser {
  userName: string;
  password: string;
  token?: string;
  id?: number;
}
interface ITask {
  id?: number;
  title: string;
  dis: string;
  owner: number;
}
export { IUser, ITask };
