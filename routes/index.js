export default async function indexRoutes(server, options, done) {
  server.get("/", async (request, reply) => {
    return { hello: "world" };
  });
}
