import { cookies } from "next/headers";

export async function POST(req) {

    const cookieStore = await cookies();
    cookieStore.delete('token')
    return Response.json({
        success:false,
        message:"Logut successfully"
    },{
        status:200
    })
    
};