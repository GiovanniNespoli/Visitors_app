import {
  Alert,
  Center,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Text,
  Collapse,
} from "native-base";
import { useEffect, useState } from "react";
import { IAlertStatusEnum } from "../../interface/IAlertEnum";

interface IStyledAlertProps {
  openAlert: boolean;
  header: string;
  text: string;
  status: IAlertStatusEnum;
}

export default function StyledAlert({
  openAlert,
  header,
  status,
  text,
}: IStyledAlertProps) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(openAlert);
  }, [openAlert]);

   return (
    <Center style={{ position: "absolute", zIndex: 999, bottom: 100 }}>
      <Collapse isOpen={show}>
        <Alert maxW="400" status={status}>
          <VStack space={1} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{
                    color: "coolGray.800",
                  }}
                >
                  {header}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: "coolGray.600",
                }}
                onPress={() => setShow(false)}
              />
            </HStack>
            <Box
              pl="6"
              _dark={{
                _text: {
                  color: "coolGray.600",
                },
              }}
            >
              {text}
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Center>
  );
}
