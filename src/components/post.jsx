import { Box, HStack, Text } from "@chakra-ui/core";
import React from "react";

const Post = ({ post }) => {
  return (
    <HStack key={post.id} w="100%" alignItems="flex-start">
      <Box bg="gray.100" p={4} rounded="md" w="100%">
        <Text>{post.title}</Text>
        Acho que não funfou aqui
      </Box>
    </HStack>
  );
};

export default Post;