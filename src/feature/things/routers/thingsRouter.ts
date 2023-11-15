import { Router } from "express";
import things from "../data/things.js";
import ThingsController from "../controller/ThingsController.js";

const thingsRouter = Router();
const thingsController = new ThingsController();

thingsRouter.get("/", thingsController.getThings);

thingsRouter.get("/:thingId", (req, res) => {
  const thingId = parseInt(req.params.thingId, 10);
  const thing = things.find((thing) => thing.id === thingId);

  if (!thing) {
    res.status(404).json({ error: "This thing doesn't exist" });
    return;
  }

  res.status(200).json(thing);
});

export default thingsRouter;
