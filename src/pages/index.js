import { HomePage } from "@/components/Templates/HomePage";
import Customer from "@/models/customer";
import ConnectDB from "@/utils/Connectdb";



export default function Index({customers}) {
  return (
<HomePage customers={customers} />
  );
}

export async function getServerSideProps(){
           try {
            ConnectDB();
            const customers = await Customer.find();
            return {
              props:{
                customers: JSON.parse(JSON.stringify(customers))
              }
            }
           } catch (error) {
            console.log(error);
           }
}
