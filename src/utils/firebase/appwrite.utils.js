import { Client, Functions } from "appwrite";

const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJ_ID);

export const functions = new Functions(client);
export default client;

export const detectFace = async (imageURL) => {
  try {
    const execution = await functions.createExecution(
      import.meta.env.VITE_APPWRITE_FUNC_ID,
      JSON.stringify({ input: imageURL }),
    );

    const data = JSON.parse(execution.responseBody || "{}");
    return data;
  } catch (error) {
    console.error("Error calling function:", error);
    throw error;
  }
};
