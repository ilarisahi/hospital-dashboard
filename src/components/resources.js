import React, { useContext } from 'react';
import { DataContext } from '../App';
import Dropdown from 'react-bootstrap/Dropdown'
import GaugeChart from 'react-gauge-chart'
import { Pie } from '@nivo/pie'
import { Line } from '@nivo/line'
import { AutoSizer } from 'react-virtualized'
import Indicator from './indicator';
import PersonnelResource from './personnelResource';
import IconResource from './iconResource';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function Item(props) {
  return <li>{props.message}</li>;
}


function Resources() {
	const dataState = useContext(DataContext);

    return (

        <div className="dashboard-resources">
            <div className="resources-title">
                    <h2>Resources</h2>
            </div>

        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="resources-wrapper">
	                    <div className="resources-personnel">
	                    <PersonnelResource
                            name="Doctors"
                            inUse={dataState.resources.doctors.inUse}
                            total={dataState.resources.doctors.total} />
                            </div>
                            </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                	<div className="list">
                		<ul>
						{
									dataState.personnel.doctors.map((entry, index) => 
                                        <li>
                                        <span className="legend" key={entry.id}>
                                            Name: {entry.name} Phone: {entry.phone}
                                        </span>
                                        </li>
                                    )
                        }
                        </ul>
                	</div>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="resources-wrapper">
	                    <div className="resources-personnel">
	                    <PersonnelResource
                            name="Nurses"
                            inUse={dataState.resources.nurses.inUse}
                            total={dataState.resources.nurses.total} />
                            </div>
                            </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                	<div className="list">
                		<ul>
						{
									dataState.personnel.nurses.map((entry, index) => 
                                        <li>
                                        <span className="legend" key={entry.id}>
                                            Name: {entry.name} Phone: {entry.phone}
                                        </span>
                                        </li>
                                    )
                        }
                        </ul>
                	</div>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="resources-wrapper">
	                    <div className="resources-personnel">
	                    <PersonnelResource
                            name="Physiotherapists"
                            inUse={dataState.resources.physiotherapists.inUse}
                            total={dataState.resources.physiotherapists.total} />
                            </div>
                            </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                	<div className="list">
                		<ul>
						{
									dataState.personnel.physiotherapists.map((entry, index) => 
                                        <li>
                                        <span className="legend" key={entry.id}>
                                            Name: {entry.name} Phone: {entry.phone}
                                        </span>
                                        </li>
                                    )
                        }
                        </ul>
                	</div>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="resources-wrapper">
	                    <div className="resources-personnel">
	                    <PersonnelResource
                            name="Pharmasists"
                            inUse={dataState.resources.pharmasists.inUse}
                            total={dataState.resources.pharmasists.total} />
                            </div>
                            </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                	<div className="list">
                		<ul>
						{
									dataState.personnel.pharmasists.map((entry, index) => 
                                        <li>
                                        <span className="legend" key={entry.id}>
                                            Name: {entry.name} Phone: {entry.phone}
                                        </span>
                                        </li>
                                    )
                        }
                        </ul>
                	</div>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="resources-wrapper">
	                    <div className="resources-personnel">
	                    <PersonnelResource
                            name="Other"
                            inUse={dataState.resources.other.inUse}
                            total={dataState.resources.other.total} />
                            </div>
                            </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                	<div className="list">
                		<ul>
						{
									dataState.personnel.others.map((entry, index) => 
                                        <li>
                                        <span className="legend" key={entry.id}>
                                            Name: {entry.name} Phone: {entry.phone}
                                        </span>
                                        </li>
                                    )
                        }
                        </ul>
                	</div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>






        </div>

    );
}

export default Resources;
