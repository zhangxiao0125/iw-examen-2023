import { Card, Carousel } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const AparcamientoItem = ({ aparcamiento }) => {
  const router = useRouter();

  const deleted = async () => {
    await fetch(
      `http://${process.env.URL}/api/aparcamientos/${aparcamiento._id}`,
      {
        method: "DELETE",
      }
    ).then(router.push("/aparcamientos"));
  };
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUDINARY_URL,
    },
  });
  const myImage = cld.image(aparcamiento.public_id);
  myImage.resize(thumbnail().width(400).height(250)).roundCorners(byRadius(10));
  return (
    <Link href={`/aparcamiento?id=${aparcamiento._id}`}>
      <Card className="w-full h-full flex-col flex cursor-pointer">
        <AdvancedImage cldImg={myImage} />
        <div className="flex-col flex justify-start">
          <p className="w-full truncate text-xl font-bold text-gray-900">
            {aparcamiento.lat}, {aparcamiento.lng}
          </p>
          <p className="w-full truncate text-lg font-normal text-gray-700">
            {aparcamiento.direccion}
          </p>
          <div className="w-full flex flex-row">
            <p className="text-sm font-bold text-gray-900">
              {aparcamiento.nombre}
            </p>
          </div>{" "}
          <div className="w-full flex flex-row">
            <p className="text-sm font-bold text-gray-900">
              {aparcamiento.correo?.length > 0
                ? aparcamiento.correo
                : aparcamiento?.owner.email} {aparcamiento?.owner}
            </p>
          </div>
          <div className="w-full flex flex-row">
            <p className="text-sm font-bold text-gray-900">
              Capacidad:{aparcamiento.capacidad}
            </p>
          </div>
          <div className="w-full flex flex-row">
            <p className="text-sm font-bold text-gray-900">
              LIbres:{aparcamiento.libres}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default AparcamientoItem;
