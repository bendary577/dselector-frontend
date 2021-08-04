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
                            <th scope="col">free plan</th>
                            <th scope="col">premium plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">hostnames</th>
                            <td></td>
                            <td>1</td>
                            <td>+80</td>
                        </tr>
                        <tr>
                            <th scope="row">domains</th>
                            <td></td>
                            <td>3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th scope="row">no ads</th>
                            <td></td>
                            <td>
                                <img src={falseIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                            <td>
                                <img src={trueIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">support</th>
                            <td></td>
                            <td>
                                <img src={falseIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                            <td>
                                <img src={trueIcon} style={{width : '25px', height : '25px'}} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">30 days account confirmation</th>
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
  