// src/components/Sidebar.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';


const Sidebar = () => {
  return (
    <Box width="250px" bg="gray.100" p="4">
      <Text fontSize="lg" mb="4">Sidebar</Text>
      {/* Add more items as needed */}
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Box>
  );
};

export default Sidebar;
