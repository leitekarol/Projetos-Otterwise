import React from 'react'
import { NumberInput, 
   NumberInputField, 
   NumberInputStepper,
   NumberIncrementStepper, 
   NumberDecrementStepper, Button, Flex } from '@chakra-ui/react'
import { useState } from "react";
import { useToast } from '@chakra-ui/react'

const Card = (props) => {
    const {image, name, price} = props
    const [ quantity, setQuantity] = useState (0)
    const [finalPrice, setPrice] = useState (0)
    const saveStorage = (name, object) => { localStorage.setItem(name, object) };
    const toast = useToast ();

    
  return (

        <div >
          
         <Flex flexDirection={"column"} alignItems={"center"} border={'2px solid blue'} borderRadius="8px" justifyContent={"space-around"}
         padding={"5px"} margin={"10px"} width={"200px"} height={"200px"} minWidth="max-content">
        <Flex flexDirection={"row"}> <Flex margin={"10px"} boxSize={"120px"}><img src={image} alt=""/></Flex>      

        <Flex flexDirection={"column"} margin={"10px"} gap={"4px"} alignItems="center">
          <p>{name}</p> <p>R$ = {price} un.</p>

         <NumberInput onChange={(element) => {setQuantity(element); setPrice(+element*price);}} size="md" maxW={20} defaultValue={0} min={0} max={20}>
          <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
         </NumberInput>
         </Flex>
         </Flex>
         <Button colorScheme='blue' onClick={() => { 
           saveStorage(name, JSON.stringify({image, name, price, finalPrice, quantity}), toast({  
                title: 'Produto Adicionado.',     
                status: 'success',     
                duration: 9000,     
                isClosable: true, 
                }))
                }}> Adicionar ao Carrinho </Button>
 </Flex>

         </div>  
  )
}

export default Card

