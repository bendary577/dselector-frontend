import React,{useContext} from 'react';
import { useTranslation } from 'react-i18next';
import MainButton from '../../components/buttons/MainButton';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';

const HostingServicesTable = () => {

    const { t } = useTranslation();
    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode); 

    return (
            <div className="subscription_plan_div" style={styles.tables}>
                <table class="table table-hover">
                    <thead style={styles.tables}>
                        <tr>
                            <th scope="col">{t(`dashboard.content.hosting_services_table.hostname`)}</th>
                            <th scope="col">{t(`dashboard.content.hosting_services_table.ip`)}</th>
                            <th scope="col">{t(`dashboard.content.hosting_services_table.last_update`)}</th>
                            <th scope="col">{t(`dashboard.content.hosting_services_table.ping`)}</th>
                            <th scope="col">{t(`dashboard.content.hosting_services_table.type`)}</th>
                        </tr>
                    </thead>
                    <tbody style={styles.tables}>
                        <tr>
                            <th >http://xyz.ddns.com</th>
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
  