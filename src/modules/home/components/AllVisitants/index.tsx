import { HStack, Spinner } from "native-base";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";
import StyledFlatList from "../../../../components/StyledFlatList";
import { useQuery } from "@tanstack/react-query";
import { GetVisitors } from "../../../visitors/api";
import FlatListLoading from "../../../../components/FlatListLoading";

export default function AllVisitants() {
  const [visitorsData, setVisitorsData] = useState<IListVisitorData[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["GETVISITORS"],
    queryFn: GetVisitors,
  });

  useEffect(() => {
    if (data) return setVisitorsData(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <FlatListLoading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={visitorsData}
          renderItem={({ item, index }) => (
            <StyledFlatList
              data={visitorsData}
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
