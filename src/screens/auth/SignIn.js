import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from "react-router-dom";
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import TextInput from '../../components/inputs/TextInput';
import SubscriptionPlan from '../../components/cards/SubscriptionPlan';
import MainButton from '../../components/buttons/MainButton';
import AuthNavbar from '../../screenSnippets/auth/AuthNavbar';
import SecondaryButton from '../../components/buttons/SecondaryButton';

const SignIn = () => {

  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode);
  const { t } = useTranslation();

    return (
        <div>
    <AuthNavbar />
      <div className="signin_div" style={styles.auth.auth_screens}>

          <div className="h-100">

              <div className="card h-100">
                  <div className="card-title">
                      <h2 className="m-3"><strong>login to your dselector account</strong></h2>
                  </div>
                  <div className="card-body">
                        <form>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                            </div>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                            </div>

                            <div class="me-5 mb-4">
                                <MainButton title={t(`home.navbar.signup`)} width="100%" height="40px" method={()=>{}}/>
                            </div>

                            <div className="text-center mb-4">
                                <h6>don't have an account ? </h6>
                            </div>

                            <div class="me-5 mb-4">
                                <SecondaryButton title={t(`home.navbar.signup`)} width="100%" height="40px" method={()=>{}}/>
                            </div>

                        </form>
                  </div>
              </div>
          </div>
          </div>
      </div>
    );
}
  
export default SignIn;
  