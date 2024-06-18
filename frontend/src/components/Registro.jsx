import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import Aos from "aos";
import "../estilos.css";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

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
          <div data-aos="fade-down" className="flex justify-center pb-2">
            <img style={{ width: "200px" }} src="/blanco.png" alt="" />
          </div>
          <div>
            <img style={{ width: "475px" }} src="/raya.png" alt="" />
          </div>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
        <div className="h-screen flex justify-center items-center flex-col ">
          <div className=" md:w-8/12">
            <div
              data-aos="fade-down"
              className="flex justify-center mb-12 block md:hidden"
            >
              <img style={{ width: "88px" }} src="/astronave.png" alt="" />
            </div>
            <div className="mb-12 ">
              <h1 className="text-center text-3xl font-bold md:text-5xl">
                Registro
              </h1>
            </div>

            <form action="">
              <div className="flex justify-center mb-5 px-8 md:px-2 gap-2">
                <Input
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                  isRequired
                  variant="underlined"
                  type="text"
                  label="Nombre"
                />
                <Input
                  value={apellido}
                  onChange={(e) => {
                    setApellido(e.target.value);
                  }}
                  isRequired
                  variant="underlined"
                  type="text"
                  label="Apellidos"
                />
              </div>
              <div className="flex justify-center mb-5 px-8 md:px-2">
                <Input
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                  isRequired
                  variant="underlined"
                  type="email"
                  label="Correo electronico"
                />
              </div>
              <div className="flex justify-center mb-10 px-8 md:px-2 gap-2">
                <Input
                  value={usuario}
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                  isRequired
                  variant="underlined"
                  type="text"
                  label="Usuario"
                />
                <Input
                  value={contraseña}
                  onChange={(e) => {
                    setContraseña(e.target.value);
                  }}
                  isRequired
                  variant="underlined"
                  type="password"
                  label="Contraseña"
                />
              </div>
              <div className="flex justify-center">
                <button id="boton">REGISTRAR</button>
              </div>
            </form>

            <div className="flex justify-center mt-9 mb-2">
              <a href="#">
                <p className="text-center underline text-sm md:text-base">
                  ¿Olvidaste tu contraseña?
                </p>
              </a>
            </div>
            <div className="flex justify-center">
              <p className="text-sm md:text-base">
                ¿No puedes iniciar sesión?{" "}
                <a className="text-center" href="#">
                  <span className="underline">Pulsa aquí</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
