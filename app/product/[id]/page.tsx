"use client";
import Cards from "@/components/Cards";
import { ProductActionsById } from "@/controller/Actions";
import { useParams } from "next/navigation"; // Change import
import React, { useEffect, useState } from "react";

export default function ProductId() {
  const { id }: any = useParams();
  console.log(id);
  const [getData, setgetData] = useState<any>({});

  const CallAPIById = async () => {
    try {
      const callfunc = await ProductActionsById(id);
      setgetData(callfunc);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CallAPIById();
  }, [id]);

  return (
    <>
      <header>Product Details</header>
      {getData && <Cards data={getData} />}
    </>
  );
}
