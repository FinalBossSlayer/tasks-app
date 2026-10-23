import { useState } from "react";
import { useEffect } from "react";
import Tasks from "./Tasks";
import ProgressBar from "./ProgressBar";
import MenuButton from "./MenuButton";

const fillerList = [
  {
    id: 1,
    taskName: "Work",
    taskPoints: 50,
    completed: false,
    day: "1",
    month: "7",
    year: "2026",
  },
  {
    id: 2,
    taskName: "Run",
    taskPoints: 50,
    completed: false,
    day: "1",
    month: "7",
    year: "2026",
  },
  {
    id: 3,
    taskName: "Read a book",
    taskPoints: 50,
    completed: true,
    day: "1",
    month: "7",
    year: "2026",
  },
  {
    id: 4,
    taskName: "Test 1",
    taskPoints: 150,
    completed: false,
    day: "1",
    month: "7",
    year: "2026",
  },
  {
    id: 5,
    taskName: "Test 2",
    taskPoints: 150,
    completed: false,
    day: "1",
    month: "7",
    year: "2026",
  },
  {
    id: 6,
    taskName: "Test 3",
    taskPoints: 100,
    completed: false,
    day: "1",
    month: "7",
    year: "2026",
  },
];

const fillerAllTasks = [
  {
    1: {
      month: 1,
      1: [1],
      2: [2],
      3: [3],
      4: [4],
      5: [5],
      6: [6],
      7: [7],
      8: [8],
      9: [9],
      10: [10],
      11: [11],
      12: [12],
      13: [13],
      14: [14],
      15: [15],
      16: [16],
      17: [17],
      18: [18],
      19: [19],
      20: [20],
      21: [21],
      22: [22],
      23: [23],
      24: [24],
      25: [25],
      26: [26],
      27: [27],
      28: [28],
      29: [29],
      30: [30],
      31: [31],
    },
    2: { month: 2 },
    3: { month: 3 },
    4: { month: 4 },
    5: { month: 5 },
    6: { month: 6 },
    7: { month: 7 },
    8: { month: 8 },
    9: { month: 9 },
    10: { month: 10 },
    11: { month: 11 },
    12: { month: 12 },
    year: 2025,
  },
  {
    1: { month: 1 },
    2: { month: 2 },
    3: { month: 3 },
    4: { month: 4 },
    5: { month: 5 },
    6: { month: 6 },
    7: {
      month: 7,
      1: [
        1,
        {
          id: 2,
          taskName: "Run",
          taskPoints: 50,
          completed: false,
          day: "1",
          month: "1",
          year: "2025",
        },
        {
          id: 3,
          taskName: "Read a book",
          taskPoints: 50,
          completed: true,
          day: "2",
          month: "1",
          year: "2025",
        },
      ],
      2: [2],
      3: [3],
      4: [4],
      5: [5],
      6: [6],
      7: [7],
      8: [8],
      9: [9],
      10: [10],
      11: [11],
      12: [12],
      13: [13],
      14: [14],
      15: [15],
      16: [16],
      17: [17],
      18: [18],
      19: [19],
      20: [20],
      21: [21],
      22: [22],
      23: [23],
      24: [24],
      25: [25],
      26: [26],
      27: [27],
      28: [28],
      29: [29],
      30: [30],
      31: [31],
    },
    8: { month: 8 },
    9: { month: 9 },
    10: { month: 10 },
    11: { month: 11 },
    12: { month: 12 },
    year: 2026,
  },
];

export default function App() {
  const [taskList, setTaskList] = useState(fillerList);
  const [allTasks, setAllTasks] = useState([]);
  const [menu, setMenu] = useState("Tasks");

  useEffect(() => {
    const curYear = new Date().getFullYear();

    const year = {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
      12: {},
      year: curYear,
    };

    setAllTasks((item) => {
      const latestYear = item[item.length - 1]?.year;

      if (latestYear !== undefined || curYear <= latestYear) {
        return item;
      } else {
        return [...item, year];
      }
    });
  }, []);

  // useEffect(() => {
  //   const curMonth = new Date().getMonth();
  //   const curYear = new Date().getFullYear();
  //   const curDay = new Date().getDate();

  //   setAllTasks((objYear) =>
  //     objYear.map((item) =>
  //       item.year === curYear
  //         ? item.curMonth.curDay.at(0) === curDay
  //           ? [item.curMonth.curDay, taskList]
  //           : item.curMonth.curDay
  //         : item,
  //     ),
  //   );
  // }, [taskList]);

  // useEffect(() => {
  //   const curMonth = new Date().getMonth() + 1;
  //   const curYear = new Date().getFullYear();
  //   const curDay = new Date().getDate();
  //   const curDay = 1;

  //   console.log(allTasks[1][curMonth][curDay]);

  //   setAllTasks(allTasks => allTasks);
  // }, [allTasks]);

  return (
    <div>
      <ProgressBar taskList={taskList} />
      {/* menu render */}
      {menu === "Tasks" && (
        <Tasks taskList={taskList} onSetTaskList={setTaskList} />
      )}
      {menu === "Calendar" && <Calendar />}
      {menu === "TaskManager" && <TaskManager />}
      <MenuButton menu={menu} onSetMenu={setMenu} />
    </div>
  );
}

function Calendar() {
  return (
    <div>
      <p>Calendar</p>
    </div>
  );
}

function TaskManager() {
  return (
    <div>
      <p>Task Manager</p>
    </div>
  );
}
