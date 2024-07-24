"use client";

import { handleCheckId, handleCreateSetting, handleDeleteSetting, handleSelectSetting, handleShareSetting } from "@/app/lib/serverActions"
import { ArrowTopRightOnSquareIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Setting({ settings }: { settings: any }) {

    const selectedSetting = settings.find((setting: any) => setting.isSelect === 1);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSelectSetting(Number(event.target.value));
        window.location.reload();
    };

    const handleCreate = async (event: React.FormEvent) => {
        event.preventDefault();
        const eventCreate = handleCreateSetting.bind(null);

        const settingName = window.prompt(`Please enter setting name:`);
        if (settingName) {
            const settingId = await eventCreate(settingName);

            const selectElement = document.getElementById('setting')!;
            const newOption = document.createElement('option');
            newOption.value = settingId;
            newOption.text = settingName;
            selectElement.appendChild(newOption);
        }
    };

    const handleShare = async (event: React.FormEvent) => {
        event.preventDefault();
        const eventShare = handleShareSetting.bind(null);
        const eventCheck = handleCheckId.bind(null);

        const positionId = window.prompt(`Please enter the positionId you want to share:`);
        if (positionId) {
            const resultCheck = await eventCheck(positionId);
            if (resultCheck > 0) {
                const settingName = window.prompt(`Please enter setting name for "${positionId}":`);
                if (settingName) {
                    const resultShare = await eventShare(selectedSetting.settingId, settingName, positionId);
                    if (resultShare > 0) {
                        window.alert(`Share setting "${selectedSetting.settingName}" for "${positionId}" successful`);
                    }
                }
            } else {
                window.alert(`PositionId does not exist`);
            }
        }
    };

    const handleDelete = async (event: React.FormEvent) => {
        event.preventDefault();
        const eventDelete = handleDeleteSetting.bind(null);

        if (window.confirm(`Are you sure to delete setting "${selectedSetting.settingName}"?`)) {
            const result = await eventDelete(selectedSetting.settingId);
            if (result > 0) {
                window.alert(`Delete setting "${selectedSetting.settingName}" successful`);
                window.location.reload();
            }
        }
    };

    return (
        <>
            <div className="relative flex">
                <select
                    id="setting"
                    name="setting"
                    className="mr-2 peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    value={selectedSetting ? selectedSetting.settingId : ""}
                    onChange={handleSelectChange}
                    required
                >
                    <option value="" disabled>
                        -----
                    </option>
                    {settings.map((setting: { settingId: number; settingName: string }) => (
                        <option key={setting.settingId} value={setting.settingId}>
                            {setting.settingName}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleCreate}
                    className={`mr-2 flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
                >
                    <span className="hidden md:block">Create</span>{' '}
                    <PlusIcon className="h-5 md:ml-4" />
                </button>

                <button
                    onClick={handleShare}
                    className={`mr-2 flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
                >
                    <span className="hidden md:block">Share</span>{' '}
                    <ArrowTopRightOnSquareIcon className="h-5 md:ml-4" />
                </button>

                <button
                    onClick={handleDelete}
                    className={`flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
                >
                    <span className="hidden md:block">Delete</span>{' '}
                    <XMarkIcon className="h-5 md:ml-4" />
                </button>
            </div>
        </>
    );
}