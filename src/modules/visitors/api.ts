import { api } from "../../service/api";
import {
  ICreateVisitorData,
  IListVisitorData,
} from "./interfaces/IVisitorData";

export const GetVisitors = async () => {
  try {
    const { data } = await api.get<IListVisitorData[]>("/visitors");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateVisitors = async ({
  name,
  email,
  phone,
}: ICreateVisitorData) => {
  try {
    const { data } = await api.post<ICreateVisitorData>("/visitors", {
      name,
      email,
      phone,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
