import Project from "@/models/project";

export async function DELETE(props,req) {

    try {

        const userId = await req.params
        await Project.findByIdAndDelete({_id:userId.userId.slice(1)})
        return Response.json({
            success:true,
            message:"Project Deleted Successfully"
        },{
            status:200
        })
    } catch (error) {
        return Response.json({
            success:false,
            message: error.message
        },{
            status:500
        })
    }

    
}