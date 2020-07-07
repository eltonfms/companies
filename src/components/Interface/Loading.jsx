import React from "react";
import Lottie from "lottie-react-web";

import loading from "../../assets/lotties/loading.json";

const Loading = () => {
  return (
    <div className="loading -wrap">
      <div className="loading -anime">
        <Lottie
          options={{
            animationData: loading,
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
