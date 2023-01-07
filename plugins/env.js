import * as dotenv from "dotenv";
import fastifyPlugin from "fastify-plugin";

async function configPlugin(server, options, done) {
  try {
    const envConfig = dotenv.config();
    server.decorate("config", envConfig.parsed);
    done();
  } catch (err) {
    done(err);
  }
}

export default fastifyPlugin(configPlugin);
