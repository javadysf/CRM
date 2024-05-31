import { useState } from "react";
import Form from "../Modules/Form";
import { useRouter } from "next/router";

const   EditCustomerPage = ({data,id}) => {
  console.log(data);
  const [form,setForm]=useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email, 
    address: data.address || "" ,
    phone: data.phone || "" ,
    address: data.address || "",
    date: data.date || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
  });
  const router = useRouter();
  const cancelHandler=()=>{
    router.push("/")
  }
  const saveHandler = async ()=>{
    const res = await fetch(`/api/edit/${id}`,{
      method: "PATCH",
      body: JSON.stringify({data: form}),
      headers: { "Content-Type": "application/json"}
    })
    const data = await res.json()
    console.log(data);
    if (data.status === "success") router.push("/")

  }
  return (
    <div className="customer-page">
    <h4>Edit Customer</h4>
    <Form form={form} setForm={setForm} />
    <div className="customer-page__buttons">
      <button className="first" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="second" onClick={saveHandler}>
        Edit
      </button>
    </div>
  </div>
  );
};

export default EditCustomerPage;
