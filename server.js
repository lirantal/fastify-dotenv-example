import Fastify from "fastify";
import fastifyPlugin from "fastify-plugin";
import indexRoutes from "./routes/index.js";

const fastify = Fastify({ logger: true });
fastify.register(fastifyPlugin(indexRoutes));

async function initAppServer() {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

initAppServer();
