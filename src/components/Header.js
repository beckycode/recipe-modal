import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <img
        alt="24G logo"
        className="logo"
        src="https://assets.24g.com/public/2022-frontend-test-project/24g_logo.svg"
      />
      <section className="header__content">
        <h1 className="header__title">Welcome Holiday Text</h1>
        <p className="header__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          odio ac ante malesuada feugiat. Mauris pretium, nulla ac imperdiet
          suscipit, nibh enim pellentesque sapien, ut hendrerit dolor sapien
          gravida lacus.
        </p>
      </section>
    </header>
  );
};
