'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { signIn } from '@/auth/auth';
import { changePassword as changePasswordAPI, checkPositionId, createSetting, deleteSetting, saveSetting, selectSetting, shareSetting } from '@/app/api/apiAccount';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const result = await signIn(formData);

        if (!result) {
            return "Username or password incorrect";
        }

        redirect('/dashboard');
    } catch (error) {
        throw error;
    }
}

export async function changePassword(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const currentPassword = formData.get('currentPassword')!.toString();
        const newPassword1 = formData.get('newPassword1')!.toString();
        const newPassword2 = formData.get('newPassword2')!.toString();

        if (newPassword1 !== newPassword2) {
            return "Please confirm your new password again";
        }

        const result = await changePasswordAPI(currentPassword, newPassword1);

        if (!result || result === 0) {
            return "Your current password incorrect";
        }

        redirect('/');
    } catch (error) {
        throw error;
    }
}

export async function handleSelectSetting(settingId: number) {
    try {
        await selectSetting(settingId);
    } catch (error) {
        console.log(error)
    }
}

export async function handleCreateSetting(settingName: string) {
    try {
        const result = await createSetting(settingName);
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function handleDeleteSetting(settingId: number) {
    try {
        const result = await deleteSetting(settingId);
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function handleShareSetting(settingId: number, settingName: string, targetAccountId: string) {
    try {
        const result = await shareSetting(settingId, settingName, targetAccountId);
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function handleCheckId(targetAccountId: string) {
    try {
        const result = await checkPositionId(targetAccountId);
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function handleSaveSetting(setting: any) {
    try {
        const result = await saveSetting(setting);
        return result;
    } catch (error) {
        console.log(error)
    }
}