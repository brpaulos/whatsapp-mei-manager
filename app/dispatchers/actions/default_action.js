module.exports = async (action) => {
  console.log('unhandled action. type:', action.type, action);
  return { message: "unhandled action type" };
}
