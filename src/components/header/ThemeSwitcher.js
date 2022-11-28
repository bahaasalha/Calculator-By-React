import ThemeButtons from "./ThemeButtons";

const ThemeSwitcher = (props) => {
  return (
    <section className="themes">
      <p>By Eng.Bahaa Ariq Salha</p>
      <p>THEME</p>
      <ThemeButtons HandleThemeChange={props.HandleThemeChange} />
    </section>
  );
};

export default ThemeSwitcher;
