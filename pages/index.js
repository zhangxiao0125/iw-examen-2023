import { Button, Carousel } from "flowbite-react";
import Link from "next/link";
import NavbarItem from "../components/navbar";

const Home = (props) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div>
        <NavbarItem />
      </div>
      <div className="relative flex flex-row w-full h-full">
        <div className="flex flex-col w-full place-content-center">
          <div className="flex flex-col pl-24 space-y-2">
            <p className="text-5xl font-semibold text-gray-900 ">
              Bienvenido al ParkingNET
            </p>
            <p className="text-3xl font-light text-gray-900">
              aparcamientos para todos{" "}
            </p>
            <div className="pt-2">
              <Link href="/aparcamientos">
                <Button className="bg-blue-600 hover:bg-blue-800">
                  Comenzar
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col w-full h-full px-24 py-10">
          <Carousel className="h-full">
            <img
              src="http://images.unsplash.com/photo-1612972735944-ed73dd220d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              alt="Imagen carousel 1"
            />
            <img
              src="http://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Imagen carousel 2"
            />
            <img
              src="http://images.unsplash.com/photo-1614485294972-5724216bf796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="Imagen carousel 3"
            />
            <img
              src="http://images.unsplash.com/photo-1502700559166-5792585222ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80"
              alt="Imagen carousel 4"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
