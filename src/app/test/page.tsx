"use client"

import { revalidate } from "@/actions/user";

const TestPage = async () => {

  const handleClick = async () => {
    await revalidate()
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <button onClick={handleClick}>Revalidate</button>
    </main>
  );
};

export default TestPage;
