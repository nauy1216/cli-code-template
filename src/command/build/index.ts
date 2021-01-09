import path from "path";
import Logger from "../../utils/logger";
export default function build(entry: string) {
  //
  entry = path.resolve(process.cwd(), entry);
  Logger.info(entry);
}
