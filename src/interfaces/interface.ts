interface IUser {
  userName: string;
  password: string;
  token?: string;
  id?: number;
}
interface ITask {
  id?: number;
  title: string;
  description: string;
  status: string;
  userId: number;
}
export { IUser, ITask };
