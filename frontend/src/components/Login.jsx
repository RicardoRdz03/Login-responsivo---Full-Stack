import { Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import "../estilos.css";
import Aos from "aos";

function Login() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 md:block hidden">
        <div className="h-screen bg-stone-950 flex justify-center items-center flex-col">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-white">¡HOLA!</h1>
          </div>
          <div className="mb-20 px-8">
            <h2 className="text-base text-center text-white">
              Se parte de nosotros, inicia sesión en el siguiente formulario
            </h2>
          </div>
          <div data-aos="fade-up" className="flex justify-center">
            <img style={{ width: "350px" }} src="/fondo.png" alt="" />
          </div>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
        <div className="h-screen flex justify-center items-center flex-col ">
          <div className="w-11/12 md:w-8/12">
            <div
              data-aos="fade-up-right"
              className="flex justify-center mb-16 block md:hidden"
            >
              <img style={{ width: "88px" }} src="/nave.png" alt="" />
            </div>
            <div className="mb-12 ">
              <h1 className="text-center text-3xl font-bold md:text-5xl">
                Inicio de sesión
              </h1>
            </div>
            <div className="flex justify-center mb-5 px-12 md:px-2">
              <Input variant="underlined" type="text" label="Usuario" />
            </div>
            <div className="flex justify-center mb-20 px-12 md:px-2">
              <Input variant="underlined" type="password" label="Contraseña" />
            </div>
            <div className="flex justify-center">
              <button id="boton">INGRESAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
