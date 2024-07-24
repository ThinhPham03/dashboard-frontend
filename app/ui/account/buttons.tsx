"use client";

import { PlusIcon, ArrowPathIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { resetPassword, createAccount, turnOffAccount, turnOnAccount } from '@/app/api/apiAccount';

export function CreateAccount({ role }: { role: string }) {
  const createAccountWithId = createAccount.bind(null);

  const handleCreate = (event: React.FormEvent) => {
    event.preventDefault();
    const positionId = prompt("Please enter positionId");
    if (!positionId) return;
    createAccountWithId(positionId);
  };

  return (
    <button
      onClick={handleCreate}
      className={`${role === "line1" ? "hidden" : ""} flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
    >
      <span className="hidden md:block">Create Account</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </button>
  );
}

export function ResetPassword({ id, role }: { id: string, role: string }) {
  const resetPasswordWithId = resetPassword.bind(null, id);

  const handleReset = (event: React.FormEvent) => {
    event.preventDefault();
    if (window.confirm(`Are you sure you want to reset password for ${id}?`)) {
      resetPasswordWithId();
      window.alert(`Reset password for ${id} successful`);
    }
  };

  return (
    <form onSubmit={handleReset}>
      <button className={`${role === "line1" ? "hidden" : ""} rounded-md border p-2 hover:bg-gray-100`}>
        <span className="sr-only">Reset</span>
        <ArrowPathIcon className="w-4" />
      </button>
    </form>
  );
}

export function ChangeStatus({ id, status, role }: { id: string, status: number, role: string }) {
  const turnOnWithId = turnOnAccount.bind(null, id);
  const turnOffWithId = turnOffAccount.bind(null, id);

  const handleDisable = (event: React.FormEvent) => {
    event.preventDefault();
    if (window.confirm(`Are you sure you want to disable account ${id}?`)) {
      turnOffWithId();
      location.reload();
    }
  };

  const handleEnable = (event: React.FormEvent) => {
    event.preventDefault();
    if (window.confirm(`Are you sure you want to enable account ${id}?`)) {
      turnOnWithId();
      location.reload();
    }
  };

  if (status == 0) {
    return (
      <form onSubmit={handleEnable}>
        <button className={`${role === "line1" ? "hidden" : ""} rounded-md border p-2 hover:bg-gray-100`}>
          <span className="sr-only">Enable</span>
          <CheckIcon className="w-4" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleDisable}>
      <button className={`${role === "line1" ? "hidden" : ""} rounded-md border p-2 hover:bg-gray-100`}>
        <span className="sr-only">Disable</span>
        <XMarkIcon className="w-4" />
      </button>
    </form>
  );
}