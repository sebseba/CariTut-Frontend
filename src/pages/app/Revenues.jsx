import React from 'react'
import BackButton from "../../components/subcomponents/buttons/BackButton"

import ContentHeader from "../../components/maincomponents/content/ContentHeader";

const buttons = [
  <BackButton/>,
  ];

const Revenues = () => {
  return (
    <>
      <ContentHeader buttons={buttons} title="Gelirler"/>
      Gelirler
    </>
   )
}

export default Revenues