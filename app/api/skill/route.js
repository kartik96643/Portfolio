import Skill from "@/models/skill";
import { connectDB } from "@/lib/db";

export async function POST(req) {
  try {
    await connectDB();

    const { end, skill } = await req.json();

    if (!end || !skill) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const skills = skill
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const exists = await Skill.findOne({ end });

    if (exists) {
      await Skill.findOneAndUpdate(
        { end },
        {
          $addToSet: {
            skill: {
              $each: skills,
            },
          },
        }
      );
    } else {
      await Skill.create({
        end,
        skill: skills,
      });
    }

    return Response.json(
      {
        success: true,
        message: "Skills added successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}



export async function GET() {
  try {
    await connectDB();

    const skills = await Skill.find();

    return Response.json(
      {
        success: true,
        skills,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}