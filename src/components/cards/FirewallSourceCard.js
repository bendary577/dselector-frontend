import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';

const FirewallSources = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


    return (
        <div className="firewall_source_card_div">
            <div className="create_host_form my-3">
                <div className="mx-5 my-5" style={styles.dashboard.create_new_host.card}>
                    <div className="">
                        <div className="container">
                            <div className="row mx-4">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                        <th scope="col">Records</th>
                                        <th scope="col">Records / Second</th>
                                        <th scope="col">First Date</th>
                                        <th scope="col">Latest Date</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <h5><strong>4,612,040</strong></h5>
                                            </th>
                                            <td>
                                                <h5><strong>10</strong></h5>
                                            </td>
                                            <td>
                                                <h5><strong>2021-11-01 13:57</strong></h5>
                                            </td>
                                            <td>
                                                <h5><strong>2021-11-08 10:54</strong></h5>
                                            </td>
                                            <td>                               
                                                <div className="d-flex">
                                                    <button type="button" class="btn btn-success mx-2">on</button>
                                                    <button className="btn btn-danger"><strong>delete</strong></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <h5><strong>4,612,040</strong></h5>
                                            </th>
                                            <td>
                                                <h5><strong>10</strong></h5>
                                            </td>
                                            <td>
                                                <h5><strong>2021-11-01 13:57</strong></h5>
                                            </td>
                                            <td>
                                                <h5><strong>2021-11-08 10:54</strong></h5>
                                            </td>
                                            <td>                               
                                                <div className="d-flex">
                                                    <button type="button" class="btn btn-success mx-2">on</button>
                                                    <button className="btn btn-danger"><strong>delete</strong></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default FirewallSources;
  