import Customer from "@/models/customer";
import ConnectDB from "@/utils/Connectdb";

export default async function handler(req, res) {
  try {
     ConnectDB();
    console.log("success connected");
  } catch (error) {
    res.status(500).json({ status: "failed", message: "nashod nashod" });
    return;
  }
  if (req.method === "POST") {
    const data = req.body.data;
    console.log(req );
    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "invalid data" });
        try {
            const customer = await Customer.create(data)
            res.status(200).json({ status: "success", message:"data was created successfully", data: customer});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: "failed", message:"error storing data in db"})
        }
  }
}
