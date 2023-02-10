import { createPool } from "mysql2/promise";
import { database } from "./keys";

export const pool = createPool(database);
