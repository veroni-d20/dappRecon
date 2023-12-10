import { db } from "@/utils/mongo";

export default async function read(req: any, res: any) {
  if (req.method === "POST") {
    const { dappName, contractAddress, description, chainId } = req.body;

    const details = await db.collection("registrations").insertOne({
      dappName,
      contractAddress,
      description,
      chainId,
    });

    res.status(200).json({ success: true, msg: "data inserted successfully" });
  } else {
    // Handle any other HTTP method
  }
}
