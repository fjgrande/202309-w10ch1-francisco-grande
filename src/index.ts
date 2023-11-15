import morgan from "morgan";
import app from "./app.js";
import { notFound } from "./middleware/error/errorMiddleware.js";
import thingsRouter from "./feature/things/routers/thingsRouter.js";
import PingController from "./feature/ping/controller/PingController.js";

const pingController = new PingController();

app.use(morgan("dev"));
app.get("/", pingController.getPong);
app.use("/things", thingsRouter);
app.use(notFound);
