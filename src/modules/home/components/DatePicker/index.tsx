import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetVisitorsByDate } from "../../../visitors/api";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";

interface IFilterModalProps {
  show: boolean;
  closeModal: (value: boolean) => void;
  selectData: (data: IListVisitorData[]) => void;
}

export default function DatePicker({
  show,
  closeModal,
  selectData,
}: IFilterModalProps) {
  const [date, setDate] = useState<Date>(new Date());

  const { data } = useQuery({
    queryKey: ["GETPERDAYVISITORS", date],
    queryFn: async () => {
      if (!date || isNaN(date.getTime())) return [];
      const data = await GetVisitorsByDate(date);
      return data;
    },
    enabled: !!date, // only run the query if date is not undefined
  });

  useEffect(() => {
    if (data) selectData(data);
  }, [data]);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    closeModal(false);
  };

  return (
    <View>
      {show ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
