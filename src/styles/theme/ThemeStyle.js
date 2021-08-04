import {theme} from '../../context/theme/Theme';

export const themeStyles = (mode) => ({
  //---------------------------------- general app styling ----------------------
  app: {
    height: "100%",
    width: "100%",
    backgroundColor: theme[mode].app.backgroundColor,
    color : theme[mode].app.color
    },
    home : {
      //-------------------------------- navbar styling --------------------------
      navbar: {
        backgroundColor: theme[mode].home.navbar.backgroundColor,
        color : theme[mode].home.navbar.color
      },
      //-------------------------------- about section styling -------------------
      about : {
        section : {
          backgroundColor : theme[mode].home.about.section.backgroundColor,
          color : theme[mode].home.about.section.color,
        },
        card : {
          backgroundColor : theme[mode].home.about.card.backgroundColor,
          color : theme[mode].home.about.card.color,
          width : '300px',
          height : '300px'
        }
      },
      //-------------------------------- scrolling row section styling -------------
      scrolling_row : {
        backgroundColor : theme[mode].home.scrolling_row.backgroundColor,
        color : theme[mode].home.scrolling_row.color,
        height : '100px'
      },
      footer : {
        backgroundColor : theme[mode].home.footer.backgroundColor,
        color : theme[mode].home.footer.color,
        height : '300px',
      }
    },
    auth : {
      signup : {
        height : '1200px',
        margin : '100px',
      },
      auth_screens : {
        height : '500px',
        marginTop : '100px',
        marginRight : '200px',
        marginLeft : '200px',
        marginBottom : '200px',
      },
    },
    buttons : {
      //---------------------------------- main button styling -----------------------
      main_button : {
        backgroundColor : theme[mode].buttons.main_button.backgroundColor,
        color : theme[mode].buttons.main_button.color
      },
      secondary_button : {
        backgroundColor : theme[mode].buttons.secondary_button.backgroundColor,
        color : theme[mode].buttons.secondary_button.color
      }
    },
    inputs : {
      text_input : {
        backgroundColor : theme[mode].inputs.text_input.backgroundColor
      }
    }
 
  });
  