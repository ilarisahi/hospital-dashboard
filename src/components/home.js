import React, { useContext } from 'react';
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, Legend, Label, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { DataContext } from '../App';

const COLORS = ["#42a5f5", "#29b6f6", "#26c6da", "#26a69a", "#66bb6a",
"#9ccc65", "#ffca28", "#ffa726", "#ff7043", "#ef5350", "#ec407a", "#ab47bc"];

function pieLabelRenderer(entry) {
    return Math.ceil(entry.value * 100) + " %";
}

function pieFormatter(value, name, props) {
    return Math.ceil(value * 100) + " %";
}

function Home() {
    const dataState = useContext(DataContext);

    return (
        <div className="dashboard-home">
            <div className="home-costs">
                <ResponsiveContainer width="99%">
                    <PieChart>
                        <Pie data={dataState.finances.costs} dataKey="value" nameKey="name" fill="#8884d8" label={pieLabelRenderer}>
                            {
                                dataState.finances.costs.map(
                                    (entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                )
                            }
                        </Pie>
                        <Tooltip formatter={pieFormatter} />
                        <Legend align="center" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="home-income">
                <ResponsiveContainer width="99%">
                    <PieChart>
                        <Pie data={dataState.finances.income} dataKey="value" nameKey="name" fill="#8884d8" label={pieLabelRenderer}>
                            {
                                dataState.finances.income.map(
                                    (entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                )
                            }
                        </Pie>
                        <Tooltip formatter={pieFormatter} />
                        <Legend align="center" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="home-patient-flow">
                <ResponsiveContainer width="99%">
                    <LineChart width={400} height={400} data={dataState.flow.patientFlow}>
                        <XAxis dataKey="name" />
                        <YAxis>
                            <Label value="Number of patients" angle={-90} position="insideBottomLeft" offset={20} />
                        </YAxis>
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Legend align="center" />
                        <Line name="Entered patients" type="monotone" dataKey="entered" stroke="#42a5f5" yAxisId={0} />
                        <Line name="Discharged patients" type="monotone" dataKey="discharged" stroke="#26a69a" yAxisId={0} />
                        <Line name="Returning patients (within 48h)" type="monotone" dataKey="returning" stroke="#ffca28" yAxisId={0} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Home;
