import Fastify from "fastify";

const fastify = Fastify({ logger: true });

async function initAppServer() {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

initAppServer();
