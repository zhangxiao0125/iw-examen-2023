import { ImageUpload } from "../components/cloudinary-upload-widget";
import { useRouter } from "next/router";
import { useState } from "react";
import NavbarItem from "../components/navbar";
import { Button, TextInput, Textarea } from "flowbite-react";

const EditAparcamiento = ({ aparcamiento }) => {
  const router = useRouter();

  const [titleValue, setTitle] = useState(aparcamiento.title);
  const [descriptionValue, setDescription] = useState(
    aparcamiento.description ? aparcamiento.description : null
  );
  const [addressValue, setAddress] = useState(aparcamiento.address);
  const [priceValue, setPrice] = useState(aparcamiento.price);
  const [ownerValue, setOwner] = useState(aparcamiento.owner);
  const [latValue, setLat] = useState(aparcamiento.lat);
  const [lngValue, setLng] = useState(aparcamiento.lng);
  const [public_idValue, setPublic_id] = useState(aparcamiento.public_id);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `http://${process.env.URL}/api/aparcamientos/${aparcamiento._id}`,
      {
        body: JSON.stringify({
          title: event.target.title.value,
          description: event.target.description.value,
          address: event.target.address.value,
          price: event.target.price.value,
          owner: event.target.owner.value,
          lat: event.target.lat.value,
          lng: event.target.lng.value,
          public_id: event.target.public_id.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      }
    ).then((response) => {
      router.push(`/aparcamientos`);
    });
  };

  return (
    <>
      <NavbarItem />

      <div className="flex-col flex w-full h-screen space-y-4 mt-10 items-center">
        <h1 className="text-2xl font-normal ">Editar aparcamiento</h1>
        <form onSubmit={handleSubmit}>
          <div className="pb-2 w-96">
            <div>
              <label className="text-gray-800" htmlFor="title">
                {" "}
                Título{" "}
              </label>
            </div>
            <TextInput
              id="title"
              name="title"
              value={titleValue}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="pb-2">
            <div>
              <label className="text-gray-800" htmlFor="description">
                {" "}
                Descripcion{" "}
              </label>
            </div>
            <Textarea
              id="description"
              sizing="lg"
              name="description"
              type="textarea"
              rows={4}
              value={descriptionValue}
              className="text-sm"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="pb-2">
            <div>
              <label className="text-gray-800" htmlFor="address">
                {" "}
                Dirección{" "}
              </label>
            </div>
            <TextInput
              id="address"
              name="address"
              value={addressValue}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="pb-2">
            <div>
              <label className="text-gray-800" htmlFor="price">
                {" "}
                Precio por noche
              </label>
            </div>
            <TextInput
              id="price"
              name="price"
              value={priceValue}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="pb-2">
            <div>
              <label className="text-gray-800" htmlFor="owner">
                {" "}
                Identificador de propietario
              </label>
            </div>
            <TextInput
              id="owner"
              name="owner"
              value={ownerValue}
              onChange={(event) => setOwner(event.target.value)}
            />
          </div>
          <div className="pb-2">
            <div>
              <label className="text-gray-800" htmlFor="lat">
                {" "}
                Latitud
              </label>
            </div>
            <TextInput
              id="lat"
              name="lat"
              value={latValue}
              onChange={(event) => setLat(event.target.value)}
            />
          </div>
          <div className="pb-2">
            <div>
              <label className="text-gray-800" htmlFor="lng">
                {" "}
                Longitud
              </label>
            </div>
            <TextInput
              id="lng"
              name="lng"
              value={lngValue}
              onChange={(event) => setLng(event.target.value)}
            />
          </div>
          <div className="pb-4">
            <div>
              <label className="text-gray-800" htmlFor="public_id">
                {" "}
                Identificador de foto
              </label>
            </div>
            <TextInput
              id="public_id"
              name="public_id"
              value={public_idValue}
              onChange={(event) => setPublic_id(event.target.value)}
              disabled={true}
            />
            <div className="pt-4">
              <ImageUpload />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button type="submit">Modificar</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const aparcamiento = await fetch(
    `http://${process.env.URL}/api/aparcamientos/${id}`
  ).then((response) => response.json());

  return {
    props: {
      aparcamiento,
    },
  };
}

export default EditAparcamiento;
