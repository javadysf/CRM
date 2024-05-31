import Form from "@/components/Modules/Form";
import EditCustomerPage from "@/components/Templates/editCustomerPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState(null);
  const {
    query: { customerId },
    isReady,
  } = useRouter();
  useEffect(() => {
    if(isReady) {
        fetch(`/api/customer/${customerId}`).then(res=>res.json()).then(data => setData(data.data))
    }
  }, [isReady]);
  return data&&<EditCustomerPage data={data} id={customerId}/> 
}
export default index;
