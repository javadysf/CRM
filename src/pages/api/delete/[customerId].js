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
  if (req.method === "DELETE") {
    console.log(req.body);
    const id = req.query.customerId;
    try {
        await Customer.deleteOne({_id: id})   
      
        res.status(200)
        .json({
          status: "success",
          message: "data was deleted successfully",
        });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: "failed", message: "error deleting data in db" });
    }
  }
}
