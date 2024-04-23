
import AutoSanoat from "../components/AutoSanoat/index.jsx";
import useUniqueId from "../hooks/index.jsx";
import React from "react";
const Home = React.lazy(() => import("../pages/HomePage/HomePage.jsx"));
const SignIn = React.lazy(() => import("../pages/SignInPage/SignInPage.jsx"));
const SignUp = React.lazy(() => import("../pages/SignUpPage/SignUpPage.jsx"));

export const navbar = [
  {
    id: useUniqueId,
    path: "home",
    title: "Home",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Home />
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: false,
  },
  {
    id: useUniqueId,
    path: "signin",
    title: "SignIn",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <SignIn />
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: false,
  },
  {
    id: useUniqueId,
    path: "signup",
    title: "SignUp",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <SignUp/>
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: false,
  },
  {
    id: useUniqueId,
    path: "automobilSanoat",
    title: "automobilSanoat",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <AutoSanoat/>
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: false,
  },
 
//   {
//     id: useUniqueId,
//     path: "properties/:id",
//     title: "Single house",
//     element: (
//       <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
//         <HouseItemPage />
//       </React.Suspense>
//     ),
//     isPrivate: false,
//     isHidden: true,
//   },
//   {
//     id: useUniqueId, 
//     path: "register",
//     title: "Register",
//     element: (
//       <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
//         <RegisterPage/>
//       </React.Suspense>
//     ),
//     isPrivate: false,
//     isHidden: true,
//   },
  
];
