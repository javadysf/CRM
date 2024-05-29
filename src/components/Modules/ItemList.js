import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { add:"", price:"", quantity:"" }],
    });
    console.log(products);
  };
  const changeHandler = (event, index) => {
    console.log("hi");
    const newArray = [...products];
    newArray[index][event.target.name]=event.target.value
    setForm({...form, products: newArray}) 
  };
  const removeHandler = (index) => {
    const newArray = [...products];
    newArray.splice( index,1 )
    setForm({...form, products: newArray})
  };
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      <button onClick={addHandler}>Add Item</button>
      {products.map((product,index) => (
        <div key={product.name} className="form-input__list">
          <FormInput
            name="add"
            label="product name"
            type="text"
            value={product.name}
            onChange={(e) => changeHandler(e, index)}
          />
          <div>
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={product.price}
              onChange={(e) => changeHandler(e, index)}
            />
            <FormInput
              name="quantity"
              label="Quantity"
              type="number"
              value={product.quantity}
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <button onClick={()=>removeHandler(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
