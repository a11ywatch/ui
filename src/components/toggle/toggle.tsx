import React, { FunctionComponent, useState, useCallback } from "react";
import { Switch } from "@headlessui/react";
import { HtmlProps } from "../../common";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Toggle: FunctionComponent<
  HtmlProps & {
    active?: boolean;
    darkMode?: boolean;
    label?: string;
    onClick?(x?: any): any;
  }
> = ({ active, darkMode, label = "YEARLY", onClick }) => {
  const [enabled, setEnableState] = useState(!!active);

  const setEnabled = useCallback(
    (value: boolean) => {
      if (typeof onClick == "function") {
        onClick(value);
      }
      setEnableState(value);
    },
    [setEnableState, onClick]
  );

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-indigo-600" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span
          className={`text-sm font-medium ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {label}
        </span>
      </Switch.Label>
    </Switch.Group>
  );
};
