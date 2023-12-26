import React from 'react'
import BackButton from "../../components/subcomponents/buttons/BackButton"

import ContentHeader from "../../components/maincomponents/content/ContentHeader";


const buttons = [
  <BackButton />,
];

const Expenses = () => {
  return (
    <>
      <ContentHeader buttons={buttons} title="Giderler" />

      Expenses cont
    </>
  )
}

export default Expenses