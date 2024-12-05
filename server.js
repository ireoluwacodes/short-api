import { app } from "./app.config.js";
import { PORT } from "./constants.config.js";

const startApp = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startApp();