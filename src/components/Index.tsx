import React from "react";
import Link from "next/link";
const Index: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Link href="/about">About</Link>
    </div>
  );
};
export default Index;
