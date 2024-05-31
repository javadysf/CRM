import Customer from "@/models/customer";
import ConnectDB from "@/utils/Connectdb";


export default async function editCustomer(req, res)
{
  try {
    ConnectDB();
  } catch (error) {
       res.status(500).json({message:"Error connecting db",status:"failed"});
       return;
  }
  if(req.method === "PATCH")
    {const id = req.query.customerId;
      const data = req.body.data;
      try {
        const customer = await Customer.findOne({_id:id})
        customer.name = data.name;
        customer.lastName = data.lastName;
        customer.email = data.email;
        customer.phone = data.phone;
        customer.address = data.address;
        customer.postalCode = data.postalCode;
        customer.products = data.products;
        customer.date = data.date;
        customer.updatedAt = Date.now();
        customer.save();
        res.status(200).json({message:"succesfully changed",status:"success",data:customer})
      } catch (error) {
        console.log(error);
        res.status(500).json({message:"editing failed",status : "failed"})
        
      }
    }

}