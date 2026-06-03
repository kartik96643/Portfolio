import { connectDB } from "@/lib/db";
import Admin from "@/models/admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {

    await connectDB();

    const { email, password } =
      await req.json();

    const admin =
      await Admin.findOne({ email });

    if (!admin) {
      return Response.json(
        {
          success: false,
          message: "Invalid credentials"
        },
        { status: 401 }
      );
    }

    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isMatch) {
      return Response.json(
        {
          success: false,
          message: "Invalid credentials"
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        adminId: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    const cookieStore = await cookies()

    cookieStore.set("token", token, {
      httpOnly:true,
      sameSite:"strict",
    })

    return Response.json({
      success: true,
      message:"Logged In Successfully"
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