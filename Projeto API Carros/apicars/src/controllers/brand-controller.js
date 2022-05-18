import { prisma } from "../helpers/utils.js";

export const getAllbrand = async (request, reply) => {
  try {
    const brands = await prisma.brand.findMany();
    return brands;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi ver as marcas");
  }
};

export const createBrand = async (req, reply) => {
  try {
     const { name } = req.body;
    const brands = await prisma.brand.create({
      data: {name}});
    reply.send(brands);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar a marca");
  }
};

export const updateBrand = async (req, reply) => {
  try {
     const { name } = req.body;
     const {id} = req.params;

    const brands = await prisma.brand.update({
      where:{
         id: +id },
        data: {name},
      });
    reply.send(brands);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível atualizar a marca");
  }
};

export const deleteBrand = async (req, reply) => {
  try {
    
     const {id} = req.params;

    const brands = await prisma.brand.delete({
      where:{
         id: +id 
        },
      });
    reply.send(brands);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível deletar a marca");
  }
};