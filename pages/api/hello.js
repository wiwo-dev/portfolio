import Cors from "cors";
import NextCors from "nextjs-cors";
// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  //methods: ["POST", "GET"],
  //origin: [""],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  //await runMiddleware(req, res, cors);

  await NextCors(req, res, {
    // Options
    //methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "http://google.com",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  console.log(req.headers.host);

  // Rest of the API logic
  res.json({ message: "Hello Everyone!" });
}
