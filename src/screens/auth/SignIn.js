import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import TextInput from '../../components/inputs/TextInput';
import MainButton from '../../components/buttons/MainButton';
import AuthNavbar from '../../screenSnippets/auth/AuthNavbar';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import MinorFooter from '../../screenSnippets/account/account/MinorFooter';

const SignIn = () => {

  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode);
  const { t } = useTranslation();

    return (
        <div className=""> 
            <AuthNavbar />
            <div className="signin_div" style={styles.auth.auth_screens}>
              <div className="card" style={styles.auth.auth_cards}>
                  <div className="card-title">
                      <h2 className="m-3"><strong>{t(`auth.login.login_title`)}</strong></h2>
                  </div>
                  <div className="card-body">
                        <form>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`auth.forms.email`)} width="100%" id="" name="" value=""/>
                            </div>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`auth.forms.password`)} width="100%" id="" name="" value=""/>
                            </div>

                            <div class="me-5 mb-4">
                                <MainButton title={t(`home.navbar.login`)} width="100%" height="40px" method={()=>{}}/>
                            </div>

                            <div className="text-center mb-4">
                                <h6>{t(`auth.login.have_account`)}</h6>
                            </div>

                            <div class="me-5 mb-4">
                                <SecondaryButton title={t(`auth.login.signup`)} width="100%" height="40px" method={()=>{}}/>
                            </div>
                        </form>
                  </div>
              </div>
          </div>
          <MinorFooter />
      </div>
    );
}
  
export default SignIn;
  