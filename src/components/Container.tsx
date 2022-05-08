import { ReactNode } from 'react';
import { Box } from 'rebass/styled-components';

interface IContainer {
  children: ReactNode;
}

export const Container = ({ children }: IContainer) => {
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
