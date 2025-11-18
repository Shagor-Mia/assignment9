import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen w-screen px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1 bg-[#f5f5f5]">
      {children}
    </div>
  );
};

export default Container;
