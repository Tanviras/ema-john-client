import React, { useState } from 'react';


const Inventory = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
  
    const handleBlur = (e) => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
    };
  
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
    };

    // const handleAddProduct = () => {
    //     const product = {};
    //     fetch('http://localhost:5000/addProduct', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    // }

    const handleAddProduct = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("file", file);
        formData.append("key", info.key);
        formData.append("name", info.name);
        formData.append("category", info.category);
        formData.append("seller", info.seller);
        formData.append("stock", info.stock);
        formData.append("price", info.price);
        formData.append("description", info.description);

        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                alert("New Product Added Successfully");
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <center>
            {/* <form action="">
                <p><span>Name: </span><input type="text"/></p>
                <p><span>price: </span><input type="text"/></p>
                <p><span>Quantity:</span><input type="text"/></p>
                <p><span>Product Image</span><input type="file"/></p>
                <button onClick={handleAddProduct}>Add Product</button>
            </form> */}

            <form onSubmit={handleAddProduct}>

                <div className="form-group mb-3">
                    <label htmlFor="name">Product Name</label>
                    <input
                        onBlur={handleBlur}
                        type="text"
                        className="form-control"
                        name="name"
                    />
                </div>

                
                <div className="form-group mb-3">
                    <label htmlFor="name">Product's Unique Code </label>
                    <input
                        onBlur={handleBlur}
                        type="text"
                        className="form-control"
                        name="key"
                    />
                </div>


                <div className="form-group mb-3">
                    <label htmlFor="description">Product Category</label>
                    <input
                        onBlur={handleBlur}
                        type="text"
                        className="form-control"
                        name="category"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="file">Stock </label>
                    <input
                        onChange={handleFileChange}
                        type="number"
                        className="form-control"
                        name="stock"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="file">Your company </label>
                    <input
                        onChange={handleFileChange}
                        type="text"
                        className="form-control"
                        name="seller"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="file">Price </label>
                    <input
                        onChange={handleFileChange}
                        type="number"
                        className="form-control"
                        name="price"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="file">Upload Image</label>
                    <input
                        onChange={handleFileChange}
                        type="file"
                        className="form-control"
                        placeholder="Upload Image"
                    />
                </div>

                



                <button type="submit" className="btn btn-success">
                    Submit
                </button>


            </form>
        </center>
    );
};

export default Inventory;