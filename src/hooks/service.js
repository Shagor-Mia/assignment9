import { useEffect, useState } from "react";

import axios from "axios";

export const useFetchAllServices = () => {
  const [services, setServices] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(true);
  const [serviceError, setServiceError] = useState("");

  useEffect(() => {
    setServiceLoading(true);
    axios("../pet.json")
      .then((res) => setServices(res.data))
      .catch((err) => setServiceError(err))
      .finally(() => setServiceLoading(false));
  }, []);
  return { services, serviceError, serviceLoading };
};
