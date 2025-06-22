import React from "react";
import { usePopperTooltip } from "react-popper-tooltip";

const TooltipWrapper = ({ children, tooltip, placement = "top", delayShow = 0, ...props }) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement,
    delayShow,
    ...props,
  });

  return (
    <>
      <span ref={setTriggerRef}>
        {children}
      </span>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: "tooltip-container",
          })}
        >
          <div
            {...getArrowProps({
              className: "tooltip-arrow",
            })}
          />
          {tooltip}
        </div>
      )}
    </>
  );
};

export default TooltipWrapper; 