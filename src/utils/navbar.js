import Home from "../components/Home";

export const navbar = [
    {
        id: 1,
        path: "uslugi",
        title: "Наши услуги",
        element: (
          <Home/>
        ),
        isPrivate: false,
        isHidden: false,
      },
      {
        id: 2,
        path: "onas",
        title: "О нас",
        element: (
          <Home/>
        ),
        isPrivate: false,
        isHidden: false,
      },
      {
        id: 3,
        path: "komanda",
        title: "Наша команда",
        element: (
          <Home/>
        ),
        isPrivate: false,
        isHidden: false,
      },
      {
        id: 4,
        path: "nami",
        title: "Свяжитесь с нами",
        element: (
          <Home/>
        ),
        isPrivate: false,
        isHidden: false,
      },
]