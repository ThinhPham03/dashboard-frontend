"use server";

import api from "@/app/api/axios";

export async function getPage(query: string) {
    const response = await api.get(`/sales/page?query=${query}`);
    return response.data;
}

export async function getReport(query: string, currentPage: number) {
    const response = await api.get(`/sales/report?page=${currentPage}&query=${query}`);
    return response.data;
}

export async function getExportData(query: string) {
    const response = await api.get(`/sales/report/export?query=${query}`);
    return response.data;
}