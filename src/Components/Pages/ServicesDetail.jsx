
import React from "react";
import { useParams } from "react-router-dom";
import D1 from "../servicesDetail/D1";
import D2 from "../servicesDetail/D2";

const ServicesDetail = () => {
  const { id } = useParams();

  return (
    <div className="h-auto py-7">
      <D1 id={id} />
      <D2 id={id} />
    </div>
  );
};

export default ServicesDetail;
