import Head from "next/head";
import {
  Container,
  Box,
  Flex,
  Spacer,
  Button,
  Icon,
  Grid,
  GridItem,
  Stack,
  IconButton,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaCodepen } from "@react-icons/all-files/fa/FaCodepen";
import { FaDocker } from "@react-icons/all-files/fa/FaDocker";
import { TiFlash } from "@react-icons/all-files/ti/TiFlash";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello I am Muhammad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container h="100vh" maxW="full" bgColor="brand.content" py="10" px="1">
        <Grid
          w="full"
          h="full"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={1}
        >
          <GridItem colSpan={1} px="5">
            <Flex direction="column" height="full">
              <Button
                size="sm"
                variant="ghost"
                colorScheme="brand"
                fontSize="2xs"
                fontFamily="title"
                color="brand.title-color"
              >
                M
              </Button>
              <Spacer />
              <Stack spacing="4">
                <IconButton
                  variant="link"
                  size="md"
                  aria-label="Search database"
                  color="brand.title-color"
                  icon={<Icon as={FaGithub} />}
                />
                <IconButton
                  variant="link"
                  size="md"
                  aria-label="Search database"
                  color="brand.title-color"
                  icon={<Icon as={FaLinkedinIn} />}
                />
                <IconButton
                  variant="link"
                  size="md"
                  aria-label="Search database"
                  color="brand.title-color"
                  icon={<Icon as={FaCodepen} />}
                />
                <IconButton
                  variant="link"
                  size="md"
                  aria-label="Search database"
                  color="brand.title-color"
                  icon={<Icon as={FaDocker} />}
                />
                <IconButton
                  variant="link"
                  size="md"
                  aria-label="Search database"
                  color="brand.title-color"
                  icon={<Icon as={TiFlash} />}
                />
              </Stack>
              <Spacer />
              <Box></Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={6} px="5">
            <Stack justify="center" h="full" spacing="8">
              <Divider width="20" borderColor="brand.border-color" />
              <Stack color="brand.subtitle-color" spacing="-6">
                <Heading
                  as="h1"
                  fontFamily="title"
                  fontWeight="bold"
                  fontSize="8xl"
                >
                  Hello<span style={{ opacity: "60%" }}>.</span>
                </Heading>
                <Heading
                  as="h1"
                  fontFamily="title"
                  fontWeight="bold"
                  fontSize="8xl"
                >
                  I am
                </Heading>
                <Heading
                  as="h1"
                  fontFamily="title"
                  fontWeight="bold"
                  fontSize="8xl"
                >
                  MUHAMMAD
                </Heading>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem colSpan={5} px="5"></GridItem>
        </Grid>
      </Container>
    </>
  );
}
