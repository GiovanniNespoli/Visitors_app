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

interface IFlatListVisitorData {
  id: number;
  index: number;
  name: string;
  phone: string;
  email: string;
  data: IListVisitorData[];
}

export { ICreateVisitorData, IListVisitorData, IFlatListVisitorData };
