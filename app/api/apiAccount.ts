"use server";

import api from "@/app/api/axios";

export async function authenticateLogin(formData: FormData) {
    const account = {
        userName: formData.get('username'),
        password: formData.get('password'),
    }

    const response = await api.post("/account/login", account);
    return response.data.token;
}

export async function logout() {
    await api.post("/account/logout");
}

export async function authenticateToken() {
    try {
        const response = await api.post("/account/authenticate");
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function changePassword(currentPassword: string, newPassword: string) {
    const data = {
        currentPassword,
        newPassword,
    }

    const response = await api.post("/account/change-password", data);
    return response.data.affectedRows;
}

export async function getPages(query: string) {
    const response = await api.get(`/account/page?query=${query}`);
    return response.data;
}

export async function getList(query: string, currentPage: number) {
    const response = await api.get(`/account?page=${currentPage}&query=${query}`);
    return response.data;
}

export async function createAccount(accountId: string) {
    const response = await api.post("/account/create", { accountId });
    return response.data;
}

export async function resetPassword(accountId: string) {
    const response = await api.get(`/account/${accountId}/reset`);
    return response.data;
}

export async function turnOnAccount(accountId: string) {
    const response = await api.get(`/account/${accountId}/on`);
    return response.data;
}

export async function turnOffAccount(accountId: string) {
    const response = await api.get(`/account/${accountId}/off`);
    return response.data;
}

export async function getSettings() {
    const response = await api.get(`/account/setting`);
    return response.data;
}

export async function selectSetting(settingId: number) {
    const response = await api.get(`/account/setting/${settingId}/select`);
    return response.data;
}

export async function saveSetting(setting: any) {
    const data = { setting };

    const response = await api.post(`/account/setting/save`, data);
    return response.data;
}

export async function createSetting(settingName: string) {
    const data = {
        settingName,
        setting: null
    };

    const response = await api.post(`/account/setting/create`, data);
    return response.data;
}

export async function deleteSetting(settingId: number) {
    const response = await api.get(`/account/setting/${settingId}/delete`);
    return response.data;
}

export async function shareSetting(settingId: number, settingName: string, targetAccountId: string) {
    const data = {
        settingName,
        targetAccountId
    };

    const response = await api.post(`/account/setting/${settingId}/share`, data);
    return response.data;
}

export async function checkPositionId(accountId: string) {
    const response = await api.get(`/account/${accountId}`);
    return response.data;
}