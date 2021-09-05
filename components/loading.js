import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

const Loader = ({ loading, textContent = "Loading..." }) => {
  return (
    <Spinner
      visible={loading}
      textContent={textContent}
      textStyle={{ color: "#fff", fontWeight: "400" }}
    />
  );
};

export default Loader;
