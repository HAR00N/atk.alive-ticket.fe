const code = [
  {
    code_name: "ticket_status",
    code_list: { "1": "received", "2": "progress", "3": "upgrade", "4": "deploy", "5": "complete", "99": "cancel" },
  },
];

const getCodeValue = (value, target) => {
  let item = code.find((content) => content.code_name == value);

  if (item == null || item == undefined) {
    return "";
  } else {
    return item.code_list[target];
  }
};

export { code, getCodeValue };
