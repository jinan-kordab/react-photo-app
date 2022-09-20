import React from "react";
import { render } from "@testing-library/react";
import SearchAppBar from "./components/SearchAppBar";
import Skel from "./components/Skeleton";
import AllPhotos from "./components/AllPhotos";

describe("App component suite", () => {
  test("renders SearchAppBar component", () => {
    render(
      <SearchAppBar
        fetchedHeaderData={null}
        searchString={null}
        onSearchPhotos={null}
        onNextPageClicked={null}
        onPreviousPageClicked={null}
      />
    );
  });

  test("renders Skel component", () => {
    render(<Skel />);
  });

  test("renders AllPhotos component", () => {
    render(
      <AllPhotos
        photos={[
          {
            id: 1406506,
            width: 3708,
            height: 3012,
            url: "https://www.pexels.com/photo/photo-of-two-pigeons-1406506/",
            photographer: "Ashithosh U",
            photographer_url: "https://www.pexels.com/@ashuphotography",
            photographer_id: 611418,
            avg_color: "#9D9989",
            src: {
              original:
                "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg",
              large2x:
                "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Photo of Two Pigeons",
          },
          {
            id: 110812,
            width: 3849,
            height: 2544,
            url: "https://www.pexels.com/photo/white-and-black-birds-piercing-on-tree-branch-110812/",
            photographer: "daniyal ghanavati",
            photographer_url: "https://www.pexels.com/@daniyal-ghanavati-10741",
            photographer_id: 10741,
            avg_color: "#477131",
            src: {
              original:
                "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg",
              large2x:
                "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "White and Black Birds Piercing on Tree Branch",
          },
          {
            id: 45853,
            width: 5315,
            height: 3555,
            url: "https://www.pexels.com/photo/2-grey-and-black-birds-45853/",
            photographer: "Pixabay",
            photographer_url: "https://www.pexels.com/@pixabay",
            photographer_id: 2659,
            avg_color: "#584D31",
            src: {
              original:
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg",
              large2x:
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "2 Grey and Black Birds",
          },
          {
            id: 416179,
            width: 6026,
            height: 4020,
            url: "https://www.pexels.com/photo/animal-avian-beak-bird-416179/",
            photographer: "Pixabay",
            photographer_url: "https://www.pexels.com/@pixabay",
            photographer_id: 2659,
            avg_color: "#7A8E51",
            src: {
              original:
                "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg",
              large2x:
                "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Shallow Focus Photography of Gray and Orange Bird",
          },
          {
            id: 1386454,
            width: 4980,
            height: 3321,
            url: "https://www.pexels.com/photo/monochrome-photo-of-flock-of-flying-birds-1386454/",
            photographer: "Aleksandar Pasaric",
            photographer_url: "https://www.pexels.com/@apasaric",
            photographer_id: 105079,
            avg_color: "#ECECEC",
            src: {
              original:
                "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg",
              large2x:
                "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Monochrome Photo of Flock of Flying Birds",
          },
          {
            id: 792416,
            width: 4167,
            height: 2976,
            url: "https://www.pexels.com/photo/photography-of-small-blue-and-brown-bird-792416/",
            photographer: "Tina Nord",
            photographer_url: "https://www.pexels.com/@nord6",
            photographer_id: 259428,
            avg_color: "#A4A3A5",
            src: {
              original:
                "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg",
              large2x:
                "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Photography of Small Blue and Brown Bird",
          },
          {
            id: 1133957,
            width: 3579,
            height: 2389,
            url: "https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/",
            photographer: "Philippe Donn",
            photographer_url: "https://www.pexels.com/@philippedonn",
            photographer_id: 230606,
            avg_color: "#685456",
            src: {
              original:
                "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
              large2x:
                "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Brown Hummingbird Selective Focus Photography",
          },
          {
            id: 1156507,
            width: 3979,
            height: 3444,
            url: "https://www.pexels.com/photo/brown-bird-flying-towards-birdhouse-1156507/",
            photographer: "Kevin Blanzy",
            photographer_url: "https://www.pexels.com/@kevin-blanzy-440998",
            photographer_id: 440998,
            avg_color: "#6B714A",
            src: {
              original:
                "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg",
              large2x:
                "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Brown Bird Flying Towards Birdhouse",
          },
          {
            id: 37833,
            width: 4272,
            height: 2848,
            url: "https://www.pexels.com/photo/blue-geeen-and-orange-parrot-37833/",
            photographer: "Pixabay",
            photographer_url: "https://www.pexels.com/@pixabay",
            photographer_id: 2659,
            avg_color: "#423423",
            src: {
              original:
                "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg",
              large2x:
                "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Blue Geeen and Orange Parrot",
          },
          {
            id: 207237,
            width: 3648,
            height: 5472,
            url: "https://www.pexels.com/photo/seagulls-flying-above-water-207237/",
            photographer: "Pixabay",
            photographer_url: "https://www.pexels.com/@pixabay",
            photographer_id: 2659,
            avg_color: "#CAD3D8",
            src: {
              original:
                "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg",
              large2x:
                "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Seagulls Flying above Water",
          },
          {
            id: 1721675,
            width: 4927,
            height: 3285,
            url: "https://www.pexels.com/photo/photo-of-flock-of-birds-in-the-sky-1721675/",
            photographer: "Fahad AlAni",
            photographer_url: "https://www.pexels.com/@fahad-alani-789729",
            photographer_id: 789729,
            avg_color: "#F2EDE6",
            src: {
              original:
                "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg",
              large2x:
                "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Photo of Flock Of Birds in the Sky ",
          },
          {
            id: 1098254,
            width: 5184,
            height: 3456,
            url: "https://www.pexels.com/photo/two-green-parrots-1098254/",
            photographer: "Aashutosh Sharma",
            photographer_url: "https://www.pexels.com/@aashu56781",
            photographer_id: 358723,
            avg_color: "#A9C9B4",
            src: {
              original:
                "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg",
              large2x:
                "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Two Green Parrots",
          },
          {
            id: 36846,
            width: 2273,
            height: 3396,
            url: "https://www.pexels.com/photo/black-and-white-eagle-36846/",
            photographer: "Pixabay",
            photographer_url: "https://www.pexels.com/@pixabay",
            photographer_id: 2659,
            avg_color: "#5F5D55",
            src: {
              original:
                "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg",
              large2x:
                "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Black and White Eagle",
          },
          {
            id: 326900,
            width: 2000,
            height: 1333,
            url: "https://www.pexels.com/photo/close-up-photo-of-perched-kingfisher-326900/",
            photographer: "Pixabay",
            photographer_url: "https://www.pexels.com/@pixabay",
            photographer_id: 2659,
            avg_color: "#BDAB5A",
            src: {
              original:
                "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg",
              large2x:
                "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Close-up Photo of Perched Kingfisher",
          },
          {
            id: 1268874,
            width: 3532,
            height: 2350,
            url: "https://www.pexels.com/photo/flock-of-white-seagulls-flying-over-the-ocean-1268874/",
            photographer: "Asad Photo Maldives",
            photographer_url: "https://www.pexels.com/@asadphotography",
            photographer_id: 45786,
            avg_color: "#61AEBC",
            src: {
              original:
                "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg",
              large2x:
                "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Flock of White Seagulls Flying over the Ocean ",
          },
          {
            id: 162140,
            width: 4275,
            height: 2539,
            url: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
            photographer: "Pixabay",
            photographer_url: "https://www.pexels.com/@pixabay",
            photographer_id: 2659,
            avg_color: "#756246",
            src: {
              original:
                "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg",
              large2x:
                "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              large:
                "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              medium:
                "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350",
              small:
                "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=130",
              portrait:
                "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
              landscape:
                "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              tiny: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            },
            liked: false,
            alt: "Duckling on Black Soil during Daytime",
          },
        ]}
      />
    );
  });
});
