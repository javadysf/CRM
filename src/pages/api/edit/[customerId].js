import Customer from "@/models/customer";
import ConnectDB from "@/utils/Connectdb";

export async function handler(req, res) {
    try {
     ConnectDB();
        
    } catch (error) {
        res.status(500).json({ status: "failed", message: "nashod nashod" });
        return;
    }
    if (req.method === "PATCH") {
        const id = req.query.customerId;
        co
        try {
           const data =  await Customer.findById({_id: id})  
           data.name = 
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