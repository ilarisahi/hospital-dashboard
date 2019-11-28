import React, { useContext } from 'react';
import { DataContext } from '../App';
import PersonnelResource from './personnelResource';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function Resources() {
    const dataState = useContext(DataContext);
    
    const categories = [
        { name: "Doctors", key: "doctors" },
        { name: "Nurses", key: "nurses" },
        { name: "Physiotherapists", key: "physiotherapists" },
        { name: "Pharmasists", key: "pharmasists" },
        { name: "Others", key: "others" }
    ]

    return (
        <div className="dashboard-resources">
            <div className="resources-human-wrapper">
                <div className="resources-title">
                    <h2>Resources</h2>
                </div>
                <div className="card">
                    <Accordion
                        allowMultipleExpanded={true}
                        allowZeroExpanded={true}>
                        {
                            categories.map((category, index) => 
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="resources-personnel">
                                                <PersonnelResource
                                                    name={category.name}
                                                    inUse={dataState.resources[category.key].inUse}
                                                    total={dataState.resources[category.key].total} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        dataState.personnel[category.key].map((entry, index) =>
                                                            <tr>
                                                                <th scope="row">{index}</th>
                                                                <td>{entry.name}</td>
                                                                <td>{entry.phone}</td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Resources;
