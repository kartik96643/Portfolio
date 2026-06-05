import { connectDB } from "@/lib/db";
import Project from "@/models/project";

export async function POST(req) {

    try {
        await connectDB()

        const { title, desc, tech, repo, link } = await req.json()
        if (!title || !desc || !tech || !repo || !link) {
            return Response.json({
                success: false,
                message: "All fields are mandatory"
            }, {
                status: 400
            })
        }

        const techs = tech
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)

        await Project.create({
            title,
            desc,
            tech: techs,
            repo,
            link
        })

        return Response.json({
            success:true,
            message:"Project added successfully"
        },{
            status:201
        })
    } catch (error) {
        return Response.json({
            success:false,
            message:error.message
        },{
            status:500
        })
    }
}

export async function GET(req) {
    try {

        const projects = await Project.find({})

        return Response.json({
            success:true,
            projects
        },{
            status: 200
        })
        
    } catch (error) {

        return Response.json({
            success:false,
            message: error.message,
        },{
            status: 500
        })
        
    }
    
}