import React from 'react';
import { useTranslation } from 'react-i18next';
import trueIcon from '../../assets/icons/signup/true.png';
import falseIcon from '../../assets/icons/signup/false.png';

const SubscriptionPlan = () => {

    const { t } = useTranslation();

    return (
            <div className="subscription_plan_div">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">{t(`auth.signup.subscription_plan.free`)}</th>
                            <th scope="col">{t(`auth.signup.subscription_plan.premium`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{t(`auth.signup.subscription_plan.hosnames`)}</th>
                            <td></td>
                            <td>1</td>
                            <td>+80</td>
                        </tr>
                        <tr>
                            <th scope="row">{t(`auth.signup.subscription_plan.domains`)}</th>
                            <td></td>
                            <td>3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th scope="row">{t(`auth.signup.subscription_plan.no_ads`)}</th>
                            <td></td>
                            <td>
                                <img src={falseIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                            <td>
                                <img src={trueIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{t(`auth.signup.subscription_plan.support`)}</th>
                            <td></td>
                            <td>
                                <img src={falseIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                            <td>
                                <img src={trueIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{t(`auth.signup.subscription_plan.account_confirmation`)}</th>
                            <td></td>
                            <td>
                                <img src={trueIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                            <td>
                                <img src={falseIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
    );
}
  
export default SubscriptionPlan;
  