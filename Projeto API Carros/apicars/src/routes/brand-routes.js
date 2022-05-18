import fastify from "fastify";
import * as PostController from "../controllers/brand-controller.js";
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
    url: "/brands",
    handler: PostController. getAllbrand,
  },
  {
    method: "POST",
    url: "/brands",
    handler: PostController.createBrand,
  },
  {
    method: "PUT",
    url: "/brands/:id",
    handler: PostController.updateBrand,
  },
  {
    method: "DELETE",
    url: "/brands/:id",
    handler: PostController.deleteBrand,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};