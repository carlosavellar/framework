import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const LoadingButton = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      // @ts-expect-error Taking too tough to solve this type. ass.: José Carlos
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Add to cart"}
    </Button>
  );
};

export default LoadingButton;
