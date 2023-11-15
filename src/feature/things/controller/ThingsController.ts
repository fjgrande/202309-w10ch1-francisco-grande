import { type Request, type Response } from "express";
import ThingsRepository from "../repository/ThingsRepository.js";

const thingsRepository = new ThingsRepository();

class ThingsController {
  public getThings(_req: Request, res: Response) {
    const things = thingsRepository.getThings();

    res.status(200).json({ things });
  }

  public getThingById(req: Request, res: Response) {
    const thingId = parseInt(req.params.thingId, 10);
    try {
      const thing = thingsRepository.getThingById(thingId);
      res.status(200).json({ thing });
    } catch {
      res.status(404).json();
    }
  }
}

export default ThingsController;
