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
      welcome : {
        backgroundColor : theme[mode].home.welcome.backgroundColor,
        color : theme[mode].home.welcome.color,
        image : {
          boxShadow : theme[mode].home.welcome.image,
        },
        card : {
          backgroundColor: theme[mode].home.welcome.card.backgroundColor,
          color : theme[mode].home.welcome.card.color
        }
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
      presentation : {
        backgroundColor : theme[mode].home.presentation.backgroundColor,
        color : theme[mode].home.presentation.color
      },
      //-------------------------------- scrolling row section styling -------------
      scrolling_row : {
        backgroundColor : theme[mode].home.scrolling_row.backgroundColor,
        color : theme[mode].home.scrolling_row.color,
        height : '100px'
      },
      services : {
        backgroundColor : theme[mode].home.services.backgroundColor,
        color : theme[mode].home.services.color,
      },
      footer : {
        backgroundColor : theme[mode].home.footer.backgroundColor,
        color : theme[mode].home.footer.color,
        height : '300px',
      }
    },
    //-------------------------------- auth styling -----------------------------
    auth : {
      auth_screens : {
        marginTop : '100px',
        marginRight : '200px',
        marginLeft : '200px',
        marginBottom : '200px',
      },
      auth_cards : {
        backgroundColor : theme[mode].cards.auth_cards.backgroundColor,
        color : theme[mode].cards.auth_cards.color
      }
    },
    //---------------------------------- dashboard styling --------------------
    dashboard : {
      sidebar : {
        backgroundColor : theme[mode].dashboard.sidebar.backgroundColor,
        color : theme[mode].dashboard.sidebar.color
      },
      create_new_host : {
        backgroundColor : theme[mode].dashboard.create_new_host.backgroundColor,
        color : theme[mode].dashboard.create_new_host.color,
        card : {
          backgroundColor : theme[mode].dashboard.create_new_host.card.backgroundColor,
          color : theme[mode].dashboard.create_new_host.card.color,
        }
      }
    },
    //---------------------------------- button styling -----------------------
    buttons : {
      main_button : {
        backgroundColor : theme[mode].buttons.main_button.backgroundColor,
        color : theme[mode].buttons.main_button.color
      },
      secondary_button : {
        backgroundColor : theme[mode].buttons.secondary_button.backgroundColor,
        color : theme[mode].buttons.secondary_button.color
      }
    },
    //---------------------------------- input styling -----------------------
    inputs : {
      text_input : {
        backgroundColor : theme[mode].inputs.text_input.backgroundColor
      }
    },
    //---------------------------------- cards styling -----------------------
    cards : {
      registered_hosts : {
        backgroundColor : theme[mode].cards.registered_hosts.backgroundColor,
        color : theme[mode].cards.registered_hosts.color
      }
    },
    tables : {
      backgroundColor : theme[mode].tables.backgroundColor,
      color : theme[mode].tables.color
    }
 
  });
  