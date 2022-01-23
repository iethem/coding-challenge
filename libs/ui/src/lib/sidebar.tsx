import { useState } from 'react';

import './sidebar.module.css';

interface Option {
  value: number | string;
  label: string;
}

const durationOptions: Option[] = [
  {
    value: 15,
    label: '15 min',
  },
  {
    value: 30,
    label: '30 min',
  },
];

const eventTypes: Option[] = [
  {
    value: 'share_slots',
    label: 'Share slots',
  },
];

export function Sidebar() {
  const [isSavePlaceholdersChecked, setSavePlaceholdersChecked] =
    useState(false);
  const [selectedDuration, setSelectedDuration] = useState<string>();
  const [selectedEventType, setSelectedEventType] = useState<any>();
  const [availability, setAvailability] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>();
  const onDurationChanged = (event: any) =>
    setSelectedDuration(event.target.value);
  const onEventTypeChanged = (event: any) =>
    setSelectedEventType(event.target.value);
  const onSavePlaceholdersChanged = () =>
    setSavePlaceholdersChecked(!isSavePlaceholdersChecked);
  const onPlaceholdersChanged = (event: any) =>
    setPlaceholder(event.target.value);
  const onAvailabilityChanged = (event: any) =>
    setAvailability(event.target.value);
  const onCopyToClipBoardClick = () =>
    navigator.clipboard.writeText(availability);

  return (
    <div className="w-64 h-full bg-zinc-50 pt-10 px-5">
      <div className="flow-root">
        <button
          type="button"
          className="float-right bg-red-500 rounded-md p-2 text-white focus:outline-none shadow-lg shadow-red-300/50"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4">
        <label className="font-semibold ..." htmlFor="duration">
          Duration
        </label>
        <select
          className="block bg-zinc-50 text-gray-500 focus:outline-none"
          defaultValue="30"
          id="duration"
          value={selectedDuration}
          onChange={onDurationChanged}
        >
          {durationOptions.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="font-semibold ..." htmlFor="eventType">
          Event type
          <i className="fa fa-info-circle pl-2 font-thin text-blue-500" />
        </label>
        <select
          className="w-full block bg-zinc-50 text-gray-500 focus:outline-none"
          id="eventType"
          value={selectedEventType}
          onChange={onEventTypeChanged}
        >
          {eventTypes.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <div className="block">
          <label
            className="font-semibold float-left ..."
            htmlFor="placeholders"
          >
            Save placeholders
          </label>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500 float-right"
            checked={isSavePlaceholdersChecked}
            onChange={onSavePlaceholdersChanged}
          />
          <textarea
            className="w-52 placeholder:text-sm p-2 mt-1 text-gray-500 border border-gray-300 rounded-lg focus:outline-none ..."
            id="placeholders"
            placeholder="Type placeholder name here"
            value={placeholder}
            onChange={onPlaceholdersChanged}
          />
        </div>
      </div>

      <div className="mt-2">
        <textarea
          className="h-60 w-52 placeholder:text-sm text-gray-500 border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none ..."
          id="availability"
          placeholder="Start selecting availabilities you would like to share on the calendar"
          value={availability}
          onChange={onAvailabilityChanged}
        />
      </div>

      <div className="mt-4">
        <button
          className="w-full bg-white text-blue-500 font-bold text-l p-2 border border-blue-500 rounded-lg"
          onClick={onCopyToClipBoardClick}
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
