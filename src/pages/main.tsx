import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { SideMenu } from "../components/side-menu/side-menu";

export const Main: React.FC = () => {
  return (
    <>
    <SideMenu />
      <header>
        <Header />
      </header>
      <main style={{ marginTop: '58px', marginLeft: '240px'}}>
        <div className="container pt-4" style={{ backgroundColor: 'orange'}}>
          <div className="container pt-4 mt-100">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};
