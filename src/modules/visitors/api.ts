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

export const GetVisitorsByDate = async (day?: Date) => {
  try {
    if (day) {
      const { data } = await api.get<IListVisitorData[]>(
        `/visitors/filterPerDay/2024-05-28T03:00:00.000Z`
      );
      return data;
    }

    return [];
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
