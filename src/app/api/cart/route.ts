import { cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { cookies, headers } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from "uuid";

export const GET = async () => {
  const headersList = headers()

  const uid = uuid();
  const setCookies = cookies();
  // const user_id = cookies().get("user_id");
  const user_id= headersList.get('user_id')
  if (!user_id) {
    setCookies.set("user_id", uid);
  }
//   const headersInstance = headers()
// const user_id= headersInstance.get('user_id')
  try {
    const res = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id as string));
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
};
export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid();
  const setCookies = cookies();
  const user_id = cookies().get("user_id");

  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const existingCartItem = await db
      .select()
      .from(cartTable)
      .where(
       and( eq(cartTable.user_id, user_id?.value as string),
        eq(cartTable.product_id, req.product_id)
        )
      );

    if (existingCartItem.length>=1) {
      return NextResponse.json({ message: "Item already in cart", status:201 });
    }
  else{  const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id, 
        quantity: req.quantity,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
// console.log(res)
    return NextResponse.json({ result:res[0] });
  }
  } catch (error) {
    console.log(error);
  }
};
export const DELETE = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .delete(cartTable)
      .where(eq(cartTable.user_id, req.id))
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
  }
};