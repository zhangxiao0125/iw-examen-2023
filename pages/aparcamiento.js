import { Avatar, Button, TextInput, Textarea } from "flowbite-react";
import emailjs from "@emailjs/browser";
import { useSession, getSession } from "next-auth/react";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarItem from "../components/navbar";
import MapItem from "../components/map";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const House = ({ house: aparcamiento, owner, reviews, loggedUser }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUDINARY_URL,
    },
  });

  const myImage = cld.image(aparcamiento.public_id);
  myImage.resize(fill().width(1000).height(700)).roundCorners(byRadius(10));

  const myImage2 = cld.image(owner.public_id);
  myImage2
    .resize(thumbnail().width(60).height(60).gravity(focusOn(FocusOn.face())))
    .roundCorners(byRadius(100));

  /** Variables para las reseñas */
  const userReview = useRef();
  const scoreReview = useRef();
  const titleReview = useRef();
  const descriptionReview = useRef();
  const housingReview = useRef();

  /** Variables para la reserva */
  const startDateBooking = useRef();
  const endDateBooking = useRef();
  const userBooking = useRef();
  const housingBooking = useRef();
  const guestsBooking = useRef();

  /** Variables para los comentarios */
  const userComment = useRef();
  const descriptionComment = useRef();
  const reviewComment = useRef();

  const submitComment = async () => {
    await fetch(`http://${process.env.URL}/api/comments`, {
      body: JSON.stringify({
        user: userComment.current.value,
        description: descriptionComment.current.value,
        review: reviewComment.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const submitBooking = async () => {
    await fetch(`http://${process.env.URL}/api/bookings`, {
      body: JSON.stringify({
        startDate: startDateBooking.current.value,
        endDate: endDateBooking.current.value,
        user: document.getElementById("userBooking").value,
        housing: housingBooking.current.value,
        guests: guestsBooking.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const submitReview = async () => {
    await fetch(`http://${process.env.URL}/api/reviews`, {
      body: JSON.stringify({
        user: userReview.current.value,
        score: scoreReview.current.value,
        title: titleReview.current.value,
        description: descriptionReview.current.value,
        housing: housingReview.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    /* Lo comento para no consumir cuota de EmailJS cada vez que se envia una review */
    await emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE,
        process.env.EMAILJS_TEMPLATE,
        document.getElementById("reviewForm"),
        process.env.EMAILJS_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    /* Lo comento para no consumir cuota de EmailJS cada vez que se envia una review */
  };

  const deleteAparcamiento = async () => {
    await fetch(`http://${process.env.URL}/api/aparcamientos/${aparcamiento._id}`, {
      method: "DELETE",
    }).then(router.push("/aparcamientos"));
  };

  const deleteComment = async (comentario) => {
    await fetch(`http://${process.env.URL}/api/comments/${comentario}`, {
      method: "DELETE",
    }).then(router.push(`/aparcamiento?id=${aparcamiento._id}`));
  };

  const deleteReview = async (review) => {
    await fetch(`http://${process.env.URL}/api/reviews/${review}`, {
      method: "DELETE",
    }).then(router.push(`/aparcamiento?id=${aparcamiento._id}`));
  };

  const containerStyle = {
    position: "relative",
    width: "80vw",
    height: "80vh",
  };

  const center = {
    lat: aparcamiento.lat,
    lng: aparcamiento.lng,
  };

  function reviewsView(review) {
    const reviewer = cld.image(review.user.public_id);
    reviewer
      .resize(thumbnail().width(40).height(40).gravity(focusOn(FocusOn.face())))
      .roundCorners(byRadius(100));

    return (
      <div className="w-auto py-4">
        <div className="flex flex-col">
          {/** Reseña */}
          <div className="flex flex-row space-x-2">
            <div>
              <Link href={`user/?id=${review.user._id}`}>
                <AdvancedImage cldImg={reviewer} />
              </Link>
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-bold">
                {review.user.name + " " + review.user.surname}{" "}
              </p>
              <p className="text-sm font-normal text-grey-800 ">
                {review.score + " sobre 10"}{" "}
              </p>
              <div className="flex flex-row space-x-3 items-center">
                <div className="flex flex-col">
                  <p className="font-medium text-grey-800">{review.title} </p>
                  <p className="text-sm font-light">{review.description} </p>
                </div>

                {/** Botón de eliminar reseña */}
                <div>
                  {session ? (
                    loggedUser._id == review.user._id ? (
                      <div className="cursor-pointer">
                        <a onClick={() => deleteReview(review._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </a>
                      </div>
                    ) : null
                  ) : (
                    <div className="cursor-pointer">
                      <a onClick={() => deleteReview(review._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/** Comentarios */}
          <div className="flex flex-col pl-12 space-y-4 pt-4">
            {review.comments && review.comments.length > 0
              ? review.comments.map((comment) => {
                  const responder = cld.image(comment.user.public_id);
                  responder
                    .resize(
                      thumbnail()
                        .width(35)
                        .height(35)
                        .gravity(focusOn(FocusOn.face()))
                    )
                    .roundCorners(byRadius(100));

                  return (
                    <div className="w-auto">
                      <div className="flex flex-row space-x-2">
                        <div>
                          <Link href={`user/?id=${comment.user._id}`}>
                            <AdvancedImage cldImg={responder} />
                          </Link>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row space-x-2">
                            <p className="text-sm font-semibold">
                              {comment.user.name + " " + comment.user.surname}{" "}
                            </p>

                            {/** Botón de eliminar comentario */}
                            <div>
                              {session ? (
                                loggedUser._id == comment.user._id ? (
                                  <div className="cursor-pointer">
                                    <a
                                      onClick={() => deleteComment(comment._id)}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M6 18L18 6M6 6l12 12"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                ) : null
                              ) : (
                                <div className="cursor-pointer">
                                  <a onClick={() => deleteComment(comment._id)}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>

                          <p className="text-sm font-normal text-gray-700">
                            {comment.description}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}

            {/** Añadir comentario */}
            <div className="w-1/2">
              <form
                onSubmit={submitComment}
                action={`http://${process.env.URL}/housing`}
                className="space-y-2"
              >
                <input
                  type="text"
                  hidden={true}
                  id="id"
                  name="id"
                  value={aparcamiento._id}
                />

                {session ? (
                  <input
                    type="text"
                    hidden={true}
                    id="userComment"
                    name="_userComment"
                    ref={userComment}
                    value={loggedUser._id}
                  />
                ) : (
                  <input
                    type="text"
                    hidden={true}
                    id="userComment"
                    name="_userComment"
                    ref={userComment}
                    value={"63849607a19b1a6fb9746b83"}
                  />
                )}

                <div>
                  <Textarea
                    id="descriptionComment"
                    required={true}
                    type="textarea"
                    rows={2}
                    name="_descriptionComment"
                    placeholder="Añadir Comentario"
                    className="text-sm"
                    ref={descriptionComment}
                  />
                </div>

                <input
                  type="text"
                  hidden={true}
                  id="reviewComment"
                  name="_reviewComment"
                  ref={reviewComment}
                  value={review._id}
                />

                <div className="">
                  <Button
                    type="submit"
                    className="bg-slate-400 hover:bg-slate-500 "
                  >
                    Comentar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <NavbarItem />
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col items-start w-auto h-full mx-96 my-12">
          <div className="flex flex-col w-full h-full space-y-4">
            <div>
              <p className="text-3xl font-semibold text-gray-800">
                {aparcamiento.title}
              </p>
              <p className="text-base font-normal underline">{aparcamiento.address}</p>
              <p className="text-base font-medium">{aparcamiento.price}€ por noche</p>
            </div>
            <div className="flex flex-col w-full pt-4 space-y-4">
              <p className="text-base">{aparcamiento.description}</p>
              <div className="flex flex-row space-x-2 mt-4">
                {session
                  ? session.user.email === owner.email
                    ? [
                        <Button className="bg-blue-600 hover:bg-blue-800">
                          <Link href={`edit-aparcamiento/?id=${aparcamiento._id}`} passHref>
                            Editar aparcamiento
                          </Link>
                        </Button>,
                        <Button
                          onClick={deleteAparcamiento}
                          className="bg-amber-600 hover:bg-amber-800"
                        >
                          Borrar aparcamiento
                        </Button>,
                      ]
                    : null
                  : [
                      <Button className="bg-blue-600 hover:bg-blue-800">
                        <Link href={`edit-aparcamiento/?id=${aparcamiento._id}`} passHref>
                          Editar aparcamiento
                        </Link>
                      </Button>,
                      <Button
                        onClick={deleteAparcamiento}
                        className="bg-amber-600 hover:bg-amber-800"
                      >
                        Borrar aparcamiento
                      </Button>,
                    ]}
              </div>
            </div>
            {/** Imagen aparcamiento y Mapa */}
            <div className="relative w-full">
              <div className="flex flex-row gap-x-5">
                <AdvancedImage cldImg={myImage} />

                <div>
                  <MapItem
                    containerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-row">
              {/** Información, Reseñas y Comentarios. 1er div */}
              <div className="flex flex-col w-full space-y-2">
                {/** Informacion del aparcamiento */}
                <div className="flex flex-col w-10/12 h-full divide-y divide-slate-200 space-y-4">
                  <div className="flex flex-row items-center">
                    <div className="flex flex-col">
                      <Link href={`user/?id=${owner._id}`}>
                        <AdvancedImage cldImg={myImage2} />
                      </Link>
                    </div>

                    <div className="flex flex-col pl-4">
                      <p className="text-xl font-semibold text-grey-800">
                        {owner.name + " " + owner.surname}{" "}
                      </p>
                      <p className="text-grey-800 font-normal">
                        {"@" + owner.username}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const house = await fetch(
    `http://${process.env.URL}/api/aparcamientos/${id}`
  ).then((response) => response.json());

  const owner = await fetch(
    `http://${process.env.URL}/api/users/${house.owner}`
  ).then((response) => response.json());

  const reviews = await fetch(
    `http://${process.env.URL}/api/reviews/housing/${id}`
  ).then((response) => response.json());

  for (const review of reviews) {
    const user = await fetch(
      `http://${process.env.URL}/api/users/${review.user}`
    ).then((response) => response.json());
    review.user = user;

    const comments = await fetch(
      `http://${process.env.URL}/api/comments/review/${review._id}`
    ).then((response) => response.json());
    for (const comment of comments) {
      const user = await fetch(
        `http://${process.env.URL}/api/users/${comment.user}`
      ).then((response) => response.json());
      comment.user = user;
    }
    review.comments = comments;
  }

  const session = await getSession(ctx);

  if (session) {
    const loggedUser = await fetch(
      `http://${process.env.URL}/api/users/email/${session.user.email}`
    ).then((response) => response.json());

    if (!loggedUser.length) {
      return {
        redirect: {
          destination: "/users",
        },
      };
    }

    return {
      props: {
        house,
        owner,
        reviews,
        loggedUser: loggedUser[0],
      },
    };
  }

  return {
    props: {
      house,
      owner,
      reviews,
      loggedUser: null,
    },
  };
}

export default House;
