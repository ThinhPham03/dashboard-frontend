import { TQuerySort } from "react-pivottable/Utilities";

export type Product = {
  id: string;
  name: string;
  vat: number;
  price: number;
  laboratory: string;
  group: string;
  range: string;
  branch: string;
};

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

export type LaboratoryField = {
  id: string;
  name: string;
};
export type GroupField = {
  id: string;
  name: string;
};
export type RangeField = {
  id: string;
  name: string;
};
export type BranchField = {
  id: string;
  name: string;
};

export type ProductField = {
  laboratorys: LaboratoryField[];
  groups: GroupField[];
  ranges: RangeField[];
  branchs: BranchField[];
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