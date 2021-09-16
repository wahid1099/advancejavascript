const getdata=()=>{

    console.log("Button clicked");

    const productInput=document.getElementById("product-name");
    const productname=productInput.value;
    const productInopt=document.getElementById("product-price");
    const productprice=productInopt.value;


    const products={
        name: productname,
        price: productprice
    }

    localStorage.setItem("products", JSON.stringify(products));
    // localStorage.setItem("productname",productname);
    // localStorage.setItem("producprice",productprice);

    // displayproduct(productname,productprice);

}

const displayproduct=(name,price) => {

}