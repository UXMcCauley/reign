import React from 'react';
import SimpleLineChart from "../components/visualizations/line/SimpleLineChart";
import TinyLineChart from "../components/visualizations/line/TinyLineChart";
import DashedLineChart from "../components/visualizations/line/DashedLineChart";
import VerticalLineChart from "../components/visualizations/line/VerticalLineChart";
import BiaxialLineChart from "../components/visualizations/line/BiaxialLineChart";
import VerticalLineChartWithSpecifiedDomain
    from "../components/visualizations/line/VerticalLineChartWithSpecifiedDomain";
import LineChartConnectNulls from "../components/visualizations/line/LineChartConnectNulls";
import LineChartWithXAxisPadding from "../components/visualizations/line/LineChartWithXAxisPadding";
import LineChartWithReferenceLines from "../components/visualizations/line/LineChartWithReferenceLines";
import CustomizedDotLineChart from "../components/visualizations/line/CustomizedDotLineChart";
import CustomizedLabelLineChart from "../components/visualizations/line/CustomizedLabelLineChart";
import SynchronizedLineChart from "../components/visualizations/line/SynchronizedLineChart";
import HighlightAndZoomLineChart from "../components/visualizations/line/HighlightAndZoomLineChart";
import LineChartHasMultiSeries from "../components/visualizations/line/LineChartHasMultiSeries";
import SimpleAreaChart from "../components/visualizations/area/SimpleAreaChart";
import StackedAreaChart from "../components/visualizations/area/StackedAreaChart";
import TinyAreaChart from "../components/visualizations/area/TinyAreaChart";
import PercentAreaChart from "../components/visualizations/area/PercentAreaChart";
import CardinalAreaChart from "../components/visualizations/area/CardinalAreaChart";
import AreaChartConnectNulls from "../components/visualizations/area/AreaChartConnectNulls";
import SynchronizedAreaChart from "../components/visualizations/area/SynchronizedAreaChart";
import AreaChartFillByValue from "../components/visualizations/area/AreaChartFillByValue";
import TinyBarChart from "../components/visualizations/bar/TinyBarChart";
import SimpleBarChart from "../components/visualizations/bar/SimpleBarChart";
import StackedBarChart from "../components/visualizations/bar/StackedBarChart";
import MixBarChart from "../components/visualizations/bar/MixBarChart";
import CustomShapeBarChart from "../components/visualizations/bar/CustomShapeBarChart";
import PositiveAndNegativeBarChart from "../components/visualizations/bar/PositiveAndNegativeBarChart";
import BrushBarChart from "../components/visualizations/bar/BrushBarChart";
import BarChartWithCustomizedEvent from "../components/visualizations/bar/BarChartWithCustomizedEvent";
import BarChartWithMinHeight from "../components/visualizations/bar/BarChartWithMinHeight";
import BarChartStackedBySign from "../components/visualizations/bar/BarChartStackedBySign";
import BiaxialBarChart from "../components/visualizations/bar/BiaxialBarChart";
import BarChartHasBackground from "../components/visualizations/bar/BarChartHasBackground";
import BarChartWithMultiXAxis from "../components/visualizations/bar/BarChartWithMultiXAxis";
import BarChartNoPadding from "../components/visualizations/bar/BarChartNoPadding";
import LineBarAreaComposedChart from "../components/visualizations/compositions/LineBarAreaComposedChart";
import SameDataComposedChart from "../components/visualizations/compositions/SameDataComposedChart";
import VerticalComposedChart from "../components/visualizations/compositions/VerticalComposedChart";
import ComposedChartWithAxisLabels from "../components/visualizations/compositions/ComposedChartWithAxisLabels";
import ScatterAndLineOfBestFit from "../components/visualizations/compositions/ScatterAndLineOfBestFit";
import TwoLevelPieChart from "../components/visualizations/pie/TwoLevelPieChart";
import StraightAnglePieChart from "../components/visualizations/pie/StraightAnglePieChart";
import TwoSimplePieChart from "../components/visualizations/pie/TwoSimplePieChart";
import CustomActiveShapePieChart from "../components/visualizations/pie/CustomActiveShapePieChart";
import PieChartWithCustomizedLabel from "../components/visualizations/pie/PieChartWithCustomizedLabel";
import PieChartWithPaddingAngle from "../components/visualizations/pie/PieChartWithPaddingAngle";
import SimpleRadarChart from "../components/visualizations/radar/SimpleRadarChart";
import SpecifiedDomainRadarChart from "../components/visualizations/radar/SpecifiedDomainRadarChart";
import SimpleRadialBarChart from "../components/visualizations/bar/SimpleRadialBarChart";
import SimpleTreemap from "../components/visualizations/tree/SimpleTreemap";
import CustomContentTreemap from "../components/visualizations/tree/CustomContentTreemap";

