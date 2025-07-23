import { UserPayload } from "../../src/utils/jwt"; // adjust if needed

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}
