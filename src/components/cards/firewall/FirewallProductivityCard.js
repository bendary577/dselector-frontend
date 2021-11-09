import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import { VictoryPie, VictoryChart, VictoryScatter, VictoryTheme } from 'victory';

const FirewallProductivityCard = () => {

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
                                    <h6><strong>Productivity Today</strong></h6>
                                </div>
                                
                                <div className="col-md-5">
                                    <div class="">
                                        <h6 className="text-success"><small>11% Size</small></h6>
                                        <h6 className="text-success">Productive</h6>
                                    </div>
                                    <hr />
                                    <div class="">
                                        <h6 className="text-primary"><small>49%</small></h6>
                                        <h6 className="text-primary">Acceptable</h6>
                                    </div>
                                    <hr />
                                    <div class="">
                                        <h6 className="text-danger"><small>21%</small></h6>
                                        <h6 className="text-danger">Unproductive</h6>
                                    </div>
                                    <hr />
                                    <div class="">
                                        <h6 className="text-warning"><small>14%</small></h6>
                                        <h6 className="text-warning">Unacceptable</h6>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="container">
                                        <div className="row h-25">
                                            <VictoryPie
                                                data={[
                                                    { x: "Cats", y: 35 },
                                                    { x: "Dogs", y: 40 },
                                                    { x: "Birds", y: 55 }
                                                ]}
                                            />
                                        </div>
                                        <div className="row h-75">
                                            <VictoryChart
                                                theme={VictoryTheme.material}
                                                domain={{ x: [0, 5], y: [0, 7] }}
                                                >
                                                <VictoryScatter
                                                    style={{ data: { fill: "#c43a31" } }}
                                                    size={7}
                                                    animate={{
                                                        duration: 2000,
                                                        onLoad: { duration: 1000 }
                                                    }}
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
            </div>
        </div>
    );
}
  
export default FirewallProductivityCard;
  