import { render } from "@testing-library/react";
import AllPhotos from "./AllPhotos";

import React from "react";
describe("AllPhotos component suite", () => {

  test("renders AllPhotos component", () => {
    render(<AllPhotos photos={
      [
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
            tiny:
              "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
          liked: false,
          alt: "Photo of Two Pigeons",
        }
      ]
    } />);
  });

});
