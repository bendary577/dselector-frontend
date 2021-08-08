import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import TextInput from '../../components/inputs/TextInput';
import MainButton from '../../components/buttons/MainButton';
import AuthNavbar from '../../screenSnippets/auth/AuthNavbar';
import MinorFooter from '../../screenSnippets/account/MinorFooter';


const ForgotPassword = () => {

  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode);
  const { t } = useTranslation();

    return (
    <div>
    <AuthNavbar />
      <div className="fotgot_password_div" style={styles.auth.auth_screens}>
              <div className="card" style={styles.auth.auth_cards}>
                  <div className="card-title">
                      <h2 className="m-3"><strong>forgot your password ?</strong></h2>
                  </div>
                  <div className="card-body">
                        <form>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                            </div>

                            <div class="me-5 mb-4">
                                <MainButton title={t(`home.navbar.signup`)} width="100%" height="40px" method={()=>{}}/>
                            </div>
                        </form>
                  </div>
              </div>
          </div>
        <MinorFooter />
      </div>
    );
}
  
export default ForgotPassword;
  