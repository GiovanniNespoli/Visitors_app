interface ICreateVisitorData {
  name: string;
  phone: string;
  email: string;
}

interface IChurchData {
  id: number;
  label: string;
  number: number;
  createdAt: Date;
  updatedAt: Date;
}

interface IListVisitorData {
  id: number;
  name: string;
  church: string;
  observation: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IAllVisitorsData {
  visitors: IListVisitorData[];
  churchs: IChurchData[];
}

interface IFlatListVisitorData {
  id: number;
  index: number;
  name: string;
  church: string;
  observation: string;
  phone?: string;
  data: IListVisitorData[];
}

export {
  ICreateVisitorData,
  IListVisitorData,
  IFlatListVisitorData,
  IAllVisitorsData,
  IChurchData,
};
