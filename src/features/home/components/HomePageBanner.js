import React from 'react'
import logo from "common/images/logo.png";
import HomePageHeader from './HomePageHeader';

export default function HomePageBanner() {
  return (
    <section className={'home-page-banner'}>
      <img src={logo} alt={"Recipes of the day logo"} />
      <HomePageHeader title={'Recipes of the Day'} />
    </section>
  )
}
