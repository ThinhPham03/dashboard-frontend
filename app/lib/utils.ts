export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

export const formatPercentage = (amount: number) => {
  return `${amount * 100}%`;
};

export const getCurrentTime = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}/${month}/${year}`;
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const getPosition = (accountId: string) => {
  if (accountId.length >= 9) {
    return "Line 1";
  } else if (accountId.length >= 6) {
    return "Line 2";
  } else if (accountId.length >= 3) {
    return "Line 3";
  }
};

export const getStatus = (status: number) => {
  if (status === 1) return "Enable";
  return "Disable";
};