export const theme = {
  //---------------------------------- light theme styling ---------------------------
    light: {
      app : {
        color: "black",
        backgroundColor: "#ffffff",
        highlight: "#fdb813"
      },
      home : {
        navbar : {
          backgroundColor : 'white',
          color : 'black',
        },
        account_top_navbar : {
          backgroundColor : '#e8ebed',
          color : 'black',
        },
        welcome : {
          backgroundColor : 'white',
          color : 'black',
          image : {},
          card : {
            backgroundColor : 'white',
            color: "black",
          }
        },
        about : {
          section : {
            backgroundColor : '#F1F6F8',
            color: "black",
          },
          card : {
            backgroundColor : 'white',
            color: "black",
            width : '300px',
            height : '300px'
          }
        },
        presentation : {
          backgroundColor : 'white',
          color : 'black'
        },
        scrolling_row : {
          backgroundColor : '#E5F7FF',
          color : 'black'
        },
        services : {
          backgroundColor : 'white',
          color : 'black'
        },
        footer : {
          backgroundColor : '#5C84A1',
          color : 'white'
        }
      },
      dashboard : {
        sidebar : {
          backgroundColor : "#e8ebed",
          color : "black",
        },
        create_new_host : {
          backgroundColor : 'white',
          color : "black",
          card : {
            backgroundColor : 'white',
            color : 'black'
          },
        }
      },
      buttons : {
        main_button : {
          backgroundColor : '#8AC4FA',
          color : 'white'
        },
        secondary_button : {
          backgroundColor : '#e8ebed',
          color : 'black'
        },
        toggle_button : {
          backgroundColor : '#e8ebed',
          color : 'black',
          borderRadius:'10px'
        }
      },
      inputs : {
        text_input : {
          backgroundColor : 'white'
        },
      },
      cards : {
        registered_hosts : {
          backgroundColor : 'white',
          color : 'black'
        },
        auth_cards : {
          backgroundColor : 'white',
          color : 'black'
        },
        firewall_sources : {
          backgroundColor : 'white',
          color : 'black',
        }
       },
       tables : {
        backgroundColor : 'white',
        color : 'black',
      }
    },

    //-------------------------------------- dark theme styling --------------------------------
    dark: {
      app : {
        color: "#42e0ff",
        backgroundColor: "#121212",
        highlight: "#ffffff"
      },
      home : {
        navbar : {
          backgroundColor : "#2b2c2e",
          color : "white"
        },
        account_top_navbar : {
          backgroundColor : '#39403e',
          color : 'white',
        },
        welcome : {
          backgroundColor : '#121212',
          color : 'white',
          image : {
            boxShadow : `0px 0px 200px 300px #0ff`,
          },
          card : {
            backgroundColor : '#121212',
            color: "white",
          }
        },
        about : {
          section : {
            backgroundColor : 'black',
            color: "white",
          },
          card : {
            backgroundColor : '#121212',
            color: "white",
          }
        },
        presentation : {
          backgroundColor : '#121212',
          color : 'white'
        },
        scrolling_row : {
          backgroundColor : '#BB86FC',
          color : 'black'
        },
        services : {
          backgroundColor : '#121212',
          color : 'white'
        },
        footer : {
          backgroundColor : '#2b2c2e',
          color : 'white'
        }
      },
      dashboard : {
        sidebar : {
          backgroundColor : "#39403e",
          color : "white",
        },
        create_new_host : {
          backgroundColor : '',
          color : "white",
          card : {
            backgroundColor : '#212121',
            color : 'white'
          },
        }
      },
      buttons : {
        main_button : {
          backgroundColor : '#39403e',
          color : 'white'
        },
        secondary_button : {
          backgroundColor : '#27927E',
          color : 'black'
        },
        toggle_button : {
          backgroundColor : '#27927E',
          color : 'black',
          borderRadius:'10px'
        }
      },
      inputs : {
        text_input : {
          backgroundColor : 'black'
        }
      },
      cards : {
        registered_hosts : {
            backgroundColor : '#39403e',
            color : 'white',
        },
        auth_cards : {
          backgroundColor : '#2b2c2e',
          color : 'white'
        },
        firewall_sources : {
          backgroundColor : '39403e',
          color : 'white',
        }
      },
      tables : {
        backgroundColor : '#39403e',
        color : 'white',
      }
    }
  };
  