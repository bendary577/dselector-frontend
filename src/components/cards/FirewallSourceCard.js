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
                <div className="card mx-5 my-5" style={styles.dashboard.create_new_host.card}>
                    <div className="card-body">
                        <div className="container">
                            <div className="row mx-4">

                                {/* -------------- records ------------ */}
                                <div className="col-md-4 col-sm-12">
                                    <div className="card" style={{height:'220px'}}>
                                        <div className="card-body">
                                            <div className="total_records">
                                               <h5><strong>4,612,040</strong></h5>
                                               <p>records</p>
                                            </div>
                                            <div className="records_per_second">
                                                <h5><strong>10</strong></h5>
                                                <p>Records / Second</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* -------------- date ------------ */}
                                <div className="col-md-4 col-sm-12">
                                    <div className="card" style={{height:'220px'}}>
                                        <div className="card-body">
                                            <div className="total_records">
                                               <h5><strong>2021-11-01 13:57</strong></h5>
                                               <p>First Date</p>
                                            </div>
                                            <div className="records_per_second">
                                                <h5><strong>2021-11-08 10:54</strong></h5>
                                                <p>Latest Date</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* -------------- action ------------ */}
                                <div className="col-md-4 col-sm-12">
                                    <button type="button" class="btn btn-success mx-2">on</button>
                                    <button className="btn btn-danger"><strong>delete</strong></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default FirewallSources;
  