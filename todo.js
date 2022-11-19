const todo_list = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let array = all.filter((person) => person.dueDate == yesterday);
    return array;
  };

  const due_today = () => {
    let array = all.filter((person) => person.dueDate === today);
    return array;
  };

  const due_later = () => {
    let arr = all.filter((person) => person.dueDate === tomorrow);

    return arr;
  };


  
  const to_displayable_list = (list) => {
    let arr = [];
    list.map((item) => {
      const completionStatus = item.completed ? "[x]" : "[ ]";
      const displayedDate =
        item.dueDate === new Date().toLocaleDateString("en-CA")
          ? ""
          : item.dueDate;
      arr.push(completionStatus + " " + item.title + " " + displayedDate);
    });
    return arr.join("\n").trim();
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    due_today,
    due_later,
    to_displayable_list,
  };
};
const todos = todo_list();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

let dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
let overdues = todos.overdue();
let formattedOverdues = todos.to_displayable_list(overdues);
console.log(formattedOverdues);
console.log("\n\n");


console.log("Due Today");
let itemsDue_today = todos.due_today();
let formattedItemsDue_today = todos.to_displayable_list(itemsDue_today);
console.log(formattedItemsDue_today);
console.log("\n\n");


console.log("Due Later");
let itemsDue_later = todos.due_later();
let formattedItemsDue_later = todos.to_displayable_list(itemsDue_later);
console.log(formattedItemsDue_later);
console.log("\n\n");
module.exports = todo_list;