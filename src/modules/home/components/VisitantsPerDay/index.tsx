import { useQuery } from "@tanstack/react-query";
import { GetVisitorsByDate } from "../../../visitors/api";
import FlatListLoading from "../../../../components/FlatListLoading";
import { FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";
import StyledFlatList from "../../../../components/StyledFlatList";

interface IVisitantsPerDayProps {
  day?: Date;
}

export default function VisitantsPerDay({ day }: IVisitantsPerDayProps) {
  const [visitantsPerDayList, setVisitantsPerDayList] = useState<
    IListVisitorData[]
  >([]);

  const { data, isLoading } = useQuery({
    queryKey: ["GETPERDAYVISITORS"],
    queryFn: async () => {
      const data = await GetVisitorsByDate(day);
      return data;
    },
  });

  useEffect(() => {
    if (data) setVisitantsPerDayList(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <FlatListLoading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={visitantsPerDayList}
          renderItem={({ item, index }) => (
            <StyledFlatList
              data={visitantsPerDayList}
              index={index}
              id={item.id}
              name={item.name}
              email={item.email}
              phone={item.phone}
            />
          )}
        />
      )}
    </>
  );
}
