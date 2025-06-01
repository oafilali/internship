// src/hooks/useRevenue.js
import { useState } from 'react';

export const useRevenue = () => {
  const [revenues, setRevenues] = useState([
    {
      id: 1,
      supplier: '',
      totalCost: '',
      markup: '',
      totalSelling: '',
      profitMarginWithoutComm: '',
      commission: '',
      profitMarginAdjForComm: '',
      flag: '',
      commAmount: '',
      totalProfitInclComm: ''
    }
  ]);

  const addRevenue = () => {
    setRevenues([
      ...revenues,
      {
        id: Date.now(),
        supplier: '',
        totalCost: '',
        markup: '',
        totalSelling: '',
        profitMarginWithoutComm: '',
        commission: '',
        profitMarginAdjForComm: '',
        flag: '',
        commAmount: '',
        totalProfitInclComm: ''
      }
    ]);
  };

  const removeRevenue = (id) => {
    setRevenues(revenues.filter(revenue => revenue.id !== id));
  };

  const updateRevenue = (id, field, value) => {
    setRevenues(revenues.map(revenue => 
      revenue.id === id ? { ...revenue, [field]: value } : revenue
    ));
  };

  return {
    revenues,
    addRevenue,
    removeRevenue,
    updateRevenue
  };
};