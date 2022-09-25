import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Stats, StatsInitializer } from "../interfaces";
import { getStats } from "../services";

type StatsSectionOptions = {
  stats: Stats;
  options: Record<string, unknown>;
};

export const useStatsSection = (): StatsSectionOptions => {
  const { t } = useTranslation("LandingPage");

  const [stats, setStats] = useState<Stats>(StatsInitializer);

  useEffect(() => {
    getStats().then((stats) => {
      setStats(stats);
    });
  }, []);

  const data = [
    [
      {
        name: t("statsSection.charts.users.passengers"),
        value: stats.users.nbPassengers,
      },
      {
        name: t("statsSection.charts.users.drivers"),
        value: stats.users.nbDrivers,
      },
    ],
    [
      {
        name: t("statsSection.charts.trips.single"),
        value: stats.trips.nbSingleTrips,
      },
      {
        name: t("statsSection.charts.trips.frequent"),
        value: stats.trips.nbFrequentTrips,
      },
    ],
  ];
  const options = {
    title: {
      left: "center",
      textStyle: {
        color: "#999",
        fontWeight: "normal",
        fontSize: 16,
      },
    },
    series: data.map((data, idx) => {
      const top = idx * 50;
      return {
        type: "pie",
        radius: [100, 55],
        responsive: true,
        maintainAspectRatio: false,
        top: top + "%",
        height: "50%",
        left: "center",
        scale: true,
        scaleSize: 1,
        width: 500,
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c}}",
          minMargin: 5,
          edgeDistance: 90,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 10,
              color: "#999",
            },
          },
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
        },
        data: data,
      };
    }),
  };
  return { stats, options };
};
