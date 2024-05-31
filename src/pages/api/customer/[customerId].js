import Customer from "@/models/customer";
import ConnectDB from "@/utils/Connectdb";

export default async function getInfo(req, res) {
    try {
        ConnectDB();
    } catch (error) {
        res.status(500).json({Message:"Error connecting to ConnectDB" ,status: "error"})
        return;
    }

    if (req.method === "GET") {
        const id = req.query.customerId;
        try {
            const customer = await Customer.findOne({_id: id})
            res.status(200).json({message:"success",status: "success",data: customer})
        } catch (error) {
            res.status(500).json({Message:"Error in finding user!" ,status: "error"})
            return;
        }

    }

}