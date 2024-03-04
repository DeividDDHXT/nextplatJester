import { Hero } from "./components/home/Hero";
import { Descripcion } from "./components/home/Description";
import { MainProducts } from "./components/home/MainProducts";


export default function Home() {
console.log("hola mundo pagina de inicio");

  return (
    <main >
     <Hero />
     <Descripcion />
     <MainProducts />

    </main>
  );
}
