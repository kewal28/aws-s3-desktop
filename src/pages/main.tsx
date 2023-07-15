import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { SideMenu } from "../components/side-menu/side-menu";

export const Main: React.FC = () => {
  return (
    <div>
      <SideMenu />
      <Header />
      <main>
        <div className="container pt-4 mt-100" style={{ marginTop: '20px', marginLeft: '240px' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
