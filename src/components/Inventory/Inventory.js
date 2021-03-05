import React from "react";

const Inventory = () => {
  const handleAddProduct = () => {
    const product = {};
    fetch("https://shrouded-sands-52244.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
  return (
    <div>
      <center>
        <form action="">
          <p>
            <span>Name: </span>
            <input type="text" />
          </p>
          <p>
            <span>Price: </span>
            <input type="text" />
          </p>
          <p>
            <span>Quantity: </span>
            <input type="text" />
          </p>
          <p>
            {/* node js image store multer Library */}
            <span>Product Image: </span>
            <input type="file" />
          </p>

          <button onClick={handleAddProduct}>Add Product</button>
        </form>
      </center>
    </div>
  );
};

export default Inventory;