import React from "react";

export const Work: React.FC = () => {
  const electron = (window as any).electron;
  return (
    <>
      {electron.homeDir()}
      {/* {electron.getBaseFiles()} */}
    </>
  );
};
