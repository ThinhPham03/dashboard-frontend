import { TQuerySort } from "react-pivottable/Utilities";

export type SalesReport = {
  yyyymm: string;
  productId: string;
  productName: string;
  customerId: string;
  customerName: string;
  targetUnit: string;
  targetValue: string;
  salesUnit: string;
  salesValue: string;
  ly_TargetUnit: string;
  ly_TargetValue: string;
  ly_SalesUnit: string;
  ly_SalesValue: string;
};

export type SalesReportRow = {
  key: string;
  productName: string;
  customerName: string;
  salesReports: SalesReport[];
};

export type PivotSetting = {
  rows : string[];
  cols : string[];
  vals : string[];
  aggregatorName: string;
  rowOrder: TQuerySort;
  colOrder: TQuerySort;
  rendererName: string;
};