import { prisma } from "../helpers/utils.js";

export const getAllcar = async (request, reply) => {
  const {skip = 0, take = 2} = request.query;
  try {
    const cars = await prisma.car.findMany({
      skip: +skip,
      take: +take,
    });
    
    return cars;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível listar o carro");
  }
};

export const createCar = async (req, reply) => {
  try {
    
    const { name, year, brand_id } = req.body;
    const car = await prisma.car.create({
      data: {
        name,
        year,
        brand: {
          connect: { id: Number(brand_id) },
        },
        image_url: req.file.path,
      },
    });
    reply.send(car);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o carro");
  }
};


export const updateCar = async (req, reply) => {
  try {
    
    const { name, year, brand_id } = req.body;
    const { id } = req.params;
    const car = await prisma.car.update({
      where:{
         id: +id
      },
      data: {
        name,
        year,
        brand: {
          connect: { id: Number(brand_id) },
        },
        image_url: req.file.path,
      },
    });
    reply.send(car);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o carro");
  }
};


export const patchCar = async (req, reply) => {
  try {
    
    const data = {};
    if(req.body.name ){
      data.name = req.body.name;
    };
    if(req.body.year){
      data.year = req.body.year;
    }
    if(req.body.brand_id){
      data.brand =  {
        connect: { id: Number(brand_id) }
      }
    }
    if(req.file?.path){
      data.image_url = req.file.path;
    }
    const { id } = req.params;
    const car = await prisma.car.update({
      where:{
         id: +id
      },
      data,
    });
    reply.send(car);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível alterar a informação.");
  }
};

export const deleteCar = async (req, reply) => {
  try {
    
    const { id } = req.params;
    const car = await prisma.car.delete({
      where:{
         id: +id
      },
    });
    reply.send(car);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível deletar o carro");
  }
};