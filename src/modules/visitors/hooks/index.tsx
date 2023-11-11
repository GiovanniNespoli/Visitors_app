import React, { createContext, useCallback, useContext, useState } from "react";
import {
  ICreateVisitorData,
  IListVisitorData,
} from "../interfaces/IVisitorData";
import { api } from "../../../service/api";
import Toast from "react-native-toast-message";

interface VisitorContextData {
  createVisitor(visitorData: ICreateVisitorData): void;
  removeVisitor(id: number): void;
  list(): void;
  listVisitor: IListVisitorData[];
}

const VisitorContext = createContext<VisitorContextData>(
  {} as VisitorContextData
);

const VisitorProvider: React.FC = ({ children }) => {
  const [listVisitor, setListVisitor] = useState<IListVisitorData[]>(
    {} as IListVisitorData[]
  );

  const createVisitor = useCallback(
    async ({ email, name, phone }: ICreateVisitorData) => {
      await api
        .post("/visitors", {
          email,
          name,
          phone,
        })
        .then((promise) => {
          Toast.show({
            type: "sucess",
            text1: "Erro",
            text2: "Erro ao realizar o cadastro ❌",
          });
          return promise;
        })
        .catch((err) => {
          Toast.show({
            type: "error",
            text1: "Erro",
            text2: "Erro ao realizar o cadastro ❌",
          });
        });
    },
    []
  );

  const list = useCallback(async () => {
    const { data } = await api.get("/visitors");
    console.log(data);

    return setListVisitor(data);
  }, []);

  const removeVisitor = useCallback(async (id: number) => {
    await api.delete(`visitors/${id}`, {
      params: {
        id,
      },
    });
  }, []);

  return (
    <VisitorContext.Provider
      value={{ createVisitor, listVisitor, list, removeVisitor }}
    >
      {children}
    </VisitorContext.Provider>
  );
};

function useVisitor(): VisitorContextData {
  const context = useContext(VisitorContext);

  if (!context) {
    throw new Error("useVisitor must be used within a ToastProvider");
  }

  return context;
}

export { VisitorProvider, useVisitor };
