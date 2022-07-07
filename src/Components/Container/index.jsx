import React from "react";
import Subtitle from "../Subtitle";
import Title from "../Title";
import Account from "../Account";

const Container = () => {
  return (
    <div className="container">
      <Title>Hi, there!</Title>
      <Subtitle>Welcome back!</Subtitle>
      <section className="content">
        <Account/>
      </section>
    </div>
  );
};

export default Container;
