import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Image,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cidades, setCidades] = useState(null);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
      .then(async (res) => {
        setCidades(res.data);
      });
  }, []);

  if (!cidades) {
    return (
      <Center h="100vh" bg="white">
        Caregando...
      </Center>
    );
  }

  return (
    <Box h="100vh" bg="black">
      <Center
        as="header"
        h={150}
        bg="purple.600"
        color="black"
        fontWeight="bold"
        fontSize="100px"
        pb="8"
      >
        Formulário
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 350px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={116}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" type="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Select id="cidade">
                  {cidades.map((cidade, idx) => {
                    return <option key={idx}>{cidade.nome}</option>;
                  })}
                </Select>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                  <HStack spacing="24px">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="purple.600"
                color="white"
                fontWeight="bold"
                fontSize="x1"
                mt="2"
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
      <Image
        src="https://i.pinimg.com/736x/e6/ab/a5/e6aba50b31cf7fb37d1bf3b8e120aa77.jpg"
        alt="Descriçao da imagem"
        position="absolute"
        bottom="0"
        right="0"
        maxH="400px"
        mr="4"
        mb="4"
        borderRadius="5"
        fallbackSrc="https://i.pinimg.com/736x/e6/ab/a5/e6aba50b31cf7fb37d1bf3b8e120aa77.jpg"
      />
    </Box>
  );
}

export default App;
