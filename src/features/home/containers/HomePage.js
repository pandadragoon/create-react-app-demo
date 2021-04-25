import React from 'react';
import HomePageBanner from '@home/components/HomePageBanner';
import useGetRecipes from '@hooks/useGetRecipes';
import RecipeCardList from '@home/components/RecipeCardList';;


export function HomePage() {
  const derp = useGetRecipes();
  const {loading, error} = derp

  return (
    <main className="home-page">
      <HomePageBanner />
      <div>
        {error ? (
          <h2>There was an error loading the data</h2>
        ) : null }
      </div>
      { loading ? (
          <h2>Loading...</h2>
        ) : (
          <RecipeCardList recipes={derp.resources} />
        )
      }
    </main>
  )
}

export default HomePage;
