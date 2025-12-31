import Link from "next/link";
import React from "react";

export default function MedicinesPharmacy() {
  return (
    <div>
      <Link href={"/dashboard/pharmacy/medicines/add"}>
        <button className="btn border cursor-pointer bg-black text-white p-5">
          Add Medicine
        </button>
      </Link>
    </div>
  );
}
