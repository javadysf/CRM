import Card from "../Modules/Card";

export const HomePage = ({customers}) => {
  return (
    <div>
        {customers.map(customer => <Card key={customer._id} customer={customer} />)}
    </div>
  )
}
