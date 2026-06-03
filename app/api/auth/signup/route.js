import { connectDB } from "@/lib/db";
import Admin from "@/models/admin";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } =
      await req.json();

    const existingAdmin =
      await Admin.findOne({ email });

    if (existingAdmin) {
      return Response.json(
        {
          success: false,
          message: "Admin already exists"
        },
        { status: 400 }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword
    });

    return Response.json({
      success: true,
      message: "Admin created",
      admin
    });

  } catch (error) {

    return Response.json(
      {
        success: false,
        message: error.message
      },
      { status: 500 }
    );
  }
}