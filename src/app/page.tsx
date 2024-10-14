import Image from "next/image";


export default function Home() {

  let products: any[];

  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response:any) => {
        console.log(response);
      })
      .catch((error:any) => {
        alert(error);
      });
  }

  getProducts();
  return (
    <div>
      <h1>Fake Store App</h1>
    </div>
    

        
  );
}
