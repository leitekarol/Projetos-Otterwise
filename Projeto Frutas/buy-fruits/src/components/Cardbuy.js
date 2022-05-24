import React from 'react'
import { NumberInput, 
    NumberInputField, 
    NumberInputStepper,
    NumberIncrementStepper, 
    NumberDecrementStepper, 
    Button,
    } from '@chakra-ui/react'

const saveStorage = (name, object) => { localStorage.setItem(name, object) };
const removeStorage = (key) => { localStorage.removeItem(key) };

const Cardbuy = (props) => {
const {image, name, price, quantity, finalPrice, setUpdateCart} = props
const change = (element) => { 
   setUpdateCart(true); 
   saveStorage(name, JSON.stringify({image, name, price, finalPrice:+element*price, quantity:element}))}

  return (
     <div>
         <img src={image} alt=""/>
         <p>{name}</p>
         <p>{price}</p>

         <NumberInput onChange={(element) => { 
            change(element)}} size="md" maxW={20} defaultValue={quantity} min={0} max={20}>
          <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
         </NumberInput>
            <Button colorScheme='blue' onClick={() => { 
               removeStorage(name) 
               setUpdateCart(true); }}>Remover item do Carrinho</Button>
    </div>
  )
}

export default Cardbuy