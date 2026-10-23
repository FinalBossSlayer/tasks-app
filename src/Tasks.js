import CreateTasks from "./CreateTasks";
import TaskFormItem from "./TaskFormItem";
import TaskForm from "./TaskForm";
import ProgressShow from "./ProgressShow";

export default function Tasks({ taskList, onSetTaskList }) {
  return (
    <div>
      <ProgressShow taskList={taskList} />
      <CreateTasks
        taskList={taskList}
        onSetTaskList={onSetTaskList}
        heading={"Active Tasks"}
        paragraph={"To Do"}
      />
      <div style={{ display: "flex" }}>
        <TaskForm
          heading={"Active Tasks"}
          paragraph={"To Do"}
          bgColor={"lightblue"}
          boxShadow={"#0000001a 2px 3px 4px -2px"}
        >
          <div>
            {taskList.map(
              (item) =>
                item.completed || (
                  <TaskFormItem
                    taskName={item.taskName}
                    taskPoints={item.taskPoints}
                    completed={item.completed}
                    id={item.id}
                    onSetTaskList={onSetTaskList}
                    key={item.id}
                  />
                ),
            )}
          </div>
        </TaskForm>
        <TaskForm
          heading={"Compleated Tasks"}
          paragraph={"Done"}
          bgColor={"lightgreen"}
          boxShadow={"inset #0000001a 2px 3px 4px -2px"}
        >
          <div>
            {taskList.map(
              (item) =>
                item.completed && (
                  <TaskFormItem
                    taskName={item.taskName}
                    taskPoints={item.taskPoints}
                    completed={item.completed}
                    id={item.id}
                    onSetTaskList={onSetTaskList}
                    key={item.id}
                  />
                ),
            )}
          </div>
        </TaskForm>
      </div>
    </div>
  );
}
