// src/hooks/useServices.js
import { useState } from 'react';

export const useServices = () => {
  const [services, setServices] = useState([
    { id: 1, serviceType: '', supplier: '', remarks: '' }
  ]);

  const addService = () => {
    setServices([
      ...services,
      { id: Date.now(), serviceType: '', supplier: '', remarks: '' }
    ]);
  };

  const removeService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const updateService = (id, field, value) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  return {
    services,
    addService,
    removeService,
    updateService
  };
};
