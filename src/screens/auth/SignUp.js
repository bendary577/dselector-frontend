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
import { useHistory } from "react-router-dom";

const SignUp = () => {

  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode);
  const { t } = useTranslation();
  const history = useHistory();

  const navigateToLogin = () => {
    history.replace("/login") 
  }

    return (
        <div>
        <AuthNavbar />
        <div className="signup_div" style={styles.auth.signup}>
          <div className="h-100">

              <div className="card h-100">
                  <div className="card-title">
                      <h2 className="m-3"><strong>create new dselector account</strong></h2>
                  </div>
                  <div className="card-body">
                        <form>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                            </div>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                            </div>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                            </div>
                            <div className="mb-4 mx-4">
                                <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                            </div>

                            <div className="subscription_plan" style={{margin : '50px', backgroundColor:'white', height:'500px', border : '1px solid #838485', borderRadius : '10px', padding : '10px'}}>
                                <SubscriptionPlan />
                            </div>

                            <div class="form-check me-5 mb-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    by clicking  sinup you confirm to our privacy policy and terms of services
                                </label>
                            </div>

                            <div class="me-5 mb-4">
                                <MainButton title={t(`home.navbar.signup`)} width="100%" height="40px" method={()=>{}}/>
                            </div>

                            <div className="text-center mb-4">
                                <h6>already have an account ? </h6>
                            </div>

                            <div class="me-5 mb-4">
                                <SecondaryButton title={t(`home.navbar.signup`)} method={navigateToLogin} width="100%" height="40px" method={()=>{}}/>
                            </div>

                        </form>
                  </div>
              </div>
          </div>
          </div>
      </div>
    );
}
  
export default SignUp;
  