export default function RechartsDemo() {
    return (
        <div style={{padding: 30}}>
            <div style={{color: "yellowgreen", fontSize: 36, padding: 30}}>Line Charts</div>
            <div style={{width: 800, height: 400, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>SimpleLineChart</h1>
                <SimpleLineChart/>
            </div>

            <div style={{width: 800, height: 400, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>TinyLineChart</h1>
                <TinyLineChart/>
            </div>

            <div style={{width: 800, height: 400, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>DashedLineChart</h1>
                <DashedLineChart/>
            </div>

            <div style={{width: 800, height: 400, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>VerticalLineChart</h1>
                <VerticalLineChart/>
            </div>

            <div style={{width: 800, height: 400, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BiaxialLineChart</h1>
                <BiaxialLineChart/>
            </div>

            <div style={{width: 800, height: 400, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>VerticalLineChartWithSpecifiedDomain</h1>
                <VerticalLineChartWithSpecifiedDomain/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>LineChartConnectNulls</h1>
                <LineChartConnectNulls/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>LineChartWithXAxisPadding</h1>
                <LineChartWithXAxisPadding/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>LineChartWithReferenceLines</h1>
                <LineChartWithReferenceLines/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>CustomizedDotLineChart</h1>
                <CustomizedDotLineChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>CustomizedLabelLineChart</h1>
                <CustomizedLabelLineChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 300, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>SynchronizedLineChart</h1>
                <SynchronizedLineChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>HighlightAndZoomLineChart</h1>
                <HighlightAndZoomLineChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>LineChartHasMultiSeries</h1>
                <LineChartHasMultiSeries/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>LineChartHasMultiSeries</h1>
                <LineChartHasMultiSeries/>
            </div>

            <div style={{color: "yellowgreen", fontSize: 36, padding: 30}}>Area Charts</div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>SimpleAreaChart</h1>
                <SimpleAreaChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>StackedAreaChart</h1>
                <StackedAreaChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>TinyAreaChart</h1>
                <TinyAreaChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PercentAreaChart</h1>
                <PercentAreaChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>CardinalAreaChart</h1>
                <CardinalAreaChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>AreaChartConnectNulls</h1>
                <AreaChartConnectNulls/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>SynchronizedAreaChart</h1>
                <SynchronizedAreaChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>AreaChartFillByValue</h1>
                <AreaChartFillByValue/>
            </div>

            <div style={{color: "yellowgreen", fontSize: 36, padding: 30}}>Area Charts</div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>TinyBarChart</h1>
                <TinyBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>SimpleBarChart</h1>
                <SimpleBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>StackedBarChart</h1>
                <StackedBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>MixBarChart</h1>
                <MixBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>CustomShapeBarChart</h1>
                <CustomShapeBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PositiveAndNegativeBarChart</h1>
                <PositiveAndNegativeBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BrushBarChart</h1>
                <BrushBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BarChartWithCustomizedEvent</h1>
                <BarChartWithCustomizedEvent/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BarChartWithMinHeight</h1>
                <BarChartWithMinHeight/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BarChartStackedBySign</h1>
                <BarChartStackedBySign/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BiaxialBarChart</h1>
                <BiaxialBarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BarChartHasBackground</h1>
                <BarChartHasBackground/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BarChartWithMultiXAxis</h1>
                <BarChartWithMultiXAxis/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>BarChartNoPadding</h1>
                <BarChartNoPadding/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>SimpleRadialBarChart</h1>
                <SimpleRadialBarChart/>
            </div>

            <div style={{color: "yellowgreen", fontSize: 36, padding: 30}}>Composition Charts</div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>LineBarAreaComposedChart</h1>
                <LineBarAreaComposedChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>SameDataComposedChart</h1>
                <SameDataComposedChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>VerticalComposedChart</h1>
                <VerticalComposedChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>ComposedChartWithAxisLabels</h1>
                <ComposedChartWithAxisLabels/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>ScatterAndLineOfBestFit</h1>
                <ScatterAndLineOfBestFit/>
            </div>

            <div style={{color: "yellowgreen", fontSize: 36, padding: 30}}>Pie Charts</div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>TwoLevelPieChart</h1>
                <TwoLevelPieChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>StraightAnglePieChart</h1>
                <StraightAnglePieChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>TwoSimplePieChart</h1>
                <TwoSimplePieChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>CustomActiveShapePieChart</h1>
                <CustomActiveShapePieChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PieChartWithCustomizedLabel</h1>
                <PieChartWithCustomizedLabel/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PieChartWithPaddingAngle</h1>
                <PieChartWithPaddingAngle/>
            </div>

            <div style={{color: "yellowgreen", fontSize: 36, padding: 30}}>Radar Charts</div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PieChartWithPaddingAngle</h1>
                <SimpleRadarChart/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PieChartWithPaddingAngle</h1>
                <SpecifiedDomainRadarChart/>
            </div>

            <div style={{color: "yellowgreen", fontSize: 36, padding: 30}}>Tree Maps</div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PieChartWithPaddingAngle</h1>
                <SimpleTreemap/>
            </div>

            <div style={{width: 800, height: 500, marginBottom: 90, textAlign: "center"}}>
                <h1 style={{color: "#ffffff"}}>PieChartWithPaddingAngle</h1>
                <CustomContentTreemap/>
            </div>

        </div>
    );
}

