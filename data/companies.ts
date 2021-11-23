import { Company } from "../lib/model/Company";
import escapeGames from "./companies/escape-games";

const companies: { [id: string]: Company } = {
  "escape-games": escapeGames,
};

export default companies;
