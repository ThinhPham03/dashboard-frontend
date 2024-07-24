"use client";

import { getExportData } from '@/app/api/apiSales';
import { selectSetting } from '@/app/api/apiAccount';

import * as XLSX from 'xlsx';

export async function exportData(query: string, fileName: string) {
    try {
        const salesReport = await getExportData(query);
        
        const worksheet = XLSX.utils.json_to_sheet(salesReport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Report');

        XLSX.writeFile(workbook, fileName);
    } catch (error) {
        console.log(error)
    }
}