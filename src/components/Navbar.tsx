import React from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  let body;

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2} color="#eee">
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link mr={2} color="#eee">
            Register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex color="#eee">
        <Box mr={2}>{data?.me.username}</Box>
        <Button variant="link">Logout</Button>
      </Flex>
    );
  }

  return (
    <Flex id="Navbar" bg="tomato" p={4}>
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};

export default Navbar;
