import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { OrderScene } from "@/scenes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<Navigate to={routes.order} />} />
        <Route path={routes.order} element={<OrderScene />} />
        <Route path="*" element={<Navigate to={routes.order} />} />
      </Routes>
    </BrowserRouter>
  );
};
