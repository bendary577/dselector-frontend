import React from 'react';
import { useTranslation } from 'react-i18next';
import MainButton from '../../components/buttons/MainButton';

const HostingServicesTable = () => {

    const { t } = useTranslation();

    return (
            <div className="subscription_plan_div">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">hostname</th>
                            <th scope="col">ip/target</th>
                            <th scope="col">last update</th>
                            <th scope="col">ping</th>
                            <th scope="col">type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>http://xyz.ddns.com</th>
                            <td>192.168.1.180</td>
                            <td>8/1/2021 13:21:03</td>
                            <td><MainButton title="ping" width="60px" height="30px"/></td>
                            <td>--</td>
                        </tr>
                    </tbody>
                </table>
            </div >
    );
}
  
export default HostingServicesTable;
  