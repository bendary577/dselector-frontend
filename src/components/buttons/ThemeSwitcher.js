import React, { useContext } from "react";
import Switch from "react-switch";
import { IoMdSunny, IoMdMoon } from "react-icons/all";

import { ThemeContext } from "../../context/theme/ThemeProvider";

const getStyles = (mode) => ({
  switch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 35,
    paddingLeft: mode === "dark" ? 10 : 10
  }
});

const ThemeSwitcher = () => {
  const { setTheme, mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <Switch
      className="me-4"
      checked={mode === "light" ? true : false}
      height={40}
      width={100}
      offColor="#1d1f2f"
      onColor="#FDB813"
      handleDiameter={20}	
      checkedIcon={
        <IoMdSunny style={styles.switch} color="white" className="light" />
      }
      uncheckedIcon={
        <IoMdMoon style={styles.switch} color="white" className="dark" />
      }
      onChange={setTheme}
    />
  );
};

export default ThemeSwitcher;