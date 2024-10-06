import { Mistral } from "@mistralai/mistralai";
import { UserLog } from "/types";

const p1 = "y5dmD6mx6KJoKSkh";
const p2 = "KV8Uub9wrmwjz4A0";
const client = new Mistral({ apiKey: `${p1}${p2}` });

class PixtralService {
  async getCheatingPrediction(number: string): Promise<{log: UserLog, webcamCheat: boolean, screenCheat: boolean}> {
    // tbd
  }
}

export const pixtralService = new PixtralService();