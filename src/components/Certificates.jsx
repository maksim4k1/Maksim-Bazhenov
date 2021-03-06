import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import { connect } from "react-redux";
import List from "./UI/List";

function Certificates ({certificates}) {
  return(
    <Section>
      <Title>Сертификаты</Title>
      <List list={certificates} type="certificate" />
    </Section>
  );
}

const stateToProps = (state) => ({
  certificates: state.certificates
})

export default connect(stateToProps)(Certificates);