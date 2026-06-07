import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({
        success: false,
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return Response.json({
      success: true,
      admin: decoded,
    });
  } catch (error) {
    return Response.json({
      success: false,
    });
  }
}