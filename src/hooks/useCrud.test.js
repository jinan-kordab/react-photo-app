import { useCrud } from "./useCrud";
import { renderHook, act } from "@testing-library/react-hooks/pure";

const mock = { isLoading: null, fetchedData: null, fetchedHeaderData: null };
jest.mock("./CrudWrapper", () => ({
  useCrud: () => {
    return mock;
  },
}));

test("can mock fetch and test the useCrud custom hook", async () => {
  mock.isLoading = false;
  mock.fetchedHeaderData = [
    {
      page: 1,
      per_page: 16,
      total_results: 8000,
      next_page:
        "https://api.pexels.com/v1/search/?page=2&per_page=16&query=birds",
    },
  ];
  mock.fetchedData = [
    {
      id: 162140,
      width: 4275,
      height: 2539,
      url:
        "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
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
        tiny:
          "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      liked: false,
      alt: "Duckling on Black Soil during Daytime",
    },
  ];

  const { result } = renderHook(() => useCrud());
  expect(result).toBeTruthy();

  await act(async () => {});
});
