"use client";
import Cards from "@/components/Cards";
import NavbarComponent from "@/components/Navbar";
import ProductActions from "@/controller/Actions";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [getData, setgetData] = useState([]);

  const runProgram = async () => {
    try {
      const callApi = await ProductActions();
      console.log("call", callApi);
      setgetData(callApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    runProgram();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="">
        <h1>Homepage, list of all products</h1>
        {getData?.map((e, i) => (
          <Cards data={e} key={i} />
        ))}
      </div>
    </>
  );
}
