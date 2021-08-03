import {theme} from '../../context/theme/Theme';

export const themeStyles = (mode) => ({
  app: {
    height: "100%",
    width: "100%",
    backgroundColor: theme[mode].app.backgroundColor,
    color : theme[mode].app.color
    },
  navbar: {
      backgroundColor: theme[mode].navbar.backgroundColor,
      color : theme[mode].navbar.color
    },
  main_button : {
      backgroundColor : theme[mode].main_button.backgroundColor,
      color : theme[mode].main_button.color
    },
  text: {
      fontWeight: "200",
      color: theme[mode].color
    },
  theme: {
      color: theme[mode].highlight
    }
  });
  