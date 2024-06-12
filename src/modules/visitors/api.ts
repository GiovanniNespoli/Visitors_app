import { api } from "../../service/api";
import {
  ICreateVisitorData,
  IListVisitorData,
} from "./interfaces/IVisitorData";
import { formatISO } from "date-fns";

export const GetVisitors = async () => {
  try {
    const { data } = await api.get<IListVisitorData[]>("/visitors");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetVisitorsByDate = async (day: Date) => {
  try {
    if (isNaN(day.getTime())) {
      throw new RangeError("Invalid time value...");
    }

    const { data } = await api.get<IListVisitorData[]>(
      `/visitors/filterPerDay/${formatISO(day)}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const CreateVisitors = async ({
  name,
  email,
  phone,
}: ICreateVisitorData): Promise<ICreateVisitorData | undefined> => {
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
