import React from "react";

export const Work: React.FC = () => {
  const electron = (window as any).electron;
  return (
    <>
      <main>
        <div className="container pt-4">{electron.homeDir()}</div>
      </main>
    </>
  );
};
