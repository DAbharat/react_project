import service from "./config";
import { ID } from "appwrite";

const DATABASE_ID = "appwriteDatabaseId";
const COLLECTION_ID = "appwriteCollectionId";

export async function placeOrder(userId, cartItems, totalAmount) {
  try {
    const response = await service.database.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        userId,
        items: JSON.stringify(cartItems),
        totalAmount,
        status: "Pending", 
        createdAt: new Date().toISOString(),
      }
    );
    return response;
  } catch (error) {
    console.error("Failed to place order:", error);
    throw error;
  }
}


export default placeOrder
