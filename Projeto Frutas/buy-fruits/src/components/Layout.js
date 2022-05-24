import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Stack, Spacer, Heading, ButtonGroup, Button, Image, Flex} from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import background from "../constantes/images/background.jpg"
import logo from "../constantes/images/logo.png"

const Layout = () => {
  return (
    <Fragment>
     <Stack pt="10px" pb="10px" bgImage={`url(${background})`}>
      <Box p="2" >
        <Heading fontSize = "50px" textAlign="center" >
          <Image margin = "auto" alignItems="center" marginbottom="30px"  box-size="200px" src={logo} /> 
        </Heading>
           </Box>
           <Spacer/>
           <Flex>
           <ButtonGroup justifyContent = "center" gap={15} margin="auto" fontSize="30px" textAlign="center"> 
             <Button   colorScheme={"orange"} as={ReachLink} to="/">Home</Button>
            <Button  colorScheme={"orange"} as={ReachLink} to="/cart" paddingTop={1} paddingBottom={1}>Lista de Compras</Button> 
            </ButtonGroup>
            </Flex>
            </Stack>
        <Outlet/>
    </Fragment>
  )
}

export default Layout