import React from 'react'
import Cardbuy from "../components/Cardbuy.js"
import {Modal, 
useDisclosure,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,
Button,
Flex,
Wrap
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const Cart = () => {

  const [listCart, setListCart] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure ()
  const [finalPayment, setFinalPayment] = useState(0)
  const [updateCart, setUpdateCart] = useState (false)

  useEffect(() => {
    const createList = () => {
      const selectCart = (key) => JSON.parse(localStorage.getItem(key))
     const keys = Object.keys(localStorage)
     setListCart (keys.map((element) => selectCart(element)))
     setUpdateCart(false);
     setFinalPayment(listCart.reduce((acc, element) => { acc += element.finalPrice 
    return acc}, 0 ))
    }
    createList();
  }, [updateCart, listCart])
  

  return (
  
    <div>
    

        <Flex flexWrap={Wrap} alignItems={"center"} justifyContent={"space-around"} >
      {listCart.map((element) => <Cardbuy 
      image={element.image} 
      name={element.name} 
      price={element.price} 
      quantity={element.quantity} 
      finalPrice={element.finalPrice} 
      setUpdateCart={setUpdateCart}/>)}
      {finalPayment}

      </Flex>

       <Button colorScheme='blue' onClick={onOpen}>Finalizar Compra</Button>
       <Modal isOpen={isOpen} onClose={onClose}>
                       <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Confirme seu pedido:</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              {finalPayment}
                            </ModalBody>
                           <ModalFooter>
                              <Button colorScheme='blue' mr={3} onClick={onClose}>   Voltar
                               </Button>
                              <Button variant='ghost'>Confirmar pagamento</Button>
                           </ModalFooter>
                        </ModalContent> 
                     </Modal>
                    
    </div>
  )
}

export default Cart