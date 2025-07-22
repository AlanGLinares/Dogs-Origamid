import React from "react";
import style from "./UserStats.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphDate = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );

    setGraph(graphDate);

    console.log(data);
  }, [data]);

  return (
    <>
      <section className={`${style.graph} animeLeft`}>
        <div className={`${style.total} ${style.graphItem}`}>
          <p>Acesso: {total}</p>
        </div>
        <div className={style.graphItem}>
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 80, left: 80, right: 80 }}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#fff",
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: '#333',
              },
            }}
          />
        </div>
        <div className={style.graphItem}>
          <VictoryChart>
            <VictoryBar alignment="start" data={graph}></VictoryBar>
          </VictoryChart>
        </div>
      </section>
    </>
  );
};

export default UserStatsGraphs;
