const logger = (store) => (next) => (action) => {
  console.group("Action dispatched");
  console.log("action", action);
  console.log("OLD", store.getState());
  next(action);
  console.log("NEW", store.getState());
  console.groupEnd();
};

export default logger;
