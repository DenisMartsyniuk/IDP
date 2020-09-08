import React, { FC } from "react";

import useGetJobsApollo from "../../bus/Jobs/hooks/useGetJobsApollo";

const Home: FC = () => {
  const { data } = useGetJobsApollo();

  console.log(data);
  return <div>Home</div>;
};

export default Home;
