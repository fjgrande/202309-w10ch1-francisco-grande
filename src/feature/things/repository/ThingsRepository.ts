import { type Thing } from "../../../types";
import things from "../data/things.js";

class ThingsRepository {
  public getThings(): Thing[] {
    return things;
  }

  public getThingById(thingId: number): Thing {
    const thing = things.find((thing) => thing.id === thingId);

    if (!thing) {
      throw new Error("This thing doesn't exist");
    }

    return thing;
  }
}

export default ThingsRepository;
