"use client";

import { useFormState } from 'react-dom';
import { ProductField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  CubeIcon,
  Square3Stack3DIcon,
  ViewColumnsIcon,
  TruckIcon,
  ReceiptPercentIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { addProduct } from '@/app/lib/serverActions';

export default function AddProductForm({ data }: { data: ProductField }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addProduct, initialState);

  const laboratorys = data.laboratorys;
  const groups = data.groups;
  const ranges = data.ranges;
  const branchs = data.branchs;

  return <form action={dispatch}>
    <div className="rounded-md bg-gray-50 p-4 md:p-6">

      {/* Product name */}
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Enter name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter product name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <CubeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

      {/* VAT */}
      <div className="mb-4">
        <label htmlFor="vat" className="mb-2 block text-sm font-medium">
          Enter VAT
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="vat"
              name="vat"
              type="number"
              placeholder="Enter product vat (%)"
              min={0}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <ReceiptPercentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

      {/* Price name */}
      <div className="mb-4">
        <label htmlFor="price" className="mb-2 block text-sm font-medium">
          Enter price
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="price"
              name="price"
              type="number"
              min={0}
              placeholder="Enter product price"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

      {/* Laboratory Name */}
      <div className="mb-4">
        <label htmlFor="laboratory" className="mb-2 block text-sm font-medium">
          Choose laboratory
        </label>
        <div className="relative">
          <select
            id="laboratory"
            name="laboId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a laboratory
            </option>
            {laboratorys.map((laboratory) => (
              <option key={laboratory.id} value={laboratory.id}>
                {laboratory.name}
              </option>
            ))}
          </select>
          <BeakerIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Group Name */}
      <div className="mb-4">
        <label htmlFor="group" className="mb-2 block text-sm font-medium">
          Choose group
        </label>
        <div className="relative">
          <select
            id="group"
            name="groupId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a group
            </option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
          <Square3Stack3DIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Range Name */}
      <div className="mb-4">
        <label htmlFor="range" className="mb-2 block text-sm font-medium">
          Choose range
        </label>
        <div className="relative">
          <select
            id="range"
            name="productRangeId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a range
            </option>
            {ranges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.name}
              </option>
            ))}
          </select>
          <ViewColumnsIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Branch Name */}
      <div className="mb-4">
        <label htmlFor="branch" className="mb-2 block text-sm font-medium">
          Choose branch
        </label>
        <div className="relative">
          <select
            id="branch"
            name="productBranchId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a branch
            </option>
            {branchs.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>
          <TruckIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Product Status */}
      <fieldset>
        <legend className="mb-2 block text-sm font-medium">
          Set the product status
        </legend>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                id="hidden"
                name="status"
                type="radio"
                value="hidden"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                required
              />
              <label
                htmlFor="hidden"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
              >
                Hidden <XMarkIcon className="h-4 w-4" />
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="active"
                name="status"
                type="radio"
                value="active"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="active"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
              >
                Active <CheckIcon className="h-4 w-4" />
              </label>
            </div>
          </div>
        </div>
      </fieldset>

    </div>
    <div className="mt-6 flex justify-end gap-4">
      <Link
        href="/dashboard/products"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">Add</Button>
    </div>
  </form>
}
