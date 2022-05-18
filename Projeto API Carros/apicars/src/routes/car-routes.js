import fastify from "fastify";
import * as PostController from "../controllers/cars-controller.js";
import multer from "fastify-multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, reply, callback) => {
    callback(null, "public/images");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, file.originalname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = [
  {
    method: "GET",
    url: "/cars",
    handler: PostController.getAllcar,
  },
  {
    method: "POST",
    url: "/cars",
    preHandler: upload.single("image_url"),
    handler: PostController.createCar,
  },
  {
    method: "PATCH",
    url: "/cars/:id",
    preHandler: upload.single("image_url"),
    handler: PostController.patchCar,
  },
  {
    method: "PUT",
    url: "/cars/:id",
    preHandler: upload.single("image_url"),
    handler: PostController.updateCar,
  },
  {
    method: "DELETE",
    url: "/cars/:id",
    handler: PostController.deleteCar,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};