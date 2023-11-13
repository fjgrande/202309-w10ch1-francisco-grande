import morgan from "morgan";
import app from "./app.js";
import { notFound } from "./middleware/error/errorMiddleware.js";
import thingsRouter from "./feature/things/routers/thingsRouter.js";

app.use(morgan("dev"));
app.use("/things", thingsRouter);
app.use(notFound);
