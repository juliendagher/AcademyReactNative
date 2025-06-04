module.exports = {
  Swipeable: ({children, renderRightActions}) => (
    <>
      {children}
      {renderRightActions ? renderRightActions() : null}
    </>
  ),
  GestureHandlerRootView: ({children}) => children,
  // Add anything else you use
};
