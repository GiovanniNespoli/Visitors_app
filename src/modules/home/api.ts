import { err } from "react-native-svg";
import { api } from "../../service/api";

export const DeleteVisitor = async (id: number) => {
  try {
    await api.delete(`/visitors/${id}`);
  } catch (error) {
    console.log(err);
  }
};
