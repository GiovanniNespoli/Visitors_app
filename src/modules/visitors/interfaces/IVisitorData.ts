interface ICreateVisitorData {
  name: string;
  phone: string;
  email: string;
}

interface IListVisitorData {
  id: number;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export { ICreateVisitorData, IListVisitorData };
