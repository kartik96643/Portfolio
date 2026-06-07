import { cookies } from "next/headers";

export async function POST(req) {

    const cookieStore = await cookies();
     cookieStore.set("token", "", {
    maxAge: 0,
    path: "/",
  });
    return Response.json({
        success:false,
        message:"Logout successfully"
    },{
        status:200
    })
    
};