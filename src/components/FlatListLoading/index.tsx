import { HStack, Spinner } from "native-base";

export default function FlatListLoading() {
  return (
    <HStack justifyContent="center" alignItems="center">
      <Spinner size="lg" />
    </HStack>
  );
}
