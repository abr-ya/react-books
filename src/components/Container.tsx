import { ReactNode } from 'react';
import { Box } from 'rebass/styled-components';

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1024,
        mx: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
