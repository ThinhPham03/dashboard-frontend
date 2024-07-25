"use client";

import React, { ReactEventHandler, useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import './pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import { handleSaveSetting } from "@/app/lib/serverActions"

const PlotlyRenderers = createPlotlyRenderers(Plot);

interface PivotTableProps {
  salesReport: any;
  data: any;
}

const PivotTable: React.FC<PivotTableProps> = ({ salesReport, data }) => {
  const setting = data ? data.setting : ""
  const [pivotState, setPivotState] = useState(setting ? JSON.parse(setting) : {});

  return (
    <PivotTableUI
      data={salesReport}
      menuLimit={Infinity}
      onChange={async (s: any) => {
        console.log(s);

        setPivotState(s);

        const data = {
          "rows": s.rows,
          "vals": s.vals,
          "aggregatorName": s.aggregatorName,
          "cols": s.cols,
          "sorters": s.sorters,
          "valueFilter": s.valueFilter,
          "rowOrder": s.rowOrder,
          "colOrder": s.colOrder,
          "rendererName": s.rendererName,
        }
        await handleSaveSetting(data);
      }}
      renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
      unusedOrientationCutoff={Infinity}
      {...pivotState}
    />
  );
};

export default PivotTable;

