import * as React from "react";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { PhoneIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [visible, setVisible] = useBoolean();

  return (
    <Container w="290px" p="4" m="auto" bgColor="cyan.50">
      <Text w="250px" mb="2" size="lg">
        登录
      </Text>

      <Stack spacing="4" w="250px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input placeholder="账号"></Input>
        </InputGroup>

        <InputGroup w="250px">
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
          />
          <Input
            placeholder="密码"
            type={visible ? "text" : "password"}
          ></Input>
          <InputRightElement
            onClick={setVisible.toggle}
            children={
              visible ? (
                <ViewIcon color="gray.300" />
              ) : (
                <ViewOffIcon color="gray.300" />
              )
            }
          ></InputRightElement>
        </InputGroup>

        <Button colorScheme="pink">登录</Button>
      </Stack>
    </Container>
  );
};

export default Login;
