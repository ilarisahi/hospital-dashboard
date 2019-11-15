import React, { useContext } from 'react';
import { DataContext } from '../App';
import GaugeChart from 'react-gauge-chart'
import { Pie } from '@nivo/pie'
import { Line } from '@nivo/line'
import { AutoSizer } from 'react-virtualized'
import Indicator from './indicator';
import PersonnelResource from './personnelResource';
import IconResource from './iconResource';

const COLORS = ["#42a5f5", "#29b6f6", "#26c6da", "#26a69a", "#66bb6a",
"#9ccc65", "#ffca28", "#ffa726", "#ff7043", "#ef5350", "#ec407a", "#ab47bc"];
const COLORS_FLOW = ["#42a5f5", "#26a69a", "#ffca28"];

function pieLabelRenderer(entry) {
    return Math.ceil(entry.value * 100) + " %";
}

function pieFormatter(value) {
    return value.label + ": " + Math.ceil(value.value * 100) + " %";
}

function Home() {
    const dataState = useContext(DataContext);

    return (
        <div className="dashboard-home">
            <div className="home-finances">
                <div className="finances-title">
                    <h2>Finances</h2>
                </div>
                <div className="finances-wrapper">
                    <div className="finances-costs">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Costs</h6>
                                <AutoSizer>
                                    {({ height, width }) => (
                                        <Pie
                                            height={width}
                                            width={width}
                                            data={dataState.finances.costs}
                                            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                                            colors={COLORS}
                                            radialLabel={pieLabelRenderer}
                                            radialLabelsSkipAngle={10}
                                            radialLabelsTextXOffset={6}
                                            radialLabelsTextColor="#333333"
                                            radialLabelsLinkOffset={0}
                                            radialLabelsLinkDiagonalLength={6}
                                            radialLabelsLinkHorizontalLength={4}
                                            radialLabelsLinkStrokeWidth={1}
                                            radialLabelsLinkColor={{ from: 'color' }}
                                            enableSlicesLabels={false}
                                            animate={true}
                                            motionStiffness={90}
                                            motionDamping={15}
                                            tooltip={pieFormatter}
                                        />
                                    )}
                                </AutoSizer>
                                <div className="chart-legends">
                                    {
                                        dataState.finances.costs.map((entry, index) => 
                                            <span className="legend" key={entry.id}>
                                                <span
                                                    className="legend-dot"
                                                    style={{background: COLORS[index % COLORS.length]}}>
                                                </span>
                                                {entry.label}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="finances-alt-wrapper">
                        <div className="finances-income">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">Income</h6>
                                    <AutoSizer>
                                        {({ height, width }) => (
                                            <Pie
                                                height={width}
                                                width={width}
                                                data={dataState.finances.income}
                                                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                                                colors={COLORS}
                                                radialLabel={pieLabelRenderer}
                                                radialLabelsSkipAngle={10}
                                                radialLabelsTextXOffset={6}
                                                radialLabelsTextColor="#333333"
                                                radialLabelsLinkOffset={0}
                                                radialLabelsLinkDiagonalLength={6}
                                                radialLabelsLinkHorizontalLength={4}
                                                radialLabelsLinkStrokeWidth={1}
                                                radialLabelsLinkColor={{ from: 'color' }}
                                                enableSlicesLabels={false}
                                                animate={true}
                                                motionStiffness={90}
                                                motionDamping={15}
                                                tooltip={pieFormatter}
                                            />
                                        )}
                                    </AutoSizer>
                                    <div className="chart-legends">
                                        {
                                            dataState.finances.income.map((entry, index) => 
                                                <span className="legend" key={entry.id}>
                                                    <span
                                                        className="legend-dot"
                                                        style={{background: COLORS[index % COLORS.length]}}>
                                                    </span>
                                                    {entry.label}
                                                </span>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="finances-total">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">Total</h6>
                                    <h5 className="card-title">
                                        {dataState.finances.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} €
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-indicators">
                <div className="indicators-title">
                    <h2>Indicators</h2>
                </div>
                <div className="indicators-wrapper">
                    <div className="indicators-performance">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Performance indicator</h6>
                                    <GaugeChart
                                        id="indicators-performance"
                                        percent={dataState.indicators.performance}
                                        colors={["#ef5350", "#ffca28", "#66bb6a"]}
                                        cornerRadius={0}
                                        arcPadding={0}
                                        hideText={true} />
                            </div>
                        </div>
                    </div>
                    <div className="indicators-quality">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Quality indicator</h6>
                                    <GaugeChart
                                        id="indicators-quality"
                                        percent={dataState.indicators.quality}
                                        colors={["#ef5350", "#ffca28", "#66bb6a"]}
                                        cornerRadius={0}
                                        arcPadding={0}
                                        hideText={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indicators-other">
                    <Indicator
                        data={dataState.indicators.satisfactionPatient}
                        name="Patient satisfaction"
                        category="satisfaction" />
                    <Indicator
                        data={dataState.indicators.satisfactionPersonnel}
                        name="Personnel satisfaction"
                        category="satisfaction" />
                    <Indicator
                        data={dataState.indicators.patientComplaints}
                        name="Number of patient complaints"
                        category="complaints" />
                    <Indicator
                        data={dataState.indicators.infections}
                        name="Treatment related infections"
                        category="medical" />
                    <Indicator
                        data={dataState.indicators.errors}
                        name="Treatment related errors"
                        category="medical" />
                </div>
            </div>
            <div className="home-resources">
                <div className="resources-title">
                    <h2>Resources</h2>
                </div>
                <div className="resources-wrapper">
                    <div className="resources-personnel">
                        <PersonnelResource
                            name="Doctors"
                            inUse={dataState.resources.doctors.inUse}
                            total={dataState.resources.doctors.total} />
                        <PersonnelResource 
                            name="Nurses"
                            inUse={dataState.resources.nurses.inUse}
                            total={dataState.resources.nurses.total} />
                        <PersonnelResource
                            name="Physiotherapists"
                            inUse={dataState.resources.physiotherapists.inUse}
                            total={dataState.resources.physiotherapists.total} />
                        <PersonnelResource
                            name="Pharmasists"
                            inUse={dataState.resources.pharmasists.inUse}
                            total={dataState.resources.pharmasists.total} />
                        <PersonnelResource
                            name="Others"
                            inUse={dataState.resources.other.inUse}
                            total={dataState.resources.other.total} />
                    </div>
                    <div className="resources-other">
                        <IconResource
                            icon="procedures"
                            inUse={dataState.resources.beds.inUse}
                            total={dataState.resources.beds.total} />
                        <IconResource 
                            icon="radiation-alt"
                            inUse={dataState.resources.quarantine.inUse}
                            total={dataState.resources.quarantine.total} />
                        <IconResource
                            icon="male"
                            value={dataState.resources.patients.men} />
                        <IconResource
                            icon="female"
                            value={dataState.resources.patients.women} />
                        <IconResource
                            icon="stethoscope"
                            value={Math.ceil(dataState.resources.devicesUtilization * 100) + " %"} />
                    </div>
                </div>
            </div>
            <div className="home-flow">
                <div className="flow-title">
                    <h2>General</h2>
                </div>
                <div className="flow-patient-flow">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Patient flow</h6>
                            <div className="card-chart-wrapper">
                                <AutoSizer>
                                    {({ height, width }) => (
                                        <Line
                                            height={height}
                                            width={width}
                                            data={dataState.flow.patientFlow}
                                            margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
                                            xScale={{ type: 'point' }}
                                            yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
                                            axisLeft={{
                                                orient: 'left',
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                                legend: 'Number of patients',
                                                legendOffset: -40,
                                                legendPosition: 'middle'
                                            }}
                                            colors={COLORS_FLOW}
                                            pointSize={10}
                                            pointColor={{ theme: 'background' }}
                                            pointBorderWidth={2}
                                            pointBorderColor={{ from: 'serieColor' }}
                                            pointLabel="y"
                                            pointLabelYOffset={-12}
                                            useMesh={true}
                                        />
                                    )}
                                </AutoSizer>
                            </div>
                            <div className="chart-legends">
                                {
                                    dataState.flow.patientFlow.map((entry, index) => 
                                        <span className="legend" key={entry.id}>
                                            <span 
                                                className="legend-dot"
                                                style={{background: COLORS_FLOW[index % COLORS_FLOW.length]}}>
                                            </span>
                                            {entry.label}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flow-indicators">
                    <Indicator
                        data={dataState.flow.averageTreatmentDays}
                        name="Average number of treatment days per patient"
                        category="flow" />
                    <Indicator
                        data={dataState.flow.patientClassification}
                        name="Patient classification"
                        category="flow" />
                </div>
            </div>
        </div>
    );
}

export default Home;
