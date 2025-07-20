import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async makeOrder({ title, category, image, price, description, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    category,
                    image,
                    price,
                    description,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async getOrdersByUser(userId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("userId", userId)
                ]
            );
        } catch (error) {
            throw error;
        }
    }

    async updateOrder(orderId, updatedFields) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                orderId,
                updatedFields
            );
        } catch (error) {
            throw error;
        }
    }

    async deleteOrder(orderId) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                orderId
            );
        } catch (error) {
            throw error;
        }
    }

    async getOrderById(orderId) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                orderId
            );
        } catch (error) {
            throw error;
        }
    }




}


const service = new Service();
export default service