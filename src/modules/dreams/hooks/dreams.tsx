import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import IDreamsList from "../interface/IDreamsData";

interface IDreamsContextData {
  dreamsList: IDreamsList[];
  setDreamsListHandler: (props: IDreamsList) => void;
  deleteDreamHandler: (id: string) => void;
}

const DreamsContext = createContext<IDreamsContextData>(
  {} as IDreamsContextData
);

export default function DreamsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [dreamsList, setDreamsList] = useState<IDreamsList[]>([]);

  const setDreamsListHandler = useCallback(
    ({ description, title, id }: IDreamsList) => {
      setDreamsList([...dreamsList, { description, title, id }]);
    },
    [dreamsList]
  );

  const deleteDreamHandler = useCallback(
    (id: string) => {
      const newArray = dreamsList.filter((value) => value.id !== id);

      setDreamsList(newArray);
    },
    [dreamsList]
  );

  const value = useMemo(
    () => ({ dreamsList, setDreamsListHandler, deleteDreamHandler }),
    [dreamsList, setDreamsListHandler, deleteDreamHandler]
  );

  return (
    <DreamsContext.Provider value={value}>{children}</DreamsContext.Provider>
  );
}

export function useDreams(): IDreamsContextData {
  const context = useContext(DreamsContext);

  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }
  return context;
}
