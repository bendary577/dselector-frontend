import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory';

const FirewallBandwidthCard = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
        <div className="firewall_source_card_div">
            <div className="create_host_form">
                <div className="card" style={styles.dashboard.create_new_host.card}>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="">
                                    <h6><strong>Bandwidth Today</strong></h6>
                                </div>
                                
                                <div className="col-md-5">
                                    <div class="">
                                        <h6><small>Total Size</small></h6>
                                        <h6>15.9 GB</h6>
                                    </div>
                                    <hr />
                                    <div class="">
                                        <h6><small>Average Size</small></h6>
                                        <h6>58.6 GB</h6>
                                    </div>
                                    <hr />
                                    <div class="">
                                        <h6><small>Largest Download</small></h6>
                                        <h6>22.9 MB </h6>
                                        <h6>06:12 am</h6>
                                        <h6><small>From youtube.com</small></h6>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                    domain={{ x: [0, 5], y: [0, 7] }}
                                    >
                                    <VictoryScatter
                                        style={{ data: { fill: "#c43a31" } }}
                                        size={7}
                                        data={[
                                        { x: 1, y: 2 },
                                        { x: 2, y: 3 },
                                        { x: 3, y: 5 },
                                        { x: 4, y: 4 },
                                        { x: 5, y: 7 }
                                        ]}
                                    />
                                </VictoryChart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default FirewallBandwidthCard;
  