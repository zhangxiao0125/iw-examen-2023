import { useSession, signIn, signOut } from "next-auth/react";
import { Navbar, Button, Dropdown } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItem = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const path = router.pathname;
  const pathIndex = router.pathname == "/";

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href={`http://${process.env.URL}/aparcamientos`}>
        <img src="logo-blue-3.png" className="mr-3 h-6 sm:h-9" alt="iHOME" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          ParkingNET
        </span>
      </Navbar.Brand>

      {pathIndex ? (
        <div></div>
      ) : (
        <div>
          <Navbar.Collapse>
            <Navbar.Link
              href="/aparcamientos"
              active={path == "/aparcamientos"}
            >
              aparcamientos
            </Navbar.Link>
            <Navbar.Link href="/users" active={path == "/users"}>
              Usuarios
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      )}

      {session ? (
        <div className="pl-2">
          <Button
            onClick={() => signOut()}
            className="bg-slate-600 hover:bg-slate-900"
          >
            Cerrar sesión
          </Button>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex-row flex">
          <div className="pl-2">
            <Button
              onClick={() => signIn()}
              className="bg-blue-600 hover:bg-blue-800"
            >
              Iniciar sesión
            </Button>
            <Navbar.Toggle />
          </div>
          <div className="px-2">
            <Link href="new-user">
              <Button className="bg-slate-600 hover:bg-slate-900">
                Registrarse
              </Button>
            </Link>
            <Navbar.Toggle />
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default NavbarItem;
