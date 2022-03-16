import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { ADMIN } from "./helpers/consts";

import AboutUsPage from "./pages/AboutUsPage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import ContactUs from "./pages/ContactUs";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import EditProductPage from "./pages/EditProductPage";
import ChapterPage from "./pages/ChapterPage";
import SighIn from "./Chat/SighIn";
import Chat from "./Chat/Chat";
import ChatPage from "./pages/ChatPage";
import FavoritiesPage from "./pages/FavoritiesPage";
import Peyment from "./pages/Peyment";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/aboutus",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 6,
    },
    {
      link: "/contacts",
      element: <ContactUs />,
      id: 7,
    },
    {
      link: "/chapter/:id",
      element: <ChapterPage />,
      id: 9,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 10,
    },
    {
      link: "/signin",
      element: <SighIn />,
      id: 11,
    },
    {
      link: "/favorite",
      element: <FavoritiesPage />,
      id: 12,
    },
    {
      link: "/chat",
      element: <ChatPage />,
      id: 13,
    },
    {
      link: "/peyment",
      element: <Peyment />,
      id: 14,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
