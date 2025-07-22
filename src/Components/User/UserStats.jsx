import React from "react";
import { STATS_GET } from "../../api";
import Error from "../../Help/Error";
import Head from "../../Help/Head";
import Loading from "../../Help/Loading";
import UseFetch from "../../Hooks/UseFetch";

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, erro, loading, request } = UseFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (erro) return <Error erro={erro} />;
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estátisticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else {
    return null;
  }
};

export default UserStats;